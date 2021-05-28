import { Wrapper, Text } from "./styles";

export const FilterCards = ({ setUrlFilter = '', filterCardsTexts, setClicked }) => {
  
  const updateItemAndSetUrl = (item) => {
    item.clicked = true;
    setUrlFilter(item.url);
  }

  const handleClicked = (id) => {
    const newClicked = filterCardsTexts.map((item) => {
      id === item.id ? updateItemAndSetUrl(item) : (item.clicked = false);
      return item;
    });
    setClicked(newClicked);
  };

  return (
    <Wrapper>
      {filterCardsTexts.map((item) => (
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
