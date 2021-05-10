import {
    Wrapper,
    Content,
    Title,
    Infos,
} from './style'
// import InputSearch from '../InputSearch';

export default function MenuHome({ nome }) {
    // const { title } = useContext(ContextListagem);
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