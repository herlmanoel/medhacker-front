import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';

import {
  Wrapper,
  ImgContent,
  Content,
  ImgLogo,
  FormContent,
  Title,
  FormLogin,
  ImgBlock,
  Button,
  TextoSub,
  ContentText,
  Texto,
  ContentCheckbox,
  Checkbox,
} from "./style.js";

import Input from "../../components/Input";
import imgLogo from "../../assets/img/logo-colorida.jpg";
import { Context } from "../../context/AuthProvider";

const error = () => toast.error('Erro ao relizar o login.');
const success = () => toast.success('Sucesso ao realizar o login.');

const notify = {
  error, success,
};

export default function Login() {
  const { handleLogin } = useContext(Context);

  const emailInputRef = useRef(null);
  const senhaInputRef = useRef(null);

  useEffect(() => {
    document.title = "Login";
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const senha = senhaInputRef.current.value;

    handleLogin(event, { email, senha }, notify);
  }

  return (
    <Wrapper>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <ImgContent />
      <Content>
        <FormContent>
          <ImgBlock>
            <ImgLogo src={imgLogo} />
          </ImgBlock>
          <Title>Login</Title>

          <FormLogin method="POST" onSubmit={(event) => handleSubmit(event)} >
          <Input
            name="email"
            label="E-mail ou username"
            innerRef={emailInputRef}
            type="text"
          />
          <Input
            name="senha"
            label="Senha"
            type="password"
            innerRef={senhaInputRef}
          />

          <ContentText>
            <ContentCheckbox>
              <Checkbox /> <Texto>Lembrar-me</Texto>
            </ContentCheckbox>
            <TextoSub>Esqueceu sua senha?</TextoSub>
          </ContentText>

          <Button type="submit"> Entrar </Button>

          <Texto>
            Ainda não tem uma conta?{" "}
            <Link to="/formusuario">Cadastre-se.</Link>
          </Texto>
        </FormLogin>
      </FormContent>
    </Content>
    </Wrapper >
  );
}
