import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3vw;
    width: auto;
    max-height: 300px;
    padding: 3rem;
    background-color: #319CC7;
    border-radius: 1rem;
    margin: 1rem;

    @media (max-width: 1272px) {
        width: 90%;
        margin: 0 10%;
    }
`;

export const WrapperText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:  space-between !important;
`;

export const ImgCard = styled.img`
    height: 60%;
`;

export const TitleCard = styled.h1`
    display: inline;
    max-width: 300px;
    color: white;
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 2rem;
`;


export const WrapperButton = styled.div`
    width: 100%;
`;

export const ButtonCard = styled.button`
    display: block;
    width: ${(props) => props.width ? `15rem` : `20rem`};
    height: ${(props) => props.height ? `${props.height}rem` : `4.6rem`};
    border-radius: 0.8rem;
    background: ${(props) => props.color ? props.color : `#FFF`};
    cursor: pointer;
    transition: opacity 0.5s;
    outline: 0;
    border: ${(props) => props.border ? `${props.border}rem` : `0`};
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
    color: black;
    font-weight: 500 !important;
    & + & {
        margin-top: 1rem;
    }
    &:hover {
        opacity: 0.8;
    }
`;


