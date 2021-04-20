import {
    Ul,
    Li,
    ButtonLi,
} from './style';

// ímpar para ter um botão no centro
const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;
/*
    limit: limite de itens por página
    total: total de itens,
    offset: para pular os itens (se estou na página 1, quero pular 0 itens, se estou na dois quero pular 1 itens),
    setOffset
*/

export default function Pagination({
    limit,
    total,
    offset,
    setOffset
}) {
    // página atual
    const current = offset ? (offset / limit) + 1 : 1;
    console.log('total: ', total);
    console.log('pages: ', total / limit);
    const pages = Math.ceil(total / limit);
    console.log('pages: ',Math.min(pages, MAX_ITEMS))
    // pega o maior entre os dois, ou seja, no mínimo é 1
    const first = Math.max(current - MAX_LEFT, 1);
    console.log(Math.min(offset));
    console.log("----");
    return (
        <Ul>
            {/* Array.from cria um array de MAX_ITEMS */}
            {Array.from({ length: Math.min(pages, MAX_ITEMS) })
                .map((_, index) => {
                    return index + first;
                })
                .map((page) => (
                    <Li key={page}>
                        <ButtonLi
                            onClick={() => setOffset((page - 1) * limit)}
                            active={page === current ? true : false}
                        >
                            {page}
                        </ButtonLi>

                    </Li>
                ))}
        </Ul>
    );
}