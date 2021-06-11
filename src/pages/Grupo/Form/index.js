import {
  Wrapper,
  Content,
  Form,
  Titulo,
  Subtitulo,
  WrapperButton,
  FooterFrom,
  FormDivider,
} from "./style.js";

import MenuForm from "../../../components/MenuForm";
import Textarea from "../../../components/Textarea";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState, useEffect } from "react";
import axios from "../../../services";
import { useHistory, useLocation } from "react-router-dom";
import { FormComponente } from "../components/FormComponente/index.js";
export default function FormGrupo() {
  const history = useHistory();
  const location = useLocation();
  const [edit, setEdit] = useState({
    id: location.state?.id_grupo,
    textButton: "Editar",
    state: false,
  });

  useEffect(() => {
    console.log("edit: ", edit);
  }, [edit]);

  const [tela, setTela] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [grupo, setGrupo] = useState({
    id_evento: location.state?.id,
    nome: "",
    descricao: "",
    username: "",
    logo: "",
    senha: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(grupo);
    await axios.post("grupos", grupo).then((response) => {
      const {
        data: { id },
      } = response;
      setEdit({ ...edit, id: id, state: true });
    });
    return setTela(false);
  }

  async function handleEdit(event) {
    event.preventDefault();
    // const idEvento = location.state?.id_evento;
    await axios
      .put(`grupos/${edit.id}`, grupo)
      .catch((err) => console.error(err));
    return setTela(false);
    // return history.push({
    //   pathname: "/ListagemGrupos",
    //   state: {
    //     id: idEvento,
    //   },
    // });
  }

  function irParaListagemGrupos() {
    const idEvento = location.state?.id_evento;
    return history.push({
      pathname: "/ListagemGrupos",
      state: {
        id: idEvento,
      },
    });
  }

  function handleOnChange(event) {
    const { name, value } = event.target;
    console.log({ name, value });
    setGrupo({ ...grupo, [name]: value });
    console.log(grupo);
  }

  useEffect(() => {
    const idGrupo = location.state?.id_grupo;

    if (idGrupo) {
      (async () => {
        const URL = `grupos/${idGrupo}`;
        await axios
          .get(URL)
          .then((result) => {
            const grupo = result.data;
            setGrupo(grupo);
            console.log(grupo);
          })
          .catch((err) => console.log(err));
      })();
      setEdit({ id: idGrupo, textButton: "Editar", state: true });
    }
  }, [location]);

  return (
    <>
      {" "}
      {/* <ModalComponent /> */}
      <Wrapper>
        <MenuForm tela={tela} setTela={setTela} />
        <Content>
          {tela ? (
            <Form onSubmit={(event) => handleSubmit(event)}>
              <Titulo>Cadastro de Grupo</Titulo>
              <Subtitulo>Dados do grupo</Subtitulo>
              <Input
                label="Nome"
                name="nome"
                value={grupo.nome}
                type="text"
                functionChange={(event) => handleOnChange(event)}
              />
              <FormDivider>
                <Input
                  label="username"
                  name="username"
                  value={grupo.username}
                  functionChange={(event) => handleOnChange(event)}
                />
                <Input
                  label="Logo"
                  name="logo"
                  type="text"
                  value={grupo.logo}
                  functionChange={(event) => handleOnChange(event)}
                />
              </FormDivider>
              <Textarea
                label="Descricao"
                name="descricao"
                value={grupo.descricao}
                functionChange={(event) => handleOnChange(event)}
              >
                {edit.state ? grupo.descricao : ""}
              </Textarea>

              <FooterFrom>
                <WrapperButton>
                  {edit.state ? (
                    <Button
                      onClick={(event) => handleEdit(event)}
                      text={edit.textButton + " e avançar"}
                    />
                  ) : (
                    <Button type="submit" text="Cadastrar e avançar" />
                  )}
                </WrapperButton>
              </FooterFrom>
            </Form>
          ) : (
            <>
              <Form>
                <Subtitulo>Componentes do Grupo</Subtitulo>
                <FormComponente id_grupo={Number(edit.id || null)} showModal={showModal} setShowModal={setShowModal}/>
              </Form>
              <Button
                width="30rem"
                onClick={(event) => irParaListagemGrupos()}
                text="Finalizar cadastro"
              />
            </>
          )}
        </Content>
      </Wrapper>
    </>
  );
}
