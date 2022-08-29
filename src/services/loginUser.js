import axios from "axios";
const loginUser = async (email, password) => {
    return await axios
        .post('https://reqres.in/api/login',
            { email, password }
        );
}
export default loginUser;
