import { useEffect, useState } from 'react';
import { Wrapper, Mensage } from "./styles";

export const Error = ({ mensage = "Erro.",  }) => {
  console.log("montou error");
  const [sumir, setSumir]= useState(false);
  
  useEffect(() => {
    const to = () => setTimeout(() => {
      setSumir(true);
    }, 2000);
    to();

    return () => {
      return clearTimeout(to);
    }
  }, []); // eslint-disable-line
  return (
    <Wrapper sumir={sumir}>
      <Mensage>{mensage}</Mensage>
    </Wrapper>
  );
};
