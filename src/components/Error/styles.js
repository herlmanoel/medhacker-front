import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: #f2717c;
  height: 6rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  ${(props) => props.sumir && `display: none;`}
`;

export const Mensage = styled.p`
  font-size: 1.5rem;
`;
