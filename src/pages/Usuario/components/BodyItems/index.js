import {
  ItemBody,
  Name,
  Email,
  LinkAction,
  EditIcon,
  TrashIcon,
} from "./styles";
export const BodyItems = ({ dataTable, handleDelete }) => {
  return (
    <tbody>
      {dataTable.map((item) => {
        return (
          <tr key={item.id}>
            <ItemBody>
              <Name>{item.nome}</Name> <Email>{item.email}</Email>
            </ItemBody>
            <ItemBody> {item.permissao} </ItemBody>
            <ItemBody> Ativo </ItemBody>
            <ItemBody>
              <LinkAction
                to={{
                  pathname: "/formusuario",
                  state: {
                    id: item.id,
                  },
                }}
              >
                <EditIcon color="#ADD96C" />
              </LinkAction>
              <LinkAction to="#" onClick={() => handleDelete(item.id)}>
                <TrashIcon color="#F23D4C" />
              </LinkAction>
            </ItemBody>
          </tr>
        );
      })}
    </tbody>
  );
};
