import styled from "styled-components";

export const Wrapper = styled.div`
  ${(props) => !props.display && `display:none;`}
  position: fixed;
  z-index: 999;
  background-color: red;


  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
