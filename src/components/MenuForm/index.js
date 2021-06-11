import {
    Wrapper,
    Logo,
    Content,
    VoltarBlock,
    Texto,
} from './style';

import { ArrowLeft } from 'react-feather';
import logoColorida from '../../assets/img/MedHacker.svg';
import { useHistory } from 'react-router-dom';

export default function MenuForm({ tela = true, setTela }) {
    const history = useHistory();
    function handleGoBack() {
        if(!tela) {
            return setTela((prev) => !prev);
        }
        return history.goBack();
    }

    return (
        <Wrapper>
            <Content>
                <Logo src={logoColorida} />
                <VoltarBlock onClick={handleGoBack} >
                    <ArrowLeft color="#048ABF" />
                    <Texto>Voltar</Texto>
                </VoltarBlock>
            </Content>
        </Wrapper>
    );
}