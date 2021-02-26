import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 2rem;
`;

export const ImgPerfil = styled.img`
    border-radius: 50%;
    width: 5rem;
`;
export const WrapperTexto = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    margin-left: 1rem;
    justify-content: center;
`;

export const Nome = styled.p`
    color: var(--color-texto-primario);
    line-height: 1rem;
`;

export const Permissao = styled.p`
    color: var(--color-texto-secundario);
    font-size: 1.2rem;
`;