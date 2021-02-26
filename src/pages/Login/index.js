import { Link, useHistory } from "react-router-dom";

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
} from './style.js';

import Input from '../../components/Input';
import imgLogo from '../../assets/img/logo-colorida.jpg';
// import axios from '../../services/index';

import { useState, useContext } from "react";
import { Context } from '../../context/AuthProvider';

export default function FormUsuario() {

    const { athenticate } = useContext(Context);
    let history = useHistory();
    console.log(athenticate);

    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        return history.push('/listagemusuarios');
        // const dados = await axios.post('autenticar', {
        //     email, senha
        // });
        // // console.log(dados);
        // if (dados) {
        //     const token = `Bearer ${dados.data.token}`;
        //     await localStorage.setItem('@backend/token', JSON.stringify(token));
        //     console.log(dados);
        //     return history.push('/Dashboard');
        // }


    }

    return (
        <Wrapper>
            <ImgContent />
            <Content>
                <FormContent>
                    <ImgBlock>
                        <ImgLogo src={imgLogo} />
                    </ImgBlock>
                    <Title>Login</Title>
                    <FormLogin method="POST" onSubmit={(event) => handleSubmit(event)}>

                        <Input name="email" label="E-mail ou username"
                            functionChange={(event) => setEmail(event.target.value)} value={email}
                        />
                        <Input name="senha" label="Senha"
                            functionChange={(event) => setSenha(event.target.value)} value={senha}
                        />

                        <ContentText>
                            <ContentCheckbox>
                                <Checkbox /> <Texto>Lembrar-me</Texto>
                            </ContentCheckbox>
                            <TextoSub>Esqueceu sua senha?</TextoSub>
                        </ContentText>

                        <Button type="submit"> Entrar </Button>

                        <Texto>Ainda não tem uma conta? <Link to="/formusuario">Cadastre-se.</Link></Texto>
                    </FormLogin>
                </FormContent>
            </Content>
        </Wrapper>
    );
}