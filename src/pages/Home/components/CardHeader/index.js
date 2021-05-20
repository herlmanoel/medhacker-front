import { useContext } from 'react';

import { Wrapper } from './style';
import Card from './Card';
import img01 from '../../../../assets/img/imgCards/ilustracao01.svg';

import { ContextProviderModal } from '../../context/contextModal';
import history from '../../../../routes/history';

export default function CardHeader({ data }) {
    const { setEventoId } = useContext(ContextProviderModal);
    
    function handleCadastrar(id_evento) {
        console.log('id_evento', id_evento);
        return history.push({
            pathname: '/FormGrupo',
            state: {
                id: id_evento
            }
        });
    }

    return (
        <Wrapper>
            {data.map(item => (
                <Card 
                    title={item.titulo} 
                    img={parseInt(item.id) % 2 === 0 ? img01 : '' } 
                    onClickSeeMore={() => setEventoId(item.id)} 
                    onClickCadastro={() => handleCadastrar(item.id)}
                />
            ))} 
        </Wrapper>
    );
}