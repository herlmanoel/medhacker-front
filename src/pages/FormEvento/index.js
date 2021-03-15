import {
    Wrapper,
    Content,
    Form,
    Titulo,
    Subtitulo,
    WrapperButton,
    FooterFrom,
    FormDivider,
} from './style.js';
import MenuForm from '../../components/MenuForm';
import Textarea from '../../components/Textarea';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useState } from 'react';
import axios from '../../services';
import { useHistory } from 'react-router-dom';



export default function FormEvento() {
    const [evento, setEvento] = useState({});
    const history = useHistory();

    async function handleSubmit(event) {
        event.preventDefault();
        const result = await axios.post('eventos', evento);
        console.log(result);
        history.push('/listagemeventos');
    }

    function handleOnChange(event) {
        const { name, value } = event.target;
        setEvento({ ...evento, [name]: value });
        console.log(evento);
    }

    return (
        <Wrapper>
            <MenuForm />
            <Content>
                <Form onSubmit={(event) => handleSubmit(event)}>
                    <Titulo>Cadastro de Evento</Titulo>
                    <Subtitulo>Dados do evento</Subtitulo>
                    <Input label="Nome" name="nome" type="text" functionChange={(event) => handleOnChange(event)} />
                    <Input label="Código" name="codigo" type="text" functionChange={(event) => handleOnChange(event)} />
                    <Textarea label="Descricao" name="descricao"> </Textarea>
                    <FormDivider>
                            <Input label="Inicio" name="inicio" type="date" functionChange={(event) => handleOnChange(event)} />
                            <Input label="Fim" name="fim" type="date" functionChange={(event) => handleOnChange(event)} />
                    </FormDivider>
                    <Input label="Endereço" name="endereco" type="text" functionChange={(event) => handleOnChange(event)} />
                    <Input label="Logo" name="logo" type="text" functionChange={(event) => handleOnChange(event)} />
                    <FooterFrom>
                        <WrapperButton>
                            <Button type="submit" text="Cadastrar" />
                        </WrapperButton>
                    </FooterFrom>

                </Form>
            </Content>
        </Wrapper>
    );
}