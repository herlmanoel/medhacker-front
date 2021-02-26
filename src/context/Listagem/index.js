import { createContext, useState } from 'react';

export const ContextListagem = createContext();

export default function ListagemProvider({ children }){
    
    const [ dataTable, setDataTable ] = useState([]);
    const [ columns, setColumns ] = useState([]);
    const [title, setTitle ] = useState('');
    
    return (
        <ContextListagem.Provider 
            value={{
                dataTable, setDataTable,
                columns, setColumns,
                title, setTitle,
            }}
        >
            {children}
        </ContextListagem.Provider>
    );
}
