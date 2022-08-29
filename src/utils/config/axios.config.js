
import axios from 'axios';

// * Default config for axios

export const API_REQUEST = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes'
})