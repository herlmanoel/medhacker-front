import {
    Menu,
    HeaderMenu,
    FooterMenu,
    LogoImg,
    BlockItem,
    Item,
    HomeIconGrey,
    SettingsIconGrey,
    UserIconGrey,
    // FolderIconGrey,
    GridIconGrey,
    HomeIconWhite,
    SettingsIconWhite,
    UserIconWhite,
    // FolderIconWhite,
    GridIconWhite,
    LogOutIconWhite,
    LogOutIconGrey,
} from './style';

import logoImg from '../../assets/img/MedHacker.svg';
import IconUser from '../../components/IconUser';
import { Context } from '../../context/AuthProvider';
import { useContext } from 'react';

export default function MenuVertical() {
    const { handleLogout } = useContext(Context);

    // async function handleSair() {
    //     await window.localStorage.setItem('token', '');
    //     setAuthorized(false);
    // }

    return (
        <Menu>
            <HeaderMenu>
                <LogoImg src={logoImg} />
                <BlockItem>
                    <Item exact to="/Home">
                        <HomeIconGrey color="#A3A3A5" />
                        <HomeIconWhite color="#fff" /> Home
                    </Item>
                </BlockItem>
                <BlockItem >
                    <Item exact to="/ListagemEventos">
                        <GridIconGrey color="#A3A3A5" />
                        <GridIconWhite color="#fff" /> Eventos
                    </Item>
                </BlockItem>
                <BlockItem >
                    <Item exact to="/listagemusuarios">
                        <UserIconGrey color="#A3A3A5" />
                        <UserIconWhite color="#fff" /> Usuários
                    </Item>
                </BlockItem>
                {/* <BlockItem >
                    <Item exact to="/listagemprojetos">
                        <FolderIconGrey color="#A3A3A5" />
                        <FolderIconWhite color="#fff" /> Projetos
                    </Item>
                </BlockItem> */}
                <BlockItem >
                    <Item exact to="/Configuracoes">
                        <SettingsIconGrey color="#A3A3A5" />
                        <SettingsIconWhite color="#fff" /> Configurações
                    </Item>
                </BlockItem>
                <BlockItem >
                    <Item exact to="/sair" onClick={() => handleLogout()}>
                        <LogOutIconGrey color="#A3A3A5" />
                        <LogOutIconWhite color="#fff" /> Sair
                    </Item>
                </BlockItem>
            </HeaderMenu>
            <FooterMenu>
                <IconUser />
            </FooterMenu>
        </Menu>
    );
}