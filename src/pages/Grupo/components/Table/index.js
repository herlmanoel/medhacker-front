import { useEffect, useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import {
    Table,
    Head,
    ItemHead,
    Line,
    Body,
    ItemBody,
    WrapperTable,
    WrapperFooter,
    BlockButton,
    EditIcon,
    TrashIcon,
    LinkAction,
} from './style.js';

import ButtonComponent from '../../../../components/Button';

import axios from '../../../../services';
import { ContexEventos } from '../../context';
import Pagination from '../../../../components/Pagination/index.js';
const LIMIT = 10;
export default function TableComponent() {
    const [dataTable, setDataTable] = useState([]);
    const history = useHistory();
    const location = useLocation();
    const { dataEventos } = useContext(ContexEventos);
    const [paginationData, setPaginationData] = useState({
        limit: LIMIT,
        total: 0,
    });
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        setDataTable(dataEventos);
    }, [dataEventos]);

    function getGrupos() {
        (async () => {
            const id_evento = location.state?.id;
            console.log('Table IdEvento: ', id_evento);
            const URL = `gruposlimit/${id_evento}/${LIMIT}/${offset}`;
            const data = await axios.get(URL);
            const { groups, count } = data.data;
            await setDataTable(groups);
            setPaginationData({ ...paginationData, total: count });
            console.log(data);
        })();
    }

    useEffect(() => {
        document.title = 'Listagem de Grupos';
        getGrupos();
    }, []);

    const columns = [
        { id: 1, title: 'Nome' },
        { id: 4, title: 'Username' },
        { id: 5, title: 'Descrição' },
        { id: 6, title: 'Ações' },
    ];

    function handleButtonCadastrar(event) {
        event.preventDefault();
        const id_evento = location.state.id;

        return history.push({
            pathname: '/FormGrupo',
            state: {
                id: id_evento
            }
        });
    }

    async function handleDelete(item) {
        const id = item.id;
        const URL = `grupos/${id}`;
        await axios.delete(URL)
            .then(result => console.log(result))
            .catch(err => console.log(err));
        getGrupos();
    }

    function BodyItems() {
        return dataTable.map(item => {
            return (
                <Line key={item.id}>
                    <ItemBody>{item.nome}</ItemBody>
                    <ItemBody> {item.username} </ItemBody>
                    <ItemBody>{item.descricao}</ItemBody>
                    <ItemBody>
                        <LinkAction to={{
                            pathname: "/FormGrupo",
                            state: {
                                id_evento: location.state.id,
                                id_grupo: item.id
                            }
                        }}>
                            <EditIcon color="#ADD96C" />
                        </LinkAction>
                        <LinkAction to="#" onClick={(item) => handleDelete(item)}>
                            <TrashIcon color="#F23D4C" />
                        </LinkAction>
                    </ItemBody>
                </Line>
            );
        })
    }

    return (
        <>
            <WrapperTable>
                <Table>
                    <Head>
                        <Line>
                            {columns.map(column => {
                                return <ItemHead key={column.id}> {column.title}</ItemHead>;
                            })}
                        </Line>
                    </Head>
                    <Body>
                        <BodyItems />
                    </Body>
                </Table>
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
    );
}