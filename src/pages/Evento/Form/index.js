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
import MenuForm from '../../../components/MenuForm';
import Textarea from '../../../components/Textarea';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useState, useEffect } from 'react';
import axios from '../../../services';
import { useHistory, useLocation } from 'react-router-dom';

export default function FormEvento() {
    const [evento, setEvento] = useState({
        id: '',
        title: '',
        codigo: '',
        descricao: '',
        inicio: '',
        fim: '',
        fim_inscricao: '',
        inicio_inscricao: '',
        endereco: '',
        logo: ''
    });

    const history = useHistory();
    const location = useLocation();
    const [edit, setEdit] = useState({ id: 0, textButton: '', state: false });

    async function handleSubmit(event) {
        event.preventDefault();
        evento.inicio = evento.inicio.split("T", 1)[0];
        evento.fim = evento.fim.split("T", 1)[0];
        const result = await axios.post('eventos', evento);
        console.log(result);
        history.push('/listagemeventos');
    }

    async function handleEdit(event) {
        event.preventDefault();

        await axios.put(`eventos/${edit.id}`, evento)
            .catch(err => console.log(err));
        history.push('/listagemeventos');
    }


    function handleOnChange(event) {
        const { name, value } = event.target;
        console.log({ name, value });
        setEvento({ ...evento, [name]: value });
        console.log(evento);
    }

    useEffect(() => {

        const id = location.state?.id;

        if (id) {
            (async () => {
                await axios.get(`/eventos`, {
                    data: { id: id }
                })
                    .then(result => {
                        const event = result.data[0];
                        setEvento(event);
                        console.log(event);
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
                    <Titulo>Cadastro de Evento</Titulo>
                    <Subtitulo>Dados do evento</Subtitulo>
                    <Input
                        label="Titulo"
                        name="titulo"
                        value={evento.titulo}
                        type="text"
                        functionChange={(event) => handleOnChange(event)}
                    />
                    <Input
                        label="Código"
                        name="codigo"
                        type="text"
                        value={evento.codigo}
                        functionChange={(event) => handleOnChange(event)}
                    />
                    <Textarea
                        label="Descricao"
                        name="descricao"
                        value={evento.descricao}
                        functionChange={(event) => handleOnChange(event)}
                    >
                        {edit.state ? evento.descricao : ""}
                    </Textarea>
                    <FormDivider>
                        <Input
                            label="Início do Evento"
                            name="inicio"
                            type="date"
                            value={evento.inicio}
                            functionChange={(event) => handleOnChange(event)}
                        />
                        <Input
                            label="Fim do Evento"
                            name="fim"
                            type="date"
                            value={evento.fim}
                            functionChange={(event) => handleOnChange(event)}
                        />
                    </FormDivider>
                    
                    <Input
                        label="Endereço"
                        name="endereco"
                        type="text"
                        value={evento.endereco}
                        functionChange={(event) => handleOnChange(event)}
                    />
                    <FormDivider>
                        <Input
                            label="Início das Inscrições"
                            name="inicio_inscricao"
                            type="date"
                            value={evento.inicio_inscricao}
                            functionChange={(event) => handleOnChange(event)}
                        />
                        <Input
                            label="Fim das Inscrições"
                            name="fim_inscricao"
                            type="date"
                            value={evento.fim_inscricao}
                            functionChange={(event) => handleOnChange(event)}
                        />
                    </FormDivider>
                    <Input
                        label="Logo"
                        name="logo"
                        type="text"
                        value={evento.logo}
                        functionChange={(event) => handleOnChange(event)}
                    />
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