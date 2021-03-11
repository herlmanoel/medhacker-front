import styled from 'styled-components';

export const SelectBlock = styled.div`
    position: relative;


        margin-top: 1.4rem;

    &:focus-within::after {
        width: calc(100% - 3.2rem);
        height: 2px;
        content: '';
        background: var(--color-primaria);
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 0;
    }
`;

export const Label = styled.label`
    font-size: 1.4rem;
`;

export const Select = styled.select`
    width: 100%;
    height: 5.6rem;
    margin-top: 0.5rem;
    border-radius: 0.8rem;
    background: var(--color-background-input);
    border: 1px solid var(--color-line-in-white); 
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
`;
