import styled from "styled-components";

export const Wrapper = styled.div`
    z-index: 11;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(250, 250, 250, 0.7);
`;

export const Modal = styled.div`
    background-color: #FAFAFC;
    box-shadow: 0px 4px 25px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    max-width: 800px;
    margin: 8rem auto;
    height: 80vh;
    padding: 0 3rem;
    overflow:scroll;
    overflow-x:hidden;
    padding-bottom: 5rem;
`;

export const MenuHeaderClose = styled.div`
    width: 100%;
    background-color: unset;
    height: auto;
`; 

export const ButtonClose = styled.button`
    float: right;
    background: unset;
    border: unset;
    padding: 3rem;
    cursor: pointer;

    &:hover {

    }
`;

export const Titulo = styled.h1`
    color: var(--color-primaria);
    /* max-width: 30rem; */
    /* line-height: 4rem; */
    size: 0.8rem;
`;

export const Form = styled.form`
   width: 100%;
   max-width: 650px;
`;


export const Subtitulo = styled.h2`
    color: var(--color-primaria);
    max-width: 30rem;
    margin: 2rem 0 2rem;
    font-weight: 500;
    size: 0.8rem;
`;

export const FormGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    margin-top: 1.4rem;
    gap: 1.4rem
`;

export const FormDivider = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 2rem;
`;

export const WrapperButton = styled.div`
    width: 32rem;
`;
export const FooterFrom = styled.div`
    margin-top: 3rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
