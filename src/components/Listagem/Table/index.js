import { useContext } from 'react';
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

import ButtonComponent from '../../Button';
import { ContextListagem } from '../../../context/Listagem';

export default function TableComponent() {

    const { dataTable, columns, title, registrationPage } = useContext(ContextListagem);

    const history = useHistory();

    function handleButtonCadastrar(event) {
        event.preventDefault();
        return history.push(registrationPage);
    }

    function BodyItems() {
        if (title === 'Eventos') {
            return dataTable.map(item => {
                return (
                    <Line key={item.id}>
                        <ItemBody>{item.titulo}</ItemBody>
                        <ItemBody>{item.data}</ItemBody>
                        <ItemBody> {item.endereco} </ItemBody>
                        <ItemBody> 
                            <LinkAction to="/">
                                <EditIcon color="#ADD96C"/>
                            </LinkAction> 
                            <LinkAction to="/">
                                <TrashIcon color="#F23D4C" />
                            </LinkAction>
                        </ItemBody>
                    </Line>
                );
            })
        }

        return dataTable.map(item => {
            return (

                <Line key={item.id}>
                    <ItemBody> <Name>{item.nome}</Name> <Email>{item.email}</Email> </ItemBody>
                    <ItemBody> {item.permissao} </ItemBody>
                    <ItemBody> Ativo </ItemBody>
                    <ItemBody>
                    <LinkAction to="/">
                                <EditIcon color="#ADD96C"/>
                            </LinkAction> 
                            <LinkAction to="/">
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