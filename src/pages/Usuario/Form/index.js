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
import MenuForm from '../../../components/MenuForm';
import Select from '../../../components/Select';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useState, useEffect } from 'react';
import axios from '../../../services';
import { useHistory, useLocation } from 'react-router-dom';

export default function FormUsuario() {
    const [usuario, setUsuario] = useState({});
    const [edit, setEdit] = useState({ id: 0, textButton: '' });
    const [eventos, setEventos] = useState([]);
    const history = useHistory();
    const location = useLocation();

    function getEventos() {
        (async () => await axios.get('eventos')
            .then(({ data }) => { setEventos(data); console.log(data); })
            .catch((err) => console.log(err)))();
    }

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(usuario);
        const result = await axios.post('usuarios', usuario).catch((err) => console.log(err));
        console.log(result);
        history.push('/listagemusuarios');
    }

    function handleOnChange(event) {
        const { name, value } = event.target;
        setUsuario({ ...usuario, [name]: value });
        console.log(usuario)
    }

    useEffect(() => {
        getEventos();
        const id = location.state?.id;

        if (id) {
            (async () => {
                await axios.get(`/usuarios`, {
                    data: { id: id }
                })
                    .then(result => {
                        const user = result.data[0];
                        setUsuario(user) 
                        console.log(usuario)
                    })
                    .catch(err => console.log(err));
            })();

            setEdit({ id: id, textButton: 'Editar' });    
        }
    }, [location.state?.id, usuario]);

    return (
        <Wrapper>
            <MenuForm />
            <Content>
                <Form onSubmit={(event) => handleSubmit(event)}>
                    <Titulo>Cadastro de usuário</Titulo>
                    <Subtitulo>Dados pessoais</Subtitulo>
                    <Input label="Nome" name="nome" type="nome" value={usuario.nome} functionChange={(event) => handleOnChange(event)} />
                    <Input label="E-mail" name="email" type="e-mail" value={usuario.email} functionChange={(event) => handleOnChange(event)} />
                    {/*  */}
                    <Select label="Evento" defaultValue="" name="evento" onChange={(event) => handleOnChange(event)}>
                    <option name="evento"  value="" disabled >Selecione um evento</option>
                        {eventos.map((item) => (
                            <option name="evento" value={item.id}> {item.titulo} </option>
                        ))}
                    </Select>
                    <FormGroup>
                        <Input label="Senha" name="senha" type="password" value={usuario.senha} functionChange={(event) => handleOnChange(event)} />
                        <Select label="Permissão" defaultValue="" name="permissao" onChange={(event) => handleOnChange(event)}>
                            <option name="permissao"  value="" disabled >Selecione uma opção</option>
                            <option name="permissao" selected={usuario.permissao === "Administrador" ? "selected" : ""} value="administrador" >Administrador</option>
                            <option name="permissao" selected={usuario.permissao === "Comum" ? "selected" : ""} value="comum" >Comum</option>
                        </Select>
                    </FormGroup>
                    <FooterFrom>
                        <WrapperButton>
                            <Button type="submit" text={edit.textButton ?? "Cadastrar"} />
                        </WrapperButton>
                    </FooterFrom>

                </Form>
            </Content>
        </Wrapper>
    );
}