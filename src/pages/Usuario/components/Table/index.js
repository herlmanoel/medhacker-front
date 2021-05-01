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

import axios from '../../../../services';
import { Contextusuarios } from '../../context';
import ButtonComponent from '../../../../components/Button';
import Pagination from '../../../../components/Pagination';

const LIMIT = 10;

export default function TableComponent() {
    const [dataTable, setDataTable] = useState([]);
    const [paginationData, setPaginationData] = useState({
        limit: LIMIT,
        total: 0,
    });
    const [offset, setOffset] = useState(0);
    const history = useHistory();
    const { dataUsuarios } = useContext(Contextusuarios);
    const columns = [
        { id: 1, title: 'Nome' },
        { id: 2, title: 'Permissão' },
        { id: 3, title: 'Status' },
        { id: 4, title: 'Ações' },
    ];

    
    const getUsers = () => {
        (async () => {
            const URL = `usuarioslimit/${LIMIT}/${offset}`;
            const data = await axios.get(URL);
            const { users, count } = data.data;
            await setDataTable(users);
            setPaginationData({ ...paginationData, total: count });
            console.log({ users, count });
        })();
    }

    useEffect(() => {
        setDataTable(dataUsuarios);
    }, [dataUsuarios]);

    useEffect(() => {
        document.title = 'Listagem de Usuários';
        getUsers();
    }, []);

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
                {paginationData.limit &&
                    <Pagination
                        limit={LIMIT}
                        total={paginationData.total}
                        offset={offset}
                        setOffset={setOffset}
                    />
                }
                <BlockButton>
                    <ButtonComponent onClick={(event) => handleButtonCadastrar(event)} text="Cadastrar" />
                </BlockButton>
            </WrapperFooter>
        </>
    )
}