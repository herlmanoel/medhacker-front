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
        const token = JSON.parse(localStorage.getItem('token'));
        console.log('localStorage.getItem()', JSON.parse(localStorage.getItem('token')));

        if (token) {
            axios.defaults.headers.authorization = `Bearer ${token}`;
            setAuthorized(true);
        }
        setLoading(false)
    }, []);

    async function handleLogin(event, { email, senha }) {
        event.preventDefault();
        const { data: { token } } = await axios.post('/autenticar', { email, senha });

        localStorage.setItem('token', JSON.stringify(token));
        axios.defaults.headers.authorization = `Bearer ${token}`;
        setAuthorized(true);        
        history.push('/listagemusuarios');
    }

    async function handleLogout() {
        setAuthorized(false);
        localStorage.removeItem('token');
        axios.defaults.headers.authorization = undefined;
        history.push('/login');
    }

    return (
        <Context.Provider value={{ authorized, setAuthorized, loading, handleLogin, handleLogout }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };