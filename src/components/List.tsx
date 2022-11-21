import React from "react";
import { User } from "../types";

interface Props {
  users: Array<User>;
}

// para que soporte todas las propiedades de los componentes (un children) -> :React.FunctionComponent<Props>
export const List = ({ users }: Props) => {

  //devolvera un array elementos jsx
  const renderList = (): JSX.Element[] => {
    return users.map((user) => {
      return (
        <li key={user.nick}>
          <img src={user.avatar} alt={`Avatar for ${user.nick}`} />
          <h4>{user.nick} <small>({user.userMonths})</small></h4>
          <p>{user.description?.substring(0, 100)}</p>
        </li>
      );
    });
  };

  return <ul>
    {renderList()}
  </ul>;
};
