import { Wrapper, Input, WrapperIcon } from "./style.js";
import { useState, useContext } from "react";
import { Search } from "react-feather";
import axios from "../../../../services";
import { ContexEventos } from "../../../../context/Evento";

export default function InputComponent({ name, type, getDataByTitulo }) {
  const [campo, setCampo] = useState("");
  const { setDataEventos } = useContext(ContexEventos);

  async function handlePesquisa(event) {
    const { value } = event.target;
    setCampo(value);
  }

  async function getDataEventosByTitulo() {
    await axios.get(`eventospelotitulo/${campo}`).then((result) => {
      const { data } = result;
      console.log(data);
      return setDataEventos(data);
    });
  }

  return (
    <Wrapper>
      <Input
        type={type}
        id={name}
        name={name}
        value={campo}
        onChange={(event) => handlePesquisa(event)}
        placeholder="Pesquisar"
      />
      <WrapperIcon onClick={(event) => getDataEventosByTitulo(event)}>
        <Search color="#000" />
      </WrapperIcon>
    </Wrapper>
  );
}
