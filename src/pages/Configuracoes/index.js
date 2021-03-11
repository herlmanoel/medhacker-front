import { useContext, useEffect } from 'react';
import Listagem from '../../components/Listagem';
import { ContextListagem } from '../../context/Listagem';

// import axios from '../../services';
import Eventos from '../../services/eventos.json';

export default function Configuracoes() {
    const { dataTable, setDataTable, setColumns, setTitle, setRegistrationPage } = useContext(ContextListagem);

    useEffect(() => {
        document.title = 'Configuracoes';
        const tituloPage = 'Configuracoes';
        const routePage = '/formevento';

        const columns = [
            { id: 1, title: 'Título' },
            { id: 3, title: 'Descrição' },
            { id: 4, title: 'Evento' },
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