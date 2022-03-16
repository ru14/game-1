import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, id:Math.random().toString()}];  //spread operater pull out all the element from the array and as new elwment to this new array
    })
  }
  return (
    <div>
<AddUser onAddUser = {addUserHandler}/>
<UsersList users = {usersList}/>
    </div>
  );
}

export default App;