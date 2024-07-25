import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import {Fragment, useContext} from "react";
import AuthContext from "./context/auth-context.jsx";

function App() {
    const ctx = useContext(AuthContext);

    console.log(ctx);

    return (
        <Fragment>
            <MainHeader />
            <main>
                {!ctx.isLoggedIn && <Login />}
                {ctx.isLoggedIn && <Home />}
            </main>
        </Fragment>
    );
}

export default App;