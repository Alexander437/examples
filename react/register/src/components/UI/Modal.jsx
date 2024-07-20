import Card from "./Card.jsx";
import styles from "./Modal.module.css";
import Button from "./Button.jsx";

function Modal(props) {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onCloseModal}></div>
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
        </div>
    )
}

export default Modal;