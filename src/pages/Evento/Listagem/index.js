import { Wrapper, WrapperMain } from "./style";
import { useState, useContext, useEffect, useCallback } from "react";
import MenuVertical from "../../../components/MenuVertical";
import Tabela from "../../../components/Table";
import MenuDashboard from "../components/MenuDashboard";
import axios from "../../../services";
import history from "../../../routes/history";
import { ContexEventos } from "../../../context/Evento";
import { BodyItems } from "../components/BodyItems";

const LIMIT = 10;
export default function Listagem() {
  const [dataTable, setDataTable] = useState([]);
  const { dataEventos } = useContext(ContexEventos);
  const [paginationData, setPaginationData] = useState({
    limit: LIMIT,
    total: 0,
  });
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDataTable(dataEventos);
  }, [dataEventos]);

  const getEventos = useCallback(() => {
    (async function getDataUsuarios() {
      const URL = `eventoslimit/${LIMIT}/${offset}`;
      const data = await axios.get(URL);
      const { events, count } = data.data;
      await setDataTable(events);
      await setPaginationData({ ...paginationData, total: count });
      await setLoading(false);
    })();
  }, [offset, paginationData]);

  useEffect(() => {
    document.title = "Listagem de Eventos";
    getEventos();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const columns = [
    { id: 1, title: "Titulo" },
    { id: 4, title: "Endereço" },
    { id: 5, title: "Início" },
    { id: 6, title: "Fim" },
    { id: 7, title: "Grupos" },
    { id: 8, title: "Ações" },
  ];

  function handleButtonCadastrar(event) {
    event.preventDefault();
    return history.push("/formevento");
  }

  async function handleDelete(id) {
    setLoading(true);
    const URL = `/eventos/${id}`;
    console.log(URL);
    await axios.delete(URL).catch((err) => console.log(err));
    getEventos();
    await setLoading(false);
  }

  return (
    <Wrapper>
      <MenuVertical />
      <WrapperMain>
        <MenuDashboard title="Eventos" />
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
      </WrapperMain>
    </Wrapper>
  );
}
