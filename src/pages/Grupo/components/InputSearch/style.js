import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WrapperIcon = styled.button`
height: 5.6rem;
width: 6.6rem;
border: 1px solid var(--color-line-in-white);
background: var(--color-background-input);
margin-top: 0.5rem; 
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
border-radius: 0 0.8rem 0.8rem 0;
    &:hover {
        /* opacity: 0.1; */
        /* background-color: rgba(0, 0, 0, 0.250929); */
        box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.1);
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 5.6rem;
    margin-top: 0.5rem;
    border-radius: 0.8rem 0 0 0.8rem;
    background: var(--color-background-input);
    border: 1px solid var(--color-line-in-white); 
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
`;