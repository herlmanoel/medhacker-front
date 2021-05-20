import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { Table, WrapperTable, WrapperFooter, BlockButton } from "./style.js";

import ButtonComponent from "../Button";
import axios from "../../services";
import Pagination from "../Pagination/index.js";
import { BodyTable } from "./components/BodyTable";
import { HeaderTable } from "./components/HeaderTable";
import { Contextusuarios } from '../../pages/Usuario/context';

const LIMIT = 10;

export default function TableComponent() {
  const [dataTable, setDataTable] = useState([]);
  const [paginationData, setPaginationData] = useState({
    limit: LIMIT,
    total: 0,
  });
  const [offset, setOffset] = useState(0);
  const history = useHistory();
  const { dataUsuarios } = useContext(Contextusuarios);
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

  return (
    <>
      <WrapperTable>
        <Table>
          <HeaderTable columns={columns} />
          <BodyTable
            dataTable={dataTable}
            handleDelete={handleDelete}
          />
        </Table>
      </WrapperTable>
      <WrapperFooter>
        {paginationData.limit && (
          <Pagination
            limit={LIMIT}
            total={paginationData.total}
            offset={offset}
            setOffset={setOffset}
          />
        )}
        <BlockButton>
          <ButtonComponent
            onClick={(event) => handleButtonCadastrar(event)}
            text="Cadastrar"
          />
        </BlockButton>
      </WrapperFooter>
    </>
  );
}
