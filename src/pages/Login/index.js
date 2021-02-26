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

export default function Login() {
    return (
        <Wrapper>
            <ImgContent/>
            <Content>
                <FormContent>
                    <ImgBlock>
                    <ImgLogo src={imgLogo}/>
                    </ImgBlock>
                    <Title>Login</Title>
                    <FormLogin>
                        <Input name="email" label="E-mail ou username"/>
                        <Input name="senha" label="Senha"/>
                        <ContentText>
                            <ContentCheckbox>
                                <Checkbox /> <Texto>Lembrar-me</Texto>
                            </ContentCheckbox>
                            <TextoSub>Esqueceu sua senha?</TextoSub>
                        </ContentText>
                        <Button>Entrar</Button>
                        <Texto>Ainda não tem uma conta? <TextoSub>Cadastre-se.</TextoSub></Texto>
                    </FormLogin>
                </FormContent>
            </Content>
        </Wrapper>
    );
}