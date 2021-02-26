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
    FolderIconGrey,
    GridIconGrey,
    HomeIconWhite,
    SettingsIconWhite,
    UserIconWhite,
    FolderIconWhite,
    GridIconWhite,
} from './style';

import logoImg from '../../assets/img/MedHacker.svg';
import IconUser from '../../components/IconUser';

export default function MenuVertical() {

    return (
        <Menu>
            <HeaderMenu>
                <LogoImg src={logoImg} />
                <BlockItem >
                    <Item exact to="/Dashboard">
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
                <BlockItem >
                    <Item exact to="/ListagemProjetos">
                        <FolderIconGrey color="#A3A3A5" />
                        <FolderIconWhite color="#fff" /> Projetos
                    </Item>
                </BlockItem>
                <BlockItem >
                    <Item exact to="/Config">
                        <SettingsIconGrey color="#A3A3A5" />
                        <SettingsIconWhite color="#fff" /> Configurações
                    </Item>
                </BlockItem>
            </HeaderMenu>
            <FooterMenu>
                <IconUser />
            </FooterMenu>
        </Menu>
    );
}