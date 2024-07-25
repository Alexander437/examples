import React, {useContext} from "react";

import Card from "../UI/Card/Card.jsx";
import styles from "./Home.module.css";
import AuthContext from "../../context/auth-context.jsx";

const Home = () => {
  const ctx = useContext(AuthContext);
  return (
    <Card className={styles.home}>
      <h1>Рады Вас Видеть Снова!</h1>
    </Card>
  );
};

export default Home;
