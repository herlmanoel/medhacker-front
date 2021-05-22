import Table from "../../components/Table";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../services";
import { BodyItems } from "./BodyItems";
const LIMIT = 10;
export default function Teste() {
  const [dataTable, setDataTable] = useState([]);
  const [paginationData, setPaginationData] = useState({
    limit: LIMIT,
    total: 0,
  });
  const [offset, setOffset] = useState(0);
  const history = useHistory();
  // const { dataUsuarios } = useContext(Contextusuarios);

  // eslint-disable-next-line
  const dataUsuarios = [
    { nome: "João", permissao: "admin", status: "ativo" },
    { nome: "João", permissao: "admin", status: "ativo" },
  ];

  const columns = [
    { id: 1, title: "Nome" },
    { id: 2, title: "Permissão" },
    { id: 3, title: "Status" },
    { id: 4, title: "Ações" },
  ];
  const [loading, setLoading] = useState(true);

  const getUsers = () => {
    (async () => {
      const URL = `usuarioslimit/${LIMIT}/${offset}`;
      const data = await axios.get(URL);
      const { users, count } = data.data;
      await setDataTable(users);
      setPaginationData({ ...paginationData, total: count });
      setLoading(false);
    })();
  };

  useEffect(() => {
    setDataTable(dataUsuarios);
  }, [dataUsuarios]);

  useEffect(() => {
    document.title = "Listagem de Usuários";
    getUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleButtonCadastrar(event) {
    event.preventDefault();
    return history.push("/formusuario");
  }

  async function handleDelete(id) {
    await axios
      .delete(`/usuarios`, {
        data: { id: id },
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    getUsers();
  }
  //   { dataTable, handleDelete, handleButtonCadastrar, loading, columns  }
  return (
    <Table
      dataTable={dataTable}
      handleDelete={handleDelete}
      handleButtonCadastrar={handleButtonCadastrar}
      loading={loading}
      columns={columns}
      paginationData={paginationData}
      offset={offset}
      setOffset={setOffset}
      LIMIT={LIMIT}
      BodyItems={
        <BodyItems dataTable={dataTable} handleDelete={handleDelete} />
      }
    />
  );
}
