import { ItemBody, LinkAction, EditIcon, TrashIcon, UsersIcon } from "./styles";
export const BodyItems = ({ dataTable, handleDelete }) => {
  return (
    <tbody>
      {dataTable.map((item) => {
        return (
          <tr key={item.id}>
            <ItemBody>{item.titulo}</ItemBody>
            <ItemBody> {item.endereco} </ItemBody>
            <ItemBody>{item?.inicio}</ItemBody>
            <ItemBody>{item?.fim}</ItemBody>
            <ItemBody>
              <LinkAction
                to={{
                  pathname: "/ListagemGrupos",
                  state: {
                    id: Number(item.id),
                  },
                }}
              >
                <UsersIcon color="#3B87A6" />
              </LinkAction>
            </ItemBody>
            <ItemBody>
              <LinkAction
                to={{
                  pathname: "/formevento",
                  state: {
                    id: Number(item.id),
                  },
                }}
              >
                <EditIcon color="#ADD96C" />
              </LinkAction>
              <LinkAction
                to="#"
                onClick={() => handleDelete(Number(item.id))}
              >
                <TrashIcon color="#F23D4C" />
              </LinkAction>
            </ItemBody>
          </tr>
        );
      })}
    </tbody>
  );
};
