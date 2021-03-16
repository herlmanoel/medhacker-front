import {
    Wrapper,
    WrapperMain,
} from './style';

import MenuVertical from '../../../components/MenuVertical';
import Tabela from './Table';
import MenuDashboard from '../../../components/MenuDashboard';

export default function Listagem() {
    
    return (
        <Wrapper>
            <MenuVertical />
            <WrapperMain>
                <MenuDashboard title="Usuários" />
                <Tabela />
            </WrapperMain>
        </Wrapper>
    );
}