import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: auto;
    /* max-height: 300px; */
    padding: 3rem;
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
    width: 45%;
    padding: 5%;
`;

export const TitleCard = styled.h1`
    /* display: inline; */
    /* max-width: 300px; */
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
    width: 15rem;
    height: 4rem;
    border-radius: 0.8rem;
    background: var(--color-background-input);
    cursor: pointer;
    transition: opacity 0.5s;
    outline: 0;
    border: 0;
    color: black;
    font-weight: 500 !important;
    & + & {
        margin-top: 1rem;
    }
    &:hover {
        opacity: 0.8;
    }

    ${(props) => props.seeMore 
    ? `
        color: #FDFDFD;
        background: none;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
    ` 
    : `
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
    `}
`;


