import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
// import { useLocation } from "react-router-dom";

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
import { Error } from "../../components/Error";

export default function Login() {
  const { handleLogin } = useContext(Context);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  // const location = useLocation();
  const [tempError, setTempError] = useState(false);

  useEffect(() => {
    console.log("AQUI");
    document.title = "Login";
  }, []); // eslint-disable-line

  return (
    <Wrapper>
      <ImgContent />
      <Content>
        <FormContent>
          <ImgBlock>
            <ImgLogo src={imgLogo} />
          </ImgBlock>
          <Title>Login</Title>

          {tempError && (
            <Error mensage="Erro ao realizar o login. Tente novamente." />
          )}

          <FormLogin method="POST">
            <Input
              name="email"
              label="E-mail ou username"
              functionChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <Input
              name="senha"
              label="Senha"
              type="password"
              functionChange={(event) => setSenha(event.target.value)}
              value={senha}
            />

            <ContentText>
              <ContentCheckbox>
                <Checkbox /> <Texto>Lembrar-me</Texto>
              </ContentCheckbox>
              <TextoSub>Esqueceu sua senha?</TextoSub>
            </ContentText>

            <Button
              onClick={(event) =>
                handleLogin(event, { email, senha }, setTempError)
              }
            >
              {" "}
              Entrar{" "}
            </Button>

            <Texto>
              Ainda não tem uma conta?{" "}
              <Link to="/formusuario">Cadastre-se.</Link>
            </Texto>
          </FormLogin>
        </FormContent>
      </Content>
    </Wrapper>
  );
}
