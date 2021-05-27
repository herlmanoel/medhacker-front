import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 2%;
    display: grid;
    grid-template-columns: max-content max-content max-content;
    gap: 1%;
`;

const cssClicked = `
    background: #319CC7;
    color: #FDFDFD;
`;

export const Text = styled.button`
  color: #000;
  font-size: 1.3rem !important;
  width: intrinsic; /* Safari/WebKit uses a non-standard name */
  width: -moz-max-content; /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
  padding: 8px 15px;
  border-radius: 0.8rem;
  border: none;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  background: none;
  
  ${(props) => props.clicked && cssClicked}
  
  @media (max-width: 714px) {
      font-size: 0.8rem;
  }
`;
