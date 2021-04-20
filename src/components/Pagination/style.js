import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
`;

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    height: 5rem;
`;

export const Li = styled.li`
    & + & {
        margin-left: 1rem;
    }
`;

export const ButtonLi = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    padding: 0.8rem;
    outline: none;
    border: none;
    background-color: var(--color-background-input);
    border-radius: 50%;
    font-weight: 300 !important;
    color: var(--color-texto-primario);

    ${(props) => props.active ?  
    `
    font-weight: bold !important;
    width: 4rem;
    height: 4rem;
    box-shadow: 0px 2px 25px 2px #AFB3B5;
    ` : `` }
    
`;
