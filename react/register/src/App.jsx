import CreateUser from "./components/Users/CreateUser.jsx";
import UsersList from "./components/Users/UsersList.jsx";
import {useState} from "react";


function App() {
    const [users, setUsers] = useState([]);

    const addUserHandler = (name, age) => {
        setUsers((prevState) => {
            return [...prevState, {name: name, age: age}];
        })
    }
    return (
        <>
            <CreateUser onAddUser={addUserHandler} />
            <UsersList users={users} />
        </>
    )
}

export default App;