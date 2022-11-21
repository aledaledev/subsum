import React, { useEffect, useRef } from "react"; // ?? referenceError = React not defined
import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Title } from "./components/Title";
import { User } from "./types";

interface AppState {
  users: User[];
  newUsersNumber: number;
}

// acepta genericos que definimos
const initialUsers = [
  {
    nick: "koy",
    userMonths: 12,
    avatar: "https://i.pravatar.cc/150?u=koy",
    description: "new in this world",
  },
  {
    nick: "polloman",
    userMonths: 4,
    avatar: "https://i.pravatar.cc/150?u=polloman",
    //description: 'nerd bot'
  },
];

function App() {
  //                                  <Sub []> ó <Array<Sub>>
  const [users, setUsers] = useState<AppState["users"]>([]);
  //const [newUsersNumber, setNewUsersNumber] = useState<AppState['newUsersNumber']>()
  //guardar div sin renderizar de nuevo, null necesario ya que consecuentemente tendra un valor definido
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setUsers(initialUsers);
  }, []);

  const handleNewUser = (newUser: User): void => {
    setUsers(users => [...users, newUser])
  }

  // nunca pasar setState directamente
  return (
    <div className="App" ref={divRef}>
      <Title>Users</Title>
      <List users={users} />
      <Form onNewUser={handleNewUser} />
    </div>
  );
}

export default App;
