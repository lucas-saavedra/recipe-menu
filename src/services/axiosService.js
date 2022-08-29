
import { API_REQUEST } from "../utils/config/axios.config";
import axios from "axios";
/**
 * 
 * @param {number} search // search string
 * @param {string} offset // offset to pagination
 * @return array of objects
 */
export const getRecipes = async (search, offset) => {
    const result = await API_REQUEST.get(`/complexSearch?query=${search}&offset=${offset}&apiKey=${import.meta.env.VITE_API_KEY}`)
    return result;
}
/**
 * 
 * @param {string} id 
 * @returns 
 */
export const getRecipeById = async (id) => {
    const result = await API_REQUEST.get(`/${id}/information?&apiKey=${import.meta.env.VITE_API_KEY}`)
    return result;
}
/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns credentials ==> token
 */
export const loginUser = async (email, password) => {
    return await axios
        .post('https://reqres.in/api/login',
            { email, password }
        );
}
