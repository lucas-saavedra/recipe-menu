
import { useEffect, useState } from "react";
import axios from 'axios';
import { Container } from "react-bootstrap";
import { useFormik } from 'formik';
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";

const SearchListContainer = () => {
    const [search, setSearch] = useState('');
    const [recipes, setRecipes] = useState('');
    const [offset, setOffset] = useState(0);
    const [totalRecipes, setTotalRecipes] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        let mounted = true;
        if (mounted) {
            if (search !== '') {
                setLoading(true);
                axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&offset=${offset}&apiKey=${import.meta.env.VITE_API_KEY}`)
                    .then(({ data }) => {
                        setRecipes(data.results);
                        setTotalRecipes(data.totalResults);
                    })
                    .catch((error) => {
                        setError(error)
                    })
                    .finally(() => {
                        setLoading(false)
                    })
            }
        }
        return function cleanup() {
            mounted = false
        }
    }, [search, offset])

    const paginate = offset => {
        setOffset(offset)
    };
    return (
        <>
            <Container className="h-100">
                <SearchForm useFormik={useFormik} setSearch={setSearch} />
                <SearchList
                    loading={loading}
                    offset={offset}
                    paginate={paginate}
                    totalRecipes={totalRecipes}
                    recipes={recipes}
                    error={error}
                />
            </Container>

        </>
    )
}

export default SearchListContainer