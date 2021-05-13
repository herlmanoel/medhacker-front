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
import LoadingComponent from '../../../../components/Loading/index.js';
import { FormatttingDates } from '../../../../utils/formattingDates.js';
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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setDataTable(dataEventos);
    }, [dataEventos]);

    const getEventos = useCallback(() => {
        (async function getDataUsuarios() {
            const URL = `eventoslimit/${LIMIT}/${offset}`;
            const data = await axios.get(URL);
            const { events, count } = data.data;
            await setDataTable(events);
            await setPaginationData({ ...paginationData, total: count });
            await setLoading(false);
        })();
    }, [offset, paginationData]);

    useEffect(() => {
        document.title = 'Listagem de Eventos';
        getEventos();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

    async function handleDelete(id) {
        setLoading(true);
        const URL = `/eventos/${id}`;
        console.log(URL)
        await axios.delete(URL)
            .catch(err => console.log(err));
        getEventos();
        await setLoading(false);

    }

    function BodyItems() {
        return dataTable.map(item => {
            const id = item.id;
            let inicio = '';
            let fim = '';
            // console.log(item.inicio, item.fim);
            if (item.inicio && item.fim) {
                inicio = FormatttingDates.convert(item?.inicio);
                fim = FormatttingDates.convert(item?.fim);
            }

            // console.log(inicio, fim);

            // fim = `${fim.getDate()}-${fim.getMonth() + 1}-${fim.getFullYear()}`;
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
                        <LinkAction to="#" onClick={(item) => handleDelete(id)}>
                            <TrashIcon color="#F23D4C" /> 
                        </LinkAction>
                    </ItemBody>
                </Line>
            );
        })
    }

    return (
        <>
            {loading ? <LoadingComponent /> :
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
            }
        </>
    );
}