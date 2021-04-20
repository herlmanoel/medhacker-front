import {
    Wrapper,
    WrapperMain,
} from './style';

import MenuVertical from '../../../components/MenuVertical';
import Tabela from '../components/Table';
import MenuDashboard from '../components/MenuDashboard';
import ProviderEventos from '../context';
// import { useContext } from 'react';

export default function Listagem() {

    return (
        <Wrapper>
            <ProviderEventos>
                <MenuVertical />
                <WrapperMain>
                    <MenuDashboard title="Grupos" />
                    <Tabela />
                </WrapperMain>
            </ProviderEventos>
        </Wrapper>
    );
}