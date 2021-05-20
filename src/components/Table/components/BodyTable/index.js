import { EditIcon, TrashIcon, LinkAction } from "./styles";

import { ItemBody } from "./ItemBody";

export const BodyTable = ({ dataTable, handleDelete, location }) => {
  return (
    <tbody>
      {dataTable.map((item) => (
        <tr key={item.id}>
          <ItemBody>{item.nome}</ItemBody>
          <ItemBody> {item.username} </ItemBody>
          <ItemBody>{item.descricao}</ItemBody>
          <ItemBody>
            <LinkAction
              to={{
                pathname: "/FormGrupo",
                state: {
                  id_evento: location.state.id,
                  id_grupo: item.id,
                },
              }}
            >
              <EditIcon color="#ADD96C" />
            </LinkAction>
            <LinkAction to="#" onClick={(item) => handleDelete(item)}>
              <TrashIcon color="#F23D4C" />
            </LinkAction>
          </ItemBody>
        </tr>
      ))}
    </tbody>
  );
};
