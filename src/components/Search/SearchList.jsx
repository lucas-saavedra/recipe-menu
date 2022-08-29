

import ItemList from "../Item/ItemList";
import PaginationCmp from "./Pagination/Pagination";
import DisplayMessage from "../DisplayMessage/DisplayMessage";
import Loader from "../Loader/Loader";

const SearchList = ({ loading, error, paginate, offset, recipes, totalRecipes }) => {
    console.log(recipes);
    return (
        <>
            {recipes ?
                (loading ?
                    (<Loader />)
                    :
                    (
                        <>
                            <PaginationCmp
                                offset={offset}
                                paginate={paginate}
                                totalRecipes={totalRecipes}
                            />

                            {error ?
                                (<DisplayMessage msg={'An error has appeared, please try again.'} />) :
                                (< ItemList recipes={recipes} />)}
                        </>
                    )
                ) :
                (
                    <DisplayMessage msg={'Search something tasty!'} status='smileFace' />
                )
            }

        </>
    )
}

export default SearchList