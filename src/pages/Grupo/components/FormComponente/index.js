/* eslint-disable */
import { useEffect, useState } from "react";
import ButtonComponent from "../../../../components/Button";
import Input from "../../../../components/Input";
import { Wrapper, FormDivider, ButtonBlock, Link } from "./styles";
import axios from "../../../../services/index";
import { ModalComponent } from "../../../../components/ModalComponent";

import { Edit, Trash } from "react-feather";

export const FormComponente = ({ id_grupo, showModal, setShowModal }) => {
  console.log("id_grupo :", id_grupo);
  const [inEditing, setInEditing] = useState(false);

  const [componentEdit, setComponenteEdit] = useState({
    state: false,
    id: null,
    nome: "",
    email: "",
    id_grupo: id_grupo,
    status: false,
  });

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
    localStorage.setItem("id_grupo", id_grupo);
  }, []); //eslint-disable-line

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setComponente({ ...componente, [name]: value });
  };

  const handleOnChangeEdit = (event) => {
    const { name, value } = event.target;
    setComponenteEdit({ ...componentEdit, [name]: value });
  };

  const handleOnClickRegister = async (event) => {
    event.preventDefault();
    await axios
      .post(`componentesGrupo`, componente)
      .catch((err) => console.error(err));
    setComponente({
      nome: "",
      email: "",
      id_grupo: id_grupo,
    });
    getDataComponentes(componente.id_grupo, setComponentes);
  };

  async function handleDelete(id) {
    // setComponentEdit({ ...componentEdit, state: true });

    const URL = `/componentesGrupo/${id}`;
    await axios.delete(URL).catch((err) => console.log(err));
    await getDataComponentes(componente.id_grupo, setComponentes);
  }
  async function handleEdit(id) {
    const URL = `componentesGrupo/${id}`;
    console.log(URL);
    await axios.get(URL).then((response) => {
      console.log(URL, response);
      console.log(response);
      const { id = 0, nome = "", email = "" } = response.data;
      setComponenteEdit({ ...componentEdit, status: true, id, nome, email });
      setInEditing(true);
    });
  }

  async function handleConfirmEdit() {
    const { id, nome, email } = componentEdit;
    const objCompEdit = {
      id,
      nome,
      email,
    };
    const URL = `componentesGrupo`;
    await axios.put(URL, objCompEdit).catch((err) => console.log(err));
    await getDataComponentes(componente.id_grupo, setComponentes);
    setInEditing(false);
  }

  return (
    <>
      <ModalComponent display={showModal} setDisplay={setShowModal} />
      <Wrapper>
        {componentes &&
          componentes.map((item) => {
            return (
              <FormDivider key={item.id}>
                <Input
                  label="Editar Nome"
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
                <Link onClick={() => handleDelete(Number(item.id))} href="#">
                  <Trash color="#F23D4C" />
                </Link>{" "}
                <br />
                <Link onClick={() => handleEdit(item.id)} href="#">
                  <Edit color="#ADD96C" />
                </Link>
              </FormDivider>
            );
          })}
        <FormDivider>
          {inEditing ? (
            <>
              <Input
                label="Nome do componente"
                name="nome"
                type="text"
                value={componentEdit.nome}
                functionChange={(event) => handleOnChangeEdit(event)}
              />
              <Input
                label="E-mail"
                name="email"
                type="text"
                value={componentEdit.email}
                functionChange={(event) => handleOnChangeEdit(event)}
              />
            </>
          ) : (
            <>
              <Input
                label="Nome do componente"
                name="nome"
                type="text"
                value={componente.nome}
                functionChange={(event) => handleOnChange(event)}
              />
              <Input
                label="E-mail"
                name="email"
                type="text"
                value={componente.email}
                functionChange={(event) => handleOnChange(event)}
              />
            </>
          )}

          <ButtonBlock>
            <ButtonComponent
              text={inEditing ? "Editar Componente" : "Cadastrar Componente"}
              type="button"
              onClick={
                inEditing
                  ? () => handleConfirmEdit()
                  : (event) => handleOnClickRegister(event)
              }
            />
          </ButtonBlock>
        </FormDivider>
      </Wrapper>
    </>
  );
};
