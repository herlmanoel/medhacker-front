import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
    Home,
    Settings,
    User,
    Folder,
    Grid,
} from 'react-feather';

export const Menu = styled.nav`
    width: 25rem;
    height: 100vh;
    border-right: 1px solid var(--color-line-in-white);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderMenu = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const FooterMenu = styled.div`
    height: 8rem;
    width: 100%;
`;

export const LogoImg = styled.img`
    width: 15rem;
    margin: 5rem 0 5rem;
`;

export const BlockItem = styled.li`
    list-style: none;
    width: 100%;
`;

const activeClassName = "active";

export const HomeIconGrey = styled(Home)``;
export const SettingsIconGrey = styled(Settings)``;
export const UserIconGrey = styled(User)``;
export const FolderIconGrey = styled(Folder)``;
export const GridIconGrey = styled(Grid)``;

export const HomeIconWhite = styled(Home)`
    display: none;
`;
export const SettingsIconWhite = styled(Settings)`
    display: none;
`;
export const UserIconWhite = styled(User)`
    display: none;
`;
export const FolderIconWhite = styled(Folder)`
    display: none;
`;
export const GridIconWhite = styled(Grid)`
    display: none;
`;

export const Item = styled(NavLink).attrs({ activeClassName })`
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 4rem;
    padding-left: 3rem;
    color: var(--color-texto-secundario);
    text-decoration: none;

    &.${activeClassName} {
        background-color: #048ABF;
        color: #fff;
        border-radius: 0rem 0.8rem 0.8rem 0rem;
        margin-right: 2rem;

        ${HomeIconGrey},
        ${SettingsIconGrey},
        ${UserIconGrey},
        ${GridIconGrey},
        ${FolderIconGrey} {
            display: none;
        }

        ${HomeIconWhite},
        ${SettingsIconWhite},
        ${UserIconWhite},
        ${GridIconWhite},
        ${FolderIconWhite} {
            display: block;
        }
    }
    
    cursor: pointer;
`;


