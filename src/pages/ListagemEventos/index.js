import { useContext, useEffect } from 'react';
import Listagem from '../../components/Listagem';
import { ContextListagem } from '../../context/Listagem';

// import axios from '../../services';
import Eventos from '../../services/eventos.json';

export default function ListagemEventos() {
    const { dataTable, setDataTable, setColumns, setTitle, setRegistrationPage } = useContext(ContextListagem);

    useEffect(() => {
        document.title = 'Listagem de Eventos';
        const tituloPage = 'Eventos';
        const routePage = '/formevento';

        const columns = [
            { id: 1, title: 'Título' },
            { id: 3, title: 'Data' },
            { id: 4, title: 'Endereço' },
            { id: 5, title: 'Ações' },
        ];
        setRegistrationPage(routePage);
        setTitle(tituloPage);
        setColumns(columns);
        
        (async function getDataUsuarios() {
            // const { data } = await axios.get('usuarios');
            await setDataTable(Eventos);
        })();

    }, [dataTable, setDataTable, setColumns, setTitle, setRegistrationPage ]);

    return (
        <Listagem></Listagem>
    );
}