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

export default function FormGrupo() {
  const history = useHistory();
  const location = useLocation();
  const [edit, setEdit] = useState({ id: 0, textButton: "", state: false });
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
    const idEvento = location.state?.id;
    console.log(grupo);
    await axios.post("grupos", grupo);
    console.log("location: ", location);
    console.log("idEvento do Form: ", idEvento);

    return history.push({
      pathname: "/ListagemGrupos",
      state: {
        id: idEvento,
      },
    });
  }

  async function handleEdit(event) {
    event.preventDefault();
    const idGrupo = location.state?.id_grupo;
    const idEvento = location.state?.id_evento;
    await axios
      .put(`grupos/${idGrupo}`, grupo)
      .catch((err) => console.error(err));

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
    // const idEvento = location.state?.id_evento;
    const idGrupo = location.state?.id_grupo;
    // console.log(idGrupo)
    // console.log(idEvento)
    // setGrupo({ ...grupo, id_evento: idEvento });
    // console.log(grupo);
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
    <Wrapper>
      <MenuForm />
      <Content>
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
                  text={edit.textButton}
                />
              ) : (
                <Button type="submit" text="Cadastrar" />
              )}
            </WrapperButton>
          </FooterFrom>
        </Form>
      </Content>
    </Wrapper>
  );
}
