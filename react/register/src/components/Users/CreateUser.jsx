import styles from './CreateUser.module.css';
import Card from "../UI/Card.jsx";
import Button from "../UI/Button.jsx";
import {useState} from "react";
import Modal from "../UI/Modal.jsx";

function CreateUser(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState(null);

    const createUserHandler = (event) => {
        event.preventDefault();
        if (name.trim().length === 0 || age.trim().length === 0) {
            console.log("Name and age is required");
            setError({title: "Required field missing", message: "Please fill out the field"});
            return
        }
        if (+age < 1) {
            console.log("Age < 1");
            setError({title: "Invalid age", message: "Age < 1"});
            return

        }
        props.onAddUser(name, age);
        setName("");
        setAge("");
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }
    const closeModal = () => {
        setError(null);
    }

    return (
        <>
            {error && <Modal title={error.title} message={error.message} onCloseModal={closeModal} />}
            <Card className={styles.input}>
                <form onSubmit={createUserHandler}>
                    <label htmlFor="name">Имя</label>
                    <input id="name" type="text" onChange={handleNameChange} value={name} />
                    <label htmlFor="age">Возраст</label>
                    <input id="age" type="number" onChange={handleAgeChange} value={age} />
                    <Button type="submit">Добавить пользователя</Button>
                </form>
            </Card>
        </>
    )
}

export default CreateUser;