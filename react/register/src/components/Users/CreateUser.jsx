import styles from './CreateUser.module.css';
import Card from "../UI/Card.jsx";
import Button from "../UI/Button.jsx";
import {Fragment, useRef, useState} from "react";
import ErrorModal from "../UI/ErrorModal.jsx";

function CreateUser(props) {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState(null);

    const createUserHandler = (event) => {
        event.preventDefault();
        const inputName = nameInputRef.current.value;
        const inputAge = ageInputRef.current.value;
        if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
            console.log("Name and age is required");
            setError({title: "Required field missing", message: "Please fill out the field"});
            return
        }
        if (+inputAge < 1) {
            console.log("Age < 1");
            setError({title: "Invalid age", message: "Age < 1"});
            return

        }
        props.onAddUser(inputName, inputAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const closeModal = () => {
        setError(null);
    }

    return (
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onCloseModal={closeModal} />}
            <Card className={styles.input}>
                <form onSubmit={createUserHandler}>
                    <label htmlFor="name">Имя</label>
                    <input id="name" type="text" ref={nameInputRef} />
                    <label htmlFor="age">Возраст</label>
                    <input id="age" type="number" ref={ageInputRef} />
                    <Button type="submit">Добавить пользователя</Button>
                </form>
            </Card>
        </Fragment>
    )
}

export default CreateUser;