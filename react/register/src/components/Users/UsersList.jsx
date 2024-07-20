import Card from "../UI/Card.jsx";
import styles from "./UsersList.module.css";

function UsersList(props) {
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map(user => <li key={user.name+user.age}>{user.name} - {user.age}</li>)}
            </ul>
        </Card>
    )
}

export default UsersList;