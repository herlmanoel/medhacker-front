import {
    Wrapper,
    WrapperMain,
} from './style';

import MenuVertical from '../../../components/MenuVertical';
import Tabela from '../components/Table';
import MenuDashboard from '../components/MenuDashboard';
import ProviderUsuarios from '../context';

export default function Listagem() {

    return (
        <Wrapper>
            <ProviderUsuarios>
                <MenuVertical />
                <WrapperMain>
                    <MenuDashboard title="Usuários" />
                    <Tabela />
                </WrapperMain>
            </ProviderUsuarios>
        </Wrapper>
    );
}