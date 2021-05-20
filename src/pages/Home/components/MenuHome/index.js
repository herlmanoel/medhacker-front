import {
    Wrapper,
    Content,
    Title,
    Infos,
} from './style';

export default function MenuHome({ nome }) {
    return (
        <Wrapper>
            <Content>
                <Infos>Olá,</Infos>
                <Title> { nome }, </Title>
                <Infos>abaixo temos os eventos com as inscrições abertas.</Infos>
            </Content>
        </Wrapper>
    );
}