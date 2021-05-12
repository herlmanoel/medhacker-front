import { createContext } from 'react';
import { useState } from 'react';

const ContextProviderModal = createContext();

function ProviderModal({ children }) {
    const [eventoId, setEventoId] = useState(null);
    return (
        <ContextProviderModal.Provider 
            value={{ eventoId, setEventoId }}
        >
            { children }
        </ContextProviderModal.Provider>
    );
}

export { ContextProviderModal, ProviderModal };