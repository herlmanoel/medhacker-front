import axios from '../index';

export const login = async (user) => {
    const data = await axios
        .post('autenticar', user)
        .then(res => res.data);
    console.log(data);
    return data;
};

export const storeToken = (token) => {
    window.localStorage.setItem('token', token);
}

export const isAuthenticate = async () => {

    if (!window.localStorage.getItem('token'))
        return false;

    return true;
}
