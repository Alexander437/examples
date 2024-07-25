import React, {useContext} from "react";

import Navigation from "./Navigation.jsx";
import styles from "./MainHeader.module.css";
import AuthContext from "../../context/auth-context.jsx";

const MainHeader = () => {
  const ctx = useContext(AuthContext);

  return (
    <header className={styles["main-header"]}>
      <h1>React Advanced</h1>
      <Navigation
        onLogout={ctx.onLogout}
      />
    </header>
  );
};

export default MainHeader;
