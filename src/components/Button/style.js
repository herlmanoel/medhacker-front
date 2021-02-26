import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    height: 5.6rem;
    
    border: 1px solid var(--color-line-in-white); 
    border-radius: 0.8rem;
    background-color: var(--color-verde-botao);
    cursor: pointer;
    transition: opacity 0.5s;
    margin-bottom: 3rem;

    &:hover {
        opacity: 0.8;
    }
`;