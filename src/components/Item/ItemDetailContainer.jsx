
import { useState, useEffect } from "react";
import axios from "axios";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";
import roundPrice from '../../utils/roundPrice.util';
import { getRecipeById } from "../../services/axiosService";
const ItemDetailContainer = ({ id }) => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let mounted = true;
        if (mounted) {
            getRecipeById(id)
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
