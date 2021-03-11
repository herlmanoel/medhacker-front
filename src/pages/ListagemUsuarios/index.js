import { useContext, useEffect } from 'react';
import Listagem from '../../components/Listagem';
import { ContextListagem } from '../../context/Listagem';

import axios from '../../services';
// import Usuarios from '../../services/usuarios.json';

export default function ListagemUsuarios() {
    const { dataTable, setDataTable, setColumns, setTitle, setRegistrationPage } = useContext(ContextListagem);

    useEffect(() => {
        document.title = 'Listagem de Usuários';
        const tituloPage = 'Usuários';
        const routePage = '/formusuario';
        const columns = [
            { id: 1, title: 'Nome' },
            { id: 2, title: 'Permissão' },
            { id: 3, title: 'Status' },
            { id: 4, title: 'Ações' },
        ];
        setRegistrationPage(routePage);
        setTitle(tituloPage);
        setColumns(columns);
        
        (async function getDataUsuarios() {
            const { data } = await axios.get('usuarios');
            await setDataTable(data);
        })();

    }, [dataTable, setDataTable, setColumns, setTitle, setRegistrationPage, ]);

    return (
        <Listagem></Listagem>
    );
}