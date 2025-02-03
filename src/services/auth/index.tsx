import axios from 'axios';
import { AuthRequest } from './type';

const registerUser = (authRequest: AuthRequest): void => {

    axios.post('https://localhost:8000/api/Authentication/register', {
            email: authRequest.email,
            password: authRequest.password,
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
}

export const AuthService = {
    register: registerUser
};