import { ItemHead } from "./styles";

export const HeadComponent = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => {
          return <ItemHead key={column.id}> {column.title}</ItemHead>;
        })}
      </tr>
    </thead>
  );
};
