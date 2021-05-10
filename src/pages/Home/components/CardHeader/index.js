import { Wrapper } from './style';

import Card from './components/Card';

import img01 from '../../../../assets/img/imgCards/ilustracao01.svg';

export default function CardHeader() {

    const CardList = [
        { title: 'Clínica Olímpica 01', img: img01 },
        { title: 'Clínica Olímpica 02', img: img01 },
        { title: 'Clínica Olímpica 02', img: img01 },
        { title: 'Clínica Olímpica 02', img: img01 },
    ];

    return (
        <Wrapper>
            {CardList.map(item => (
                <Card title={item.title} img={item.img} />
            ))}           
        </Wrapper>
    );
}