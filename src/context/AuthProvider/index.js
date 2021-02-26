import { createContext } from 'react';

const Context = createContext();

function AuthProvider({ children }) {
    return (
        <Context.Provider value={{ athenticate: false }} >
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };