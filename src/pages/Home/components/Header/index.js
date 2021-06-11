import CardHeader from "../CardHeader";
import { Wrapper } from './styles';
import MenuHome from '../MenuHome';
import { FilterCards } from '../../../../components/FilterCards';

// dataEventosIA = Inscrições Abertas
export default function Header({ dataEventosIA = [], setUrlFilter, filterCardsTexts, setClicked }) {
  return (
    <Wrapper>
      <MenuHome nome="Júlia Ferreira" />
      <FilterCards setClicked={setClicked} setUrlFilter={setUrlFilter} filterCardsTexts={filterCardsTexts} />
      <CardHeader data={dataEventosIA} />
    </Wrapper>
  );
}
