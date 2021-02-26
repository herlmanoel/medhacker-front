import {
    Wrapper,
    Content,
    InputBlock,
    Title,
} from './style'
import InputSearch from '../../components/InputSearch';
import { useContext } from 'react';
import { ContextListagem } from '../../context/Listagem';

export default function MenuDashboard() {
    const { title } = useContext(ContextListagem);
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