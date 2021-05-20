import CardHeader from "../CardHeader";
import { Wrapper } from './styles';
import MenuHome from '../MenuHome';

export default function Header({ dataEventosIA }) {
  return (
    <Wrapper>
      <MenuHome nome="Júlia Ferreira" />
      <CardHeader data={dataEventosIA} />
    </Wrapper>
  );
}
