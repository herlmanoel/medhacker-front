import { useContext, useEffect } from 'react';
import Listagem from '../../components/Listagem';
import { ContextListagem } from '../../context/Listagem';

import axios from '../../services';
// import Eventos from '../../services/eventos.json';

export default function ListagemEventos() {
    const { dataTable, setDataTable, setColumns, setTitle, setRegistrationPage } = useContext(ContextListagem);

    useEffect(() => {
        document.title = 'Listagem de Eventos';
        const tituloPage = 'Eventos';
        const routePage = '/formevento';
        
        const columns = [
            { id: 1, title: 'Titulo' },
            { id: 4, title: 'Endereço' },
            { id: 5, title: 'Início' },
            { id: 6, title: 'Fim' },
            { id: 7, title: 'Ações' },
        ];
        setRegistrationPage(routePage);
        setTitle(tituloPage);
        setColumns(columns);
        
        (async function getDataEventos() {
            const { data } = await axios.get('eventos');
            console.log(data);
            await setDataTable(data);
        })();
        
    }, [ dataTable, setDataTable, setColumns, setTitle, setRegistrationPage ]);

    return (
        <Listagem></Listagem>
    );
}