import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Edit, Trash, Users } from 'react-feather';

export const Table = styled.table`
    width: 100%;
`;

const padding = 'padding: 1rem;';
export const Head = styled.thead``;
export const ItemHead = styled.th`
    ${padding}
    text-align: left;
    color: var(--color-label);
    font-weight: 300;
`;

export const Line = styled.tr``;

export const Body = styled.tbody``;

export const ItemBody = styled.td`
    ${padding}
    font-weight: 300;
    border-top: 1px solid var(--color-line-in-white);
    max-width: 25rem;
`;

export const Name = styled.strong`
    display: block;
    line-height: 1rem;
`;

export const Email = styled.small``;

export const WrapperTable = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    width: 90%;
    flex-direction: column;
    overflow-y: auto;
    height: 80vh;
`;

export const WrapperFooter = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-end;
    z-index: 10;
`
export const BlockButton = styled.div`
    width: 20rem;
`;

export const EditIcon = styled(Edit)``;
export const TrashIcon = styled(Trash)``;
export const UsersIcon = styled(Users)``;
export const LinkAction = styled(Link)`
    /* text-decoration: none; */
    cursor: pointer;
    /* padding: 0.5rem; */
    &:hover {
        opacity: 0.6;
    }
`;