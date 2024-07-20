import Card from "./Card.jsx";
import styles from "./ErrorModal.module.css";
import Button from "./Button.jsx";
import {Fragment} from "react";
import ReactDOM from "react-dom";

// add <div id='backdrop'> in index.html
const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onCloseModal}></div>
}

const Modal = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onCloseModal}>Ok</Button>
            </footer>
        </Card>
    )
}

function ErrorModal(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onCloseModal={props.onCloseModal} />,
                document.getElementById("backdrop")
            )}
            {ReactDOM.createPortal(
                <Modal onCloseModal={props.onCloseModal} title={props.title} message={props.message} />,
                document.getElementById("modal")
            )}
        </Fragment>
    )
}

export default ErrorModal;