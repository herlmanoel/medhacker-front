import {
    Wrapper,
    ImgPerfil,
    WrapperTexto,
    Nome,
    Permissao
} from './style';
import perfilImg from '../../assets/img/perfil.jpg';

export default function IconUser() {
    return (
        <Wrapper>
            <ImgPerfil src={perfilImg} />
            <WrapperTexto>
                <Nome>Júlia Ferreira</Nome>
                <Permissao>Administrador</Permissao>
            </WrapperTexto>
        </Wrapper>
    );
}