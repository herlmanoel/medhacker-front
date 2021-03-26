import axios from 'axios';

const token = JSON.parse(localStorage.getItem('token'));

const instance = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'authorization': token,
    }
});

instance.defaults.headers.authorization = `Bearer ${token}`;

export default instance;