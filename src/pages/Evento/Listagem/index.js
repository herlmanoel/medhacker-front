import {
    Wrapper,
    WrapperMain,
} from './style';

import MenuVertical from '../../../components/MenuVertical';
import Tabela from '../components/Table';
import MenuDashboard from '../../../components/MenuDashboard';

export default function Listagem() {
    
    return (
        <Wrapper>
            <MenuVertical />
            <WrapperMain>
                <MenuDashboard title="Eventos" />
                <Tabela />
            </WrapperMain>
        </Wrapper>
    );
}