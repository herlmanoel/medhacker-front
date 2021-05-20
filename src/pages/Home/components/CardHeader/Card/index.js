import {
    Wrapper,
    ImgCard,
    WrapperText,
    TitleCard,
    ButtonCard,
    WrapperButton,
} from './style';

export default function Card({ title, img, onClickSeeMore, onClickCadastro }) {
   

    return (
        <Wrapper>
            <ImgCard src={img} />
            <WrapperText>
                <TitleCard> {title} </TitleCard>
                <WrapperButton>
                    <ButtonCard 
                        onClick={onClickSeeMore}  
                        seeMore
                    > Ver mais </ButtonCard>
                    <ButtonCard  onClick={onClickCadastro}>Inscrever-se</ButtonCard>
                </WrapperButton>
            </WrapperText>
        </Wrapper>
    );
}