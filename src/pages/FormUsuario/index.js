import {
    Wrapper,
    Content,
    Form,
    Titulo,
    Subtitulo,
    FormGroup,
    WrapperButton,
    FooterFrom,
} from './style.js';
import MenuForm from '../../components/MenuForm';
import Select from '../../components/Select';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useState } from 'react';
import axios from '../../services';
import { useHistory } from 'react-router-dom';

export default function FormUsuario() {
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
                    <Titulo>Cadastro de usuário</Titulo>
                    <Subtitulo>Dados pessoais</Subtitulo>
                    <Input label="Nome" name="nome" type="nome" functionChange={(event) =>handleOnChange(event)} />
                    <Input label="E-mail" name="email" type="e-mail" functionChange={(event) =>handleOnChange(event)} />
                    <FormGroup>
                        <Input label="Senha" name="senha" type="password" functionChange={(event) =>handleOnChange(event)} />
                        <Select label="Permissão" defaultValue="" name="permissao" onChange={(event) =>handleOnChange(event)}>
                            <option name="permissao" value="" disabled >Selecione uma opção</option>
                            <option name="permissao" value="administrador" >Administrador</option>
                            <option name="permissao" value="comum" >Comum</option>
                        </Select>
                    </FormGroup>
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