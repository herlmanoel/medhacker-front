import styled from "styled-components";
import { Link } from "react-router-dom";
import { Edit, Trash, Users } from "react-feather";

export const Line = styled.tr``;

export const Body = styled.tbody``;

export const ItemBody = styled.td`
  padding: 1rem;
  font-weight: 300;
  border-top: 1px solid var(--color-line-in-white);
  max-width: 25rem;
`;

export const Name = styled.strong`
  display: block;
  line-height: 1rem;
`;

export const EditIcon = styled(Edit)``;
export const TrashIcon = styled(Trash)``;
export const UsersIcon = styled(Users)``;
export const LinkAction = styled(Link)`
  /* text-decoration: none; */
  cursor: pointer;
  /* padding: 0.5rem; */
  &:hover {
    opacity: 0.6;
  }
`;
