import MenuVertical from '../../components/MenuVertical';
import { Wrapper, WrapperMain, Header } from './style';
import CardHeader from './components/CardHeader';
import MenuHome from './components/MenuHome';
import axios from '../../services';
import ModalEvento from '../../components/ModalEvento';
import { ContextProviderModal } from './context/contextModal';
import { useEffect, useState, useContext } from 'react';

export default function Home() {

    const [dataEventosIA, setDataEventosIA] = useState([]);
    
    const { eventoId, setEventoId } = useContext(ContextProviderModal);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('eventosinscabertas');
            await setDataEventosIA([...data.eventosIA]);
        })()
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
            <Wrapper>
                {/* Se não tivermos o eventoId, não mostra o Modal */}
                <ModalEvento isOpen={Boolean(eventoId)} onClickCLose={() => setEventoId(null)} >

                </ModalEvento>

                <MenuVertical />
                <WrapperMain>
                    <Header>
                        <MenuHome nome="Júlia Ferreira" />
                        {/* passando para o Card */}
                        <CardHeader data={dataEventosIA} />
                    </Header>
                </WrapperMain>
            </Wrapper>
    );
}