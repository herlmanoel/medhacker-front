import MenuVertical from "../../components/MenuVertical";
import { Wrapper, WrapperMain } from "./style";
import axios from "../../services";
import ModalEvento from "../../components/ModalEvento";
import { ContextProviderModal } from "./context/contextModal";
import { useEffect, useState, useContext } from "react";
import Header from "./components/Header";

import LoadingComponent from "../../components/Loading";
export default function Home() {
  const { eventoId, setEventoId } = useContext(ContextProviderModal);
  const [dataEventosIA, setDataEventosIA] = useState([]);
  const [loading, setLoading] = useState(true);
  const [urlFilter, setUrlFilter] = useState("eventos");

  const filterCardsTexts = [
    { id: Math.random(), title: "Todos", clicked: true, url: "eventos" },
    {
      id: Math.random(),
      title: "Com inscrições abertas",
      clicked: false,
      url: "eventosinscabertas",
    },
    {
      id: Math.random(),
      title: "Com inscrições encerradas",
      clicked: false,
      url: "eventosseminscabertas",
    },
  ];

  const [clicked, setClicked] = useState(filterCardsTexts);

  const getEventos = (url) => {
    axios
      .get(url)
      .then((response) => {
        const { data } = response;
        console.log(response);
        setDataEventosIA(data);
        console.log(dataEventosIA);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const pageName = "Home";
    document.title = pageName;
    setLoading(true);
    getEventos(urlFilter);
    console.log(urlFilter);
  }, [urlFilter]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Wrapper>
      <ModalEvento
        isOpen={Boolean(eventoId)}
        onClickCLose={() => setEventoId(null)}
      />
      <MenuVertical />
      <WrapperMain>
        {loading ? (
          <LoadingComponent />
        ) : (
          <Header setClicked={setClicked} filterCardsTexts={clicked} setUrlFilter={setUrlFilter} dataEventosIA={dataEventosIA} />
        )}
      </WrapperMain>
    </Wrapper>
  );
}
