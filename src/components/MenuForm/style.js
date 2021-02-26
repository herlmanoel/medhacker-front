import styled from 'styled-components';
export const Wrapper = styled.div`
    width: 100%;
    height: 8rem;
    margin-top: 3rem;
    margin-bottom: 3%;
    background-color: #FDFDFD;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 800px;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.img`
    height: 8rem;
    /* padding: 2%; */
`;

export const VoltarBlock = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
    color: #048ABF;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;

export const Texto = styled.h5``;
