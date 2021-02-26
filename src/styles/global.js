import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  :root {
    font-size: 60%;
    --color-background: #FDFDFD;
    --color-verde-botao: #03A688;
    --color-primaria: #048ABF;
    --color-texto-primario: #11142D;
    --color-texto-secundario: #808191;
    --color-label: #6C6C80;
    --color-background-input: #E6E6F0;
    --color-icon-menu: #A3A3A5;


    --color-secundary: #04D361;
    --color-secundary-dark: #04BF58;
    --color-title-in-primary: #FFFFFF;
    --color-text-in-primary: #D4C2FF;
    --color-text-title: #32264D;
    --color-text-complement: #9C98A6;
    --color-text-base: #6A6180;
    --color-line-in-white: #E6E6F0;
    --color-input-background: #F8F8FC;
    --color-button-text: #FFFFFF;
    --color-box-base: #FFFFFF;
    --color-box-footer: #FAFAFC;
  
    font-size: 60%;
}

html, body, #root {
    height: 100vh;
}

  body {
      background: var(--color-background);
  }

  #root {
      display: flex;
      align-items: center;
      justify-content: center;
  }

  body,
  input,
  button,
  textarea {
      font: 500 1.6rem Poppins;
  }

  button {
    color: #FFFFFF;
  }

  label {
    color: var(--color-label);
    font-weight: 300;
  }

  .container {
      width: 90vw;
      max-width: 700px;
  }

  @media (min-width: 700px) {
      :root {
          font-size: 62.5%;
      }
  }
`;
export default GlobalStyle;