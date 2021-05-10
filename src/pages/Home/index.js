import MenuVertical from '../../components/MenuVertical';
import { Wrapper, WrapperMain } from './style';
import CardHeader from './components/CardHeader';
import CardFooter from './components/CardFooter';
import MenuHome from './components/MenuHome';

export default function Configuracoes() {
    return (
        <Wrapper>
            <MenuVertical />
            <WrapperMain>
                <MenuHome nome="Júlia Ferreira" />
                <CardHeader />
                <CardFooter />
            </WrapperMain>
        </Wrapper>
    );
}