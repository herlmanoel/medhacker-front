import { Wrapper, WrapperMain } from "./style";
import { useState, useEffect } from "react";
import MenuVertical from "../../../components/MenuVertical";
import Tabela from "../../../components/Table";
import MenuDashboard from "../components/MenuDashboard";

// import { Context } from "../../../context/AuthProvider";
import Loading from "../../../components/Loading";
import history from "../../../routes/history";
import axios from "../../../services";
import { BodyItems } from '../components/BodyItems';
const LIMIT = 10;
export default function Listagem() {
  const [dataTable, setDataTable] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [paginationData, setPaginationData] = useState({
    limit: LIMIT,
    total: 0,
  });

  const columns = [
    { id: 1, title: "Nome" },
    { id: 2, title: "Permissão" },
    { id: 3, title: "Status" },
    { id: 4, title: "Ações" },
  ];

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

  // useEffect(() => {
  //   setDataTable(dataUsuarios);
  // }, [dataUsuarios]);

  useEffect(() => {
    document.title = "Listagem de Usuários";
    getUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function handleDelete(id) {
    await axios
      .delete(`/usuarios`, {
        data: { id: id },
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    getUsers();
  }
  function handleButtonCadastrar(event) {
    event.preventDefault();
    return history.push("/formusuario");
  }
  return (
    <Wrapper>
      <MenuVertical />
      <WrapperMain>
        {loading ? (
          <Loading />
        ) : (
          <>
            {" "}
            <MenuDashboard title="Usuários" />
            <Tabela
              LIMIT={LIMIT}
              dataTable={dataTable}
              setDataTable={setDataTable}
              offset={offset}
              setOffset={setOffset}
              paginationData={paginationData}
              setPaginationData={setPaginationData}
              columns={columns}
              handleButtonCadastrar={handleButtonCadastrar}
              loading={loading}
              handleDelete={handleDelete}
              BodyItems={BodyItems}
            />
          </>
        )}
      </WrapperMain>
    </Wrapper>
  );
}
