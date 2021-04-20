import {
    Wrapper,
    Content,
    InputBlock,
    Title,
} from './style'
import InputSearch from '../InputSearch';

export default function MenuDashboard({ title }) {
    // const { title } = useContext(ContextListagem);
    return (
        <Wrapper>
            <Content>
                <Title>{title}</Title>
                <InputBlock>
                    <InputSearch />
                </InputBlock>
            </Content>
        </Wrapper>
    );
}