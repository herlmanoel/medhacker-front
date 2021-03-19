import {
    Wrapper,
    Content,
    InputBlock,
    Title,
} from './style'
import InputSearch from '../../pages/Evento/components/InputSearch';
// import { useContext } from 'react';
// import { ContextListagem } from '../../context/Listagem';

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