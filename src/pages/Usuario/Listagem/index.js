import {
    Wrapper,
    WrapperMain,
} from './style';
import { useContext } from 'react';
import MenuVertical from '../../../components/MenuVertical';
import Tabela from '../components/Table';
import MenuDashboard from '../components/MenuDashboard';
import ProviderUsuarios from '../context';
// import { Context } from '../../../context/AuthProvider';
import { Context } from '../../../context/AuthProvider';
import Loading from '../../../components/Loading';

export default function Listagem() {
    const { loading } = useContext(Context);

    if(loading){
        return (
            <Wrapper>
            <ProviderUsuarios>
                <MenuVertical />
                <WrapperMain>
                   <Loading/>
                </WrapperMain>
            </ProviderUsuarios>
        </Wrapper>
        )
    }

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