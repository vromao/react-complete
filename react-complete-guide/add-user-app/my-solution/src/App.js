import { useState } from "react";
import "./App.css";
import UsersList from "./users/UsersList";
import UserForm from "./users/UserForm";


function App() {
  const [enteredUsersData, setEnteredUsersData] = useState([]);

  const onAddUserHandler = (userData) => {
    setEnteredUsersData((prevUsers) => {
      return [ userData, ...prevUsers ];
    });
  };

  const hasUsersList = enteredUsersData.length > 0 && <UsersList users={enteredUsersData} />

  return (
    <div className="App">
      <UserForm onAddUser={onAddUserHandler} />
      { hasUsersList }
    </div>
  );
}

export default App;
