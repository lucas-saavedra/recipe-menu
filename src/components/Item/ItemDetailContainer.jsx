
import { useState, useEffect } from "react";
import axios from "axios";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";
import roundPrice from '../../utils/roundPrice.util';
const ItemDetailContainer = ({ id }) => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let mounted = true;
        if (mounted) {

            axios.get(`https://api.spoonacular.com/recipes/${id}/information?&apiKey=${import.meta.env.VITE_API_KEY}`)
                .then(({ data }) => {
                    setItem(
                        {
                            ...data,
                            pricePerServing: roundPrice(data.pricePerServing)
                        }
                    )
                }
                )
                .catch(err => console.log(err))
                .then(() => setLoading(false))
        }
        return function cleanup() {
            mounted = false
        }
    }, [id])

    return (
        <>
            {loading && true ?
                (<Loader />)
                :
                (<ItemDetail item={item} />)
            }
        </>
    )
}

export default ItemDetailContainer
