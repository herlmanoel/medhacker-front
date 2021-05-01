import { useEffect, useCallback, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

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
    UsersIcon,
    LinkAction,
} from './style.js';

import ButtonComponent from '../../../../components/Button';

import axios from '../../../../services';
import { ContexEventos } from '../../context';
import Pagination from '../../../../components/Pagination';

const LIMIT = 10;

export default function TableComponent() {
    const [dataTable, setDataTable] = useState([]);
    const history = useHistory();
    const { dataEventos } = useContext(ContexEventos);
    const [paginationData, setPaginationData] = useState({
        limit: LIMIT,
        total: 0,
    });
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        setDataTable(dataEventos);
    }, [dataEventos]);

    const getEventos = useCallback(() => {
        (async function getDataUsuarios() {
            const URL = `eventoslimit/${LIMIT}/${offset}`;
            const data = await axios.get(URL);
            const { events, count } = data.data;
            await setDataTable(events);
            setPaginationData({ ...paginationData, total: count });
            console.log(data);
        })();
    }, [offset, paginationData]);

    useEffect(() => {
        document.title = 'Listagem de Eventos';
        getEventos();
    }, []);

    const columns = [
        { id: 1, title: 'Titulo' },
        { id: 4, title: 'Endereço' },
        { id: 5, title: 'Início' },
        { id: 6, title: 'Fim' },
        { id: 7, title: 'Grupos' },
        { id: 8, title: 'Ações' },
    ];

    function handleButtonCadastrar(event) {
        event.preventDefault();
        return history.push('/formevento');
    }

    async function handleDelete(item) {
        const id = item.id;
        await axios.delete(`/eventos/${id}`)
            .then(result => console.log(result))
            .catch(err => console.log(err));
        getEventos();
    }

    function BodyItems() {
        return dataTable.map(item => {
            let inicio = new Date(item.inicio);
            let fim = new Date(item.fim);
            inicio = `${inicio.getDate()}-${inicio.getMonth() + 1}-${inicio.getFullYear()}`;
            fim = `${fim.getDate()}-${fim.getMonth() + 1}-${fim.getFullYear()}`;
            return (
                <Line key={item.id}>
                    <ItemBody>{item.titulo}</ItemBody>
                    <ItemBody> {item.endereco} </ItemBody>
                    <ItemBody>{inicio}</ItemBody>
                    <ItemBody>{fim}</ItemBody>
                    <ItemBody>
                        <LinkAction to={{
                            pathname: "/ListagemGrupos",
                            state: {
                                id: item.id
                            }
                        }}>
                            <UsersIcon color="#3B87A6" />
                        </LinkAction>
                    </ItemBody>
                    <ItemBody>
                        <LinkAction to={{
                            pathname: "/ListagemGrupos",
                            state: {
                                id: item.id
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