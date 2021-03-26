import { createContext, useEffect } from 'react';
import { useState } from 'react';
import axios from '../../services';
import history from '../../routes/history';
const Context = createContext();

function AuthProvider({ children }) {
    const [authorized, setAuthorized] = useState(false);
    const [loading, setLoading] = useState(true);
    console.log('Login ', authorized);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            axios.defaults.headers.authorization = `Bearer ${JSON.parse(token)}`;
            setAuthorized(true);
        }
        console.log('loading  ', loading);
        setTimeout(() => setLoading(false), 2000);
    }, []);

    async function handleLogin(event, { email, senha }) {
        event.preventDefault();
        const { data: { token } } = await axios.post('/autenticar', { email, senha });

        localStorage.setItem('token', JSON.stringify(token));
        axios.defaults.headers['authorization'] = `Bearer ${token}`;
        console.log('handleLogin: ', axios.defaults.headers.authorization);
        axios.defaults.headers.common = {
            'authorization': 'Bearer ' + token
        };
        console.log(axios.defaults.headers.common);
        setAuthorized(true);        
        history.push('/listagemusuarios');
    }

    async function handleLogout(event) {
        event.preventDefault();
        setAuthorized(false);
        localStorage.removeItem('token');
        axios.defaults.headers.authorization = undefined;
        history.push('/login');
    }

    return (
        <Context.Provider value={{ authorized, setAuthorized, loading, handleLogin }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };