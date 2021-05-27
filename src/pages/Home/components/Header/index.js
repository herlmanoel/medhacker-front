import CardHeader from "../CardHeader";
import { Wrapper } from './styles';
import MenuHome from '../MenuHome';
import { FilterCards } from '../../../../components/FilterCards';

export default function Header({ dataEventosIA }) {
  return (
    <Wrapper>
      <MenuHome nome="Júlia Ferreira" />
      <FilterCards />
      <CardHeader data={dataEventosIA} />
    </Wrapper>
  );
}
