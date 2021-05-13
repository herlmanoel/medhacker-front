import {
    Wrapper,
    WrapperMain,
} from './style';

import MenuVertical from '../../../components/MenuVertical';
import Tabela from '../components/Table';
import MenuDashboard from '../components/MenuDashboard';
import ProviderEventos from '../context';

export default function Listagem() {
    
    return (
        <Wrapper>
            <ProviderEventos>
                <MenuVertical />
                <WrapperMain>
                    <MenuDashboard title="Eventos" />
                    <Tabela />
                </WrapperMain>
            </ProviderEventos>
        </Wrapper>
    );
}