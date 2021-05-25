import { Table, WrapperTable, WrapperFooter, BlockButton } from "./style.js";

import ButtonComponent from "../Button";
import Pagination from "../Pagination";
import LoadingComponent from "../Loading/index.js";
import { HeadComponent } from "./HeaderItems";
export default function TableComponent({
  LIMIT,
  dataTable,
  setDataTable,
  offset,
  setOffset,
  paginationData,
  setPaginationData,
  columns,
  handleButtonCadastrar,
  loading,
  handleDelete,
  BodyItems,
}) {
  function Content() {
    return (
      <>
        <WrapperTable>
          <Table>
            <HeadComponent columns={columns} />
            <BodyItems dataTable={dataTable} handleDelete={handleDelete} />
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
