import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import {
    Table,
    Head,
    ItemHead,
    Line,
    Body,
    ItemBody,
    Name,
    Email,
    WrapperTable,
    WrapperFooter,
    BlockButton,
    EditIcon,
    TrashIcon,
    LinkAction,
} from './style.js';

import ButtonComponent from '../../../../components/Button';

import axios from '../../../../services';
import { Contextusuarios } from '../../context';

export default function TableComponent() {
    const [dataTable, setDataTable] = useState([]);
    const history = useHistory();
    const { dataUsuarios } = useContext(Contextusuarios);
    const columns = [
        { id: 1, title: 'Nome' },
        { id: 2, title: 'Permissão' },
        { id: 3, title: 'Status' },
        { id: 4, title: 'Ações' },
    ];

    useEffect(() => {
        setDataTable(dataUsuarios);
    }, [dataUsuarios]);

    useEffect(() => {
        document.title = 'Listagem de Usuários';
        getUsers();
    }, []);

    function getUsers() {

        (async function getDataUsuarios() {
            await console.log(" AXIOS: ", axios.defaults)
            // const token = JSON.parse(localStorage.getItem('token'));
            await console.log(axios.defaults);
            const { data } = await axios.get('usuarios');
            await setDataTable(data);
        })();
    }

    function handleButtonCadastrar(event) {
        event.preventDefault();
        return history.push('/formusuario');
    }

    async function handleDelete(id) {
        await axios.delete(`/usuarios`, {
            data: { id: id }
        })
            .then(result => console.log(result))
            .catch(err => console.log(err));
        getUsers();
    }

    function BodyItems() {
        return (
            <Body>
                {dataTable.map(item => {
                    return (
                        <Line key={item.id}>
                            <ItemBody> <Name>{item.nome}</Name> <Email>{item.email}</Email> </ItemBody>
                            <ItemBody> {item.permissao} </ItemBody>
                            <ItemBody> Ativo </ItemBody>
                            <ItemBody>
                                <LinkAction to={{
                                    pathname: "/formusuario",
                                    state: {
                                        id: item.id
                                    }
                                }} >
                                    <EditIcon color="#ADD96C" />
                                </LinkAction>
                                <LinkAction to="#" onClick={() => handleDelete(item.id)}>
                                    <TrashIcon color="#F23D4C" />
                                </LinkAction>
                            </ItemBody>
                        </Line>
                    );
                })}
            </Body>
        );
    }

    function HeadComponent() {
        return (<Head>
            <Line>
                {columns.map(column => {
                    return <ItemHead key={column.id}> {column.title}</ItemHead>;
                })}
            </Line>
        </Head>);
    }

    return (
        <>
            <WrapperTable>
                {dataTable.length === 0
                    ? <h2>Nenhum usuário cadastrado</h2>
                    : <Table>
                        <HeadComponent />
                        <BodyItems />
                    </Table>}
            </WrapperTable>
            <WrapperFooter>
                <BlockButton>
                    <ButtonComponent onClick={(event) => handleButtonCadastrar(event)} text="Cadastrar" />
                </BlockButton>
            </WrapperFooter>
        </>
    )
}