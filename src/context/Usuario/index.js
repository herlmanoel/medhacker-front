import { createContext, useState } from 'react';

export const Contextusuarios = createContext();

export default function ListagemProvider({ children }){
    
    const [ dataUsuarios, setDataUsuarios ] = useState([]);
    return (
        <Contextusuarios.Provider 
            value={{
                dataUsuarios, setDataUsuarios 
            }}
        >
            {children}
        </Contextusuarios.Provider>
    );
}
