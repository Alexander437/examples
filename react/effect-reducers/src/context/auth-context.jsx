import React, {useEffect, useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Если оставить без useEffect, может возникнуть бесконечный цикл
        const storedLoginInfo = localStorage.getItem("isLoggedIn");
        console.log(storedLoginInfo);
        if (storedLoginInfo) setIsLoggedIn(true);
        console.log(isLoggedIn);
    }, []);

    const logoutHandler = () => {
        localStorage.setItem("isLoggedIn", false);
        setIsLoggedIn(false);
    }
    const loginHandler = () => {
        localStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true);
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;