import {
    Wrapper,
    WrapperText,
    TitleCard,
    ButtonCard,
    WrapperButton,
} from './style';

export default function Card({ title, img }) {
    return (
        <Wrapper>   
            <WrapperText>
                <TitleCard> {title} </TitleCard>
                <WrapperButton>
                    <ButtonCard>Ver mais</ButtonCard>
                </WrapperButton>
            </WrapperText>
        </Wrapper>
    );
}