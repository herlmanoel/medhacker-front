import {
    Wrapper,
    Content,
    Form,
    Titulo,
    Subtitulo,
    WrapperButton,
    FooterFrom,
} from './style.js';
import MenuForm from '../../components/MenuForm';
import Textarea from '../../components/Textarea';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useState } from 'react';
import axios from '../../services';
import { useHistory } from 'react-router-dom';



export default function FormEvento() {
    const initialState = {
        nome: '',
        permissao: '',
        senha: '',
        email: '',
    } 
    const [usuario, setUsuario] = useState(initialState);
    const history = useHistory();

    async function handleSubmit(event){
        event.preventDefault();
        const result = await axios.post('usuarios', usuario);
        console.log(result);
        history.push('/listagemusuarios');
    }

    function handleOnChange(event){
        const { name, value } = event.target;
        setUsuario({...usuario, [name]: value});
        console.log(usuario);
    }

    return (
        <Wrapper>
            <MenuForm />
            <Content>
                <Form onSubmit={(event) => handleSubmit(event)}>
                    <Titulo>Cadastro de Evento</Titulo>
                    <Subtitulo>Dados do evento</Subtitulo>
                    <Input label="Titulo" name="titulo" type="text" functionChange={(event) =>handleOnChange(event)} />
                    <Textarea label="Descricao" name="data"> </Textarea>
                    <Input label="Data" name="data" type="text" functionChange={(event) =>handleOnChange(event)} />
                    <Input label="Endereço" name="endereco" type="text" functionChange={(event) =>handleOnChange(event)} />
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