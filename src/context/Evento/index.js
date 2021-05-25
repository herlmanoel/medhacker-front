import { createContext, useState } from 'react';

export const ContexEventos = createContext();

export default function ListagemProvider({ children }){
    
    const [ dataEventos, setDataEventos ] = useState([]);
    return (
        <ContexEventos.Provider 
            value={{
                dataEventos, setDataEventos 
            }}
        >
            {children}
        </ContexEventos.Provider>
    );
}
