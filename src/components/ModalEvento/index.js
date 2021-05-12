
import { ContextProviderModal } from '../../pages/Home/context/contextModal';
import { useEffect, useState, useContext } from 'react';
import axios from '../../services';
import {
    Wrapper,
    Modal,
    ButtonClose,
    MenuHeaderClose,
    Form,
    FormDivider,
    Titulo,
} from './styles';
import Textarea from '../../components/Textarea';
import Input from '../../components/Input';
import { FormatttingDates } from '../../utils/formattingDates';

import { X } from 'react-feather';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal-root');

export default function ModalEvento({ isOpen, onClickCLose }) {
    const { eventoId, setEventoId } = useContext(ContextProviderModal);
    const [evento, setEvento] = useState({});

    useEffect(() => {
        (async () => {
            console.log('eventoId: ', eventoId);
            if (eventoId) {
                const URL = `eventos/${eventoId}`;
                const { data } = await axios.get(URL);
                data.inicio_inscricao = FormatttingDates.convertForInputDate(data.inicio_inscricao);
                data.fim_inscricao = FormatttingDates.convertForInputDate(data.fim_inscricao);
                data.inicio = FormatttingDates.convertForInputDate(data.inicio);
                data.fim = FormatttingDates.convertForInputDate(data.fim);
                console.log(data);
                await setEvento(data);
            } else {
                setEventoId(null);
            }

        })();
        console.log("AQUI");
        console.log({ evento, eventoId });
    }, [eventoId]); // eslint-disable-line

    // se não tiver aberto, retorna null
    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <Wrapper isOpen={isOpen}>
            <Modal>
                <MenuHeaderClose>
                    <ButtonClose type="button" onClick={onClickCLose}> <X color="#000" /> </ButtonClose>
                </MenuHeaderClose>

                <Form>
                    <Titulo>Detalhes do Evento</Titulo>
                    <Input
                        label="Titulo"
                        name="titulo"
                        value={evento.titulo}
                        type="text"
                        disabled
                    />
                    <Input
                        label="Código"
                        name="codigo"
                        type="text"
                        value={evento.codigo}
                        disabled
                    />
                    <Textarea
                        label="Descricao"
                        name="descricao"
                        value={evento.descricao}
                        disabled
                    >

                    </Textarea>
                    <FormDivider>
                        <Input
                            label="Início do Evento"
                            name="inicio"
                            type="date"
                            value={evento.inicio}
                            disabled
                        />
                        <Input
                            label="Fim do Evento"
                            name="fim"
                            type="date"
                            value={evento.fim}
                            disabled
                        />
                    </FormDivider>

                    <Input
                        label="Endereço"
                        name="endereco"
                        type="text"
                        value={evento.endereco}
                        disabled
                    />
                    <FormDivider>
                        <Input
                            label="Início das Inscrições"
                            name="inicio_inscricao"
                            type="date"
                            value={evento.inicio_inscricao}
                            disabled
                        />
                        <Input
                            label="Fim das Inscrições"
                            name="fim_inscricao"
                            type="date"
                            value={evento.fim_inscricao}
                            disabled
                        />
                    </FormDivider>
                    <Input
                        label="Logo"
                        name="logo"
                        type="text"
                        value={evento.logo}
                        disabled
                    />

                </Form>
            </Modal>
        </Wrapper>,
        portalRoot
    );
}