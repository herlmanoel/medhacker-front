import MenuVertical from '../../components/MenuVertical';
import { Wrapper, WrapperMain, Header } from './style';
import CardHeader from './components/CardHeader';
import MenuHome from './components/MenuHome';
import axios from '../../services';
import ModalEvento from '../../components/ModalEvento';
import { ContextProviderModal } from './context/contextModal';
import { useEffect, useState, useContext } from 'react';

import LoadingComponent from '../../components/Loading';
export default function Home() {
    const [dataEventosIA, setDataEventosIA] = useState([]);
    const { eventoId, setEventoId } = useContext(ContextProviderModal);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const pageName = 'Home';
        document.title = pageName;
        (async () => {
            const { data } = await axios.get('eventosinscabertas');
            await setDataEventosIA([...data.eventosIA]);
            setLoading(false);
        })();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    function HeaderComponent() {
        return (
            <Header>
                <MenuHome nome="Júlia Ferreira" />
                <CardHeader data={dataEventosIA} />
            </Header>
        );
    }

    return (
        <Wrapper>
            <ModalEvento
                isOpen={Boolean(eventoId)} 
                onClickCLose={() => setEventoId(null)}
            />
            <MenuVertical />
            <WrapperMain>
                { loading ? <LoadingComponent /> : <HeaderComponent /> }
            </WrapperMain>
        </Wrapper>
    );
}
