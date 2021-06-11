import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 5rem;
  /* background: #f2717c; */
`;

export const FormDivider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 2rem;
  height: 10rem;
`;

export const ButtonBlock = styled.div`
  /* background: red; */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 0.3rem;
`;

export const Link = styled.a`
  text-decoration: none;
  padding-top: 4rem;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; */

  &:hover {
    opacity: 0.8;
  }
`;
