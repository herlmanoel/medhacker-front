import { Wrapper, WrapperCard, Title } from './style';

import Card from './components/Card';

// import img01 from '../../../../assets/img/imgCards/ilustracao01.svg';

export default function CardHeader() {

    const CardList = [
        { title: 'Clínica Olímpica 01', description: 'aaaaaaaaaaaaaaa' },
        { title: 'Clínica Olímpica 02', description: 'aaaaaaaaaaaaaaa' },
        { title: 'Clínica Olímpica 02', description: 'aaaaaaaaaaaaaaa' },
        { title: 'Clínica Olímpica 01', description: 'aaaaaaaaaaaaaaa' },
        { title: 'Clínica Olímpica 02', description: 'aaaaaaaaaaaaaaa' },
        { title: 'Clínica Olímpica 02', description: 'aaaaaaaaaaaaaaa' },
    ];

    return (
        <Wrapper>
        <Title>Eventos</Title>
        <WrapperCard>
            {CardList.map(item => (
                <Card title={item.title} img={item.img} />
            ))}           
        </WrapperCard>
        </Wrapper>
    );
}