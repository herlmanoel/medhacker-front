import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* &:focus-within::after {
        width: calc(100% - 3.2rem);
        height: 2px;
        content: '';
        background: var(--color-primaria);
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 0;
    } */
`;

export const WrapperIcon = styled.div`
height: 5.6rem;
width: 5.6rem;
background-color: red;
border: 1px solid var(--color-line-in-white);
background: var(--color-background-input);
margin-top: 0.5rem; 
display: flex;
align-items: center;
justify-content: center;

border-radius: 0.8rem 0 0 0.8rem;
`;

export const Input = styled.input`
    width: 100%;
    height: 5.6rem;
    margin-top: 0.5rem;
    border-radius: 0 0.8rem 0.8rem 0;
    background: var(--color-background-input);
    border: 1px solid var(--color-line-in-white); 
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
`;