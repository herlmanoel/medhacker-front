import { Wrapper } from './style';

import Card from './Card';

import img01 from '../../../../assets/img/imgCards/ilustracao01.svg';
import { ContextProviderModal } from '../../context/contextModal';
import { useContext } from 'react';

export default function CardHeader({ data }) {
    console.log("dta cards: ", data);
    const { setEventoId } = useContext(ContextProviderModal);

    return (
        <Wrapper>
            {data.map(item => (
                <Card 
                    title={item.titulo} 
                    img={parseInt(item.id) % 2 === 0 ? img01 : '' } 
                    onClickSeeMore={() => setEventoId(item.id)} 
                />
            ))} 
        </Wrapper>
    );
}