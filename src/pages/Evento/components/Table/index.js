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

    useEffect(() => {
        document.title = 'Listagem de Eventos';

        (async function getDataUsuarios() {
            const { data } = await axios.get('eventos');
            await setDataTable(data);
            console.log(data);
        })();

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
        return history.push('/formusuario');
    }

    async function handleDelete(id) {
        await axios.delete(`/usuarios`, {
            data: { id: id }
        })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    }

    function BodyItems() {
        return dataTable.map(item => {
            return (
                <Line key={item.id}>
                <ItemBody>{item.titulo}</ItemBody>
                <ItemBody> {item.endereco} </ItemBody>
                <ItemBody>{item.inicio}</ItemBody>
                <ItemBody>{item.fim}</ItemBody>
                <ItemBody> 
                    <LinkAction>
                        <EditIcon color="#ADD96C"/>
                    </LinkAction> 
                    <LinkAction to="#" onClick={() => handleDelete(item.id)}>
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