import { Wrapper, Mensage } from "./styles";

export const Error = ({ mensage = "Erro." }) => {
  return (
    <Wrapper>
      <Mensage>{mensage}</Mensage>
    </Wrapper>
  );
};
