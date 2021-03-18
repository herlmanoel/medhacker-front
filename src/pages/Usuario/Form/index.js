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
    const [usuario, setUsuario] = useState({
        nome: '',
        email: '',
        evento: 0,
        permiso: '',
        senha: '',
    });
    const [edit, setEdit] = useState({ id: 0, textButton: '', state: false });
    const [eventos, setEventos] = useState([]);
    const history = useHistory();
    const location = useLocation();

    function getEventos() {
        (async () => await axios.get('eventos')
            .then(({ data }) => { setEventos(data); })
            .catch((err) => console.log(err)))();
    }

    async function handleSubmit(event) {
        event.preventDefault();
        await axios.post('usuarios', usuario).catch((err) => console.log(err));
        history.push('/listagemusuarios');
    }

    async function handleEdit(event) {
        event.preventDefault();
        await axios.put(`usuarios/${edit.id}`, usuario)
            .catch(err => console.log(err));
        history.push('/listagemusuarios');
    }

    async function handleOnChange(event) {
        let { name, value } = event.target;
        if (name === 'evento') {
            value = parseInt(value);
        }
        await setUsuario({ ...usuario, [name]: value });
    }
    useEffect(() => {
        getEventos();
    }, []);

    useEffect(() => {
        const id = location.state?.id;

        if (id) {
            (async () => {
                await axios.get(`/usuarios/${id}`, {
                    data: { id: id }
                })
                    .then(result => {
                       
                        const { data } = result;
                        data.evento = data.IdsEventos[0];
                        setUsuario(data);
                    })
                    .catch(err => console.log(err));

            })();

            setEdit({ id: id, textButton: 'Editar', state: true });
        }
    }, [location]);

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
                        <option name="evento" value="" disabled >Selecione um evento</option>
                        {eventos.map((item) => {
                           
                            return <option
                                key={Math.random()}
                                name="evento" value={item.id}
                                selected={usuario.evento === item.id ? "selected" : ""}> {item.titulo}
                            </option>
                        })}
                    </Select>
                    <FormGroup>
                        <Input label="Senha" name="senha" type="password" value={usuario.senha} functionChange={(event) => handleOnChange(event)} />
                        <Select label="Permissão" defaultValue="" name="permissao" onChange={(event) => handleOnChange(event)}>
                            <option name="permissao" value="" disabled >Selecione uma opção</option>
                            <option name="permissao" selected={usuario.permissao === "administrador" || usuario.permissao === "Administrador" ? "selected" : ""} value="Administrador" >Administrador</option>
                            <option name="permissao" selected={usuario.permissao === "comum" || usuario.permissao === "Comum" ? "selected" : ""} value="Comum" >Comum</option>
                        </Select>
                    </FormGroup>
                    <FooterFrom>
                        <WrapperButton>
                            {edit.state ?
                                <Button onClick={(event) => handleEdit(event)} text={edit.textButton} /> :
                                <Button type="submit" text="Cadastrar" />}
                        </WrapperButton>
                    </FooterFrom>

                </Form>
            </Content>
        </Wrapper>
    );
}