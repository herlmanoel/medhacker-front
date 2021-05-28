import CardHeader from "../CardHeader";
import { Wrapper } from './styles';
import MenuHome from '../MenuHome';
import { FilterCards } from '../../../../components/FilterCards';

export default function Header({ dataEventosIA = [], setUrlFilter, filterCardsTexts, setClicked }) {
  return (
    <Wrapper>
      <MenuHome nome="Júlia Ferreira" />
      <FilterCards setClicked={setClicked} setUrlFilter={setUrlFilter} filterCardsTexts={filterCardsTexts} />
      <CardHeader data={dataEventosIA} />
    </Wrapper>
  );
}
