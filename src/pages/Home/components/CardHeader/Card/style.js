import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: auto;
    max-width: 500px;
    max-height: 300px;
    padding: 5rem;
    background-color: #319CC7;
    border-radius: 1rem;
    margin: 1rem;
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
`;


export const WrapperButton = styled.div`
    width: 100%;
`;

export const ButtonCard = styled.button`
    display: block;
    width: ${(props) => props.width ? `${props.width}%` : `90%`};
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


