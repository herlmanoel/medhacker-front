import { useState } from "react";
import { Wrapper, Text } from "./styles";

export const FilterCards = () => {
  const filterCardsTexts = [
    { id: Math.random(), title: "Todos", clicked: true, url: "" },
    {
      id: Math.random(),
      title: "Com inscrições abertas",
      clicked: false,
      url: "",
    },
    {
      id: Math.random(),
      title: "Com inscrições encerradas",
      clicked: false,
      url: "",
    },
  ];

  const [clicked, setClicked] = useState(filterCardsTexts);

  const handleClicked = (id) => {
    const newClicked = clicked.map((item) => {
      id === item.id ? (item.clicked = true) : (item.clicked = false);
      return item;
    });
    setClicked(newClicked);
  };

  return (
    <Wrapper>
      {clicked.map((item) => (
        <Text
          onClick={() => handleClicked(Number(item.id))}
          clicked={item.clicked}
          key={item.id}
        >
          {item.title}
        </Text>
      ))}
    </Wrapper>
  );
};
