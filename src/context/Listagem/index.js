import { createContext, useState } from 'react';

export const ContextListagem = createContext();

export default function ListagemProvider({ children }){
    
    const [ dataTable, setDataTable ] = useState([]);
    const [ columns, setColumns ] = useState([]);
    const [title, setTitle ] = useState('');
    const [registrationPage, setRegistrationPage ] = useState('');
    return (
        <ContextListagem.Provider 
            value={{
                dataTable, setDataTable,
                columns, setColumns,
                title, setTitle,
                registrationPage, setRegistrationPage,
            }}
        >
            {children}
        </ContextListagem.Provider>
    );
}
