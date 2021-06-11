import { Wrapper } from "./styles";

export const ModalComponent = ({ display, setDisplay }) => {
    console.log(display);
  return (
    <Wrapper display={display}>
        <button href="#" onclick={() => setDisplay((prev) => !prev)}>Fechar</button>
        Ola aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <br />
        aaaaaaaaaaaaaaaaaaaa <br />
    </Wrapper>
  );
};
