import styled from 'styled-components';
import ImgBackground from '../../assets/img/img-login.jpg';



export const ImgContent = styled.div`
    background-image: url(${ImgBackground});
    background-size: cover;
`;


export const Content = styled.div`
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormContent = styled.div``;

export const ImgBlock = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImgLogo = styled.img`
    width: 13rem;
    height: auto;
`;

export const Title = styled.h1`
    margin-bottom: 3rem;
    color: var(--color-primaria);
`;

export const FormLogin = styled.form``;

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

export const ContentText = styled.div`
    width: 100%;
    margin: 1.4rem 0 1.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TextoSub = styled.a`
    font-size: 1.3rem;
    color: var(--color-label);
    font-weight: 300;
    /* width: 100%; */
    cursor: pointer;
    text-decoration: underline;
    align-self: center;
`;

export const Texto = styled.p`
    
    font-size: 1.3rem;
    color: var(--color-label);
    font-weight: 300;
    text-align: center;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    padding: 0;
    margin-right: 1rem;
`;

export const ContentCheckbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    /* background-color: red; */
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 813px) {
        display: flex;  
        align-items: center;
        justify-content: center;

        ${ImgContent} {
            display:none;
        }  
        ${Content} {
            width: 40rem;
        }
    }
    @media (max-width: 513px) {
        display: flex;  
        align-items: center;
        justify-content: center;

        ${ImgContent} {
            display:none;
        }  
        ${Content} {
            width: 30rem;
        }
    }
`;
