import {
    Wrapper,
    ImgCard,
    WrapperText,
    TitleCard,
    ButtonCard,
    WrapperButton,
} from './style';



export default function Card({ title, img, onClickSeeMore }) {
   
    return (
        <Wrapper>
            <ImgCard src={img} />
            <WrapperText>
                <TitleCard> {title} </TitleCard>
                <WrapperButton>
                    <ButtonCard onClick={onClickSeeMore} width="60" height="3.6" color="#CADEE5"> Ver mais </ButtonCard>
                    <ButtonCard  >Inscrever-se</ButtonCard>
                </WrapperButton>
            </WrapperText>
        </Wrapper>
    );
}