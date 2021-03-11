import styled from 'styled-components';




export const Content = styled.div`
    /* margin-top: 3rem; */
    /* margin-bottom: 3rem; */
    width: 100%;
    max-width: 800px;
    background: #FFFFFF;
    box-shadow: 0px 4px 25px 1px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    
`;

export const Form = styled.form`
   width: 100%;
   max-width: 650px;
   padding-top: 3rem;
`;

export const Titulo = styled.h1`
    color: var(--color-primaria);
    /* max-width: 30rem; */
    /* line-height: 4rem; */
    size: 0.8rem;
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

export const WrapperButton = styled.div`
    width: 32rem;
`;
export const FooterFrom = styled.div`
    margin-top: 3rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    
`;

export const Wrapper = styled.div.attrs()`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    @media (max-width: 900px) {
        ${Content}, ${Form}  {
            width: 70rem;
        }
    }

    @media (max-width: 800px) {
        ${Content} {
            width: 60rem;
            padding: 3rem;
        }
    }
    @media (max-width: 700px) {
        ${Content} {
            width: 50rem;
            padding: 3rem;
        }
    }
    @media (max-width: 500px) {
        ${Content} {
            width: 45rem;
            padding: 5rem;
            width: 100%;
            height: 100%;
        }
    }
`;