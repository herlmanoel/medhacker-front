import {
  Table,
  Head,
  ItemHead,
  Line,
  WrapperTable,
  WrapperFooter,
  BlockButton,
} from "./style.js";

import ButtonComponent from "../Button";
import Pagination from "../Pagination";
import LoadingComponent from "../Loading";

import { HeaderTable } from "./components/HeaderTable";

export default function TableComponent({
  dataTable,
  handleDelete,
  handleButtonCadastrar,
  loading,
  columns,
  paginationData,
  offset,
  setOffset,
  LIMIT,
  BodyItems,
}) {
  function Content() {
    return (
      <>
        <WrapperTable>
          <Table>
            <HeaderTable columns={columns} />
            <BodyItems />
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
  return <>{loading ? <LoadingComponent /> : <Content />}</>;
}
