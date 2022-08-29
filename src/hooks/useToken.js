import { useState } from 'react';


const useToken = () => {

    const getToken = () => {
        const token = localStorage.getItem('token');
        return token
    };
    const [token, setToken] = useState(getToken());
    const saveToken = token => {
        localStorage.setItem('token', token);
        setToken(token);
    };
    const deleteToken = () => {
        localStorage.removeItem('token');

    }
    return {
        deleteToken,
        setToken: saveToken,
        token
    }
}
export default useToken;