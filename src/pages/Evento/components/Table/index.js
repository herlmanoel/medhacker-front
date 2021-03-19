import { useEffect, useState } from 'react';
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
    LinkAction,
} from './style.js';

import ButtonComponent from '../../../../components/Button';

import axios from '../../../../services';

export default function TableComponent() {
    const [dataTable, setDataTable] = useState([]);
    const history = useHistory();

    function getEventos() {
        (async function getDataUsuarios() {
            const { data } = await axios.get('eventos');
            // data.fim = data.fim.toString().split("T", 1)[0];
            await setDataTable(data);
            console.log(data);
        })();
    }

    useEffect(() => {
        document.title = 'Listagem de Eventos';
        getEventos();
    }, []);

    const columns = [
        { id: 1, title: 'Titulo' },
        { id: 4, title: 'Endereço' },
        { id: 5, title: 'Início' },
        { id: 6, title: 'Fim' },
        { id: 7, title: 'Ações' },
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
            inicio = `${inicio.getDate()}-${inicio.getMonth() + 1}-${inicio.getFullYear()}` ;
            fim = `${fim.getDate()}-${fim.getMonth() + 1}-${fim.getFullYear()}` ;
            return (
                <Line key={item.id}>
                    <ItemBody>{item.titulo}</ItemBody>
                    <ItemBody> {item.endereco} </ItemBody>
                    <ItemBody>{inicio}</ItemBody>
                    <ItemBody>{fim}</ItemBody>
                    <ItemBody>
                        <LinkAction to={{
                            pathname: "/formevento",
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
                <BlockButton>
                    <ButtonComponent onClick={(event) => handleButtonCadastrar(event)} text="Cadastrar" />
                </BlockButton>
            </WrapperFooter>

        </>
    );
}