import {
    Wrapper,
    Content,
    Form,
    Titulo,
    Subtitulo,
    WrapperButton,
    FooterFrom,
} from './style.js';
import MenuForm from '../../../components/MenuForm';
import Textarea from '../../../components/Textarea';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import Button from '../../../components/Button';
import { useState } from 'react';
import axios from '../../../services';
import { useHistory } from 'react-router-dom';



export default function FormProjeto() {
    const initialState = {
        username: '',
        titulo: '',
        senha: '',
        descricao: '',
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
                    <Titulo>Cadastro de Projeto</Titulo>
                    <Subtitulo>Dados do Projeto</Subtitulo>
                    <Input label="Titulo" name="titulo" type="text" functionChange={(event) =>handleOnChange(event)} />
                    <Select label="Evento" defaultValue="" name="Evento" onChange={(event) =>handleOnChange(event)}>
                            <option name="permissao" value="" disabled >Selecione uma opção</option>
                            <option name="med" value="med" >Med</option>
                            <option name="med" value="med" >Med</option>
                        </Select>
                    <Textarea label="Descricao" name="descricao"> </Textarea>
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