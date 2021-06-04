import { useEffect, useState } from "react";
import ButtonComponent from "../../../../components/Button";
import Input from "../../../../components/Input";
import { Wrapper, FormDivider, ButtonBlock } from "./styles";
import axios from "../../../../services/index";

export const FormComponente = ({ id_grupo }) => {
  console.log(id_grupo);

  const [componente, setComponente] = useState({
    nome: "",
    email: "",
    id_grupo: id_grupo,
  });

  const [componentes, setComponentes] = useState([]);

  const getDataComponentes = async (id_grupo, setData) => {
    const URL = `todosComponentesGrupo/${id_grupo}`;
    console.log(URL);
    await axios.get(URL).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  useEffect(() => {
    getDataComponentes(componente.id_grupo, setComponentes);
  }, []); //eslint-disable-line

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setComponente({ ...componente, [name]: value });
  };

  const handleOnClickRegister = async (event) => {
    event.preventDefault();
    await axios
      .post(`componentesGrupo`, componente)
      .catch((err) => console.error(err));
    getDataComponentes(componente.id_grupo, setComponentes);
  };

  return (
    <Wrapper>
      {componentes &&
        componentes.map((item) => {
          return (
            <FormDivider>
              <Input
                label="Nome"
                name="nome"
                type="text"
                value={item.nome}
                functionChange={(event) => handleOnChange(event)}
                disabled
              />{" "}
              <Input
                label="E-mail"
                name="email"
                type="text"
                value={item.email}
                functionChange={(event) => handleOnChange(event)}
                disabled
              />
            </FormDivider>
          );
        })}
      <FormDivider>
        <Input
          label="Nome do componente"
          name="nome"
          type="text"
          value={componente.nome}
          functionChange={(event) => handleOnChange(event)}
        />{" "}
        <Input
          label="E-mail"
          name="email"
          type="text"
          value={componente.email}
          functionChange={(event) => handleOnChange(event)}
        />{" "}
        <ButtonBlock>
          <ButtonComponent
            text="Cadastrar Componente"
            type="button"
            onClick={(event) => handleOnClickRegister(event)}
          />
        </ButtonBlock>
      </FormDivider>
    </Wrapper>
  );
};
