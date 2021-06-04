
import axios from 'axios';
const token = JSON.parse(localStorage.getItem('token'));
const URL = true ? 'http://localhost:3333/' : 'https://api-medhacker.herokuapp.com';

const instance = axios.create({
    baseURL: URL,
    headers: {
        'authorization': token,
    }
});

instance.defaults.headers.authorization = `Bearer ${token}`;

export default instance;