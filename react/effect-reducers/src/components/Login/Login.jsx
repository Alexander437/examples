import React, {useContext, useEffect, useReducer, useState} from "react";

import Card from "../UI/Card/Card.jsx";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button.jsx";
import AuthContext from "../../context/auth-context.jsx";
import Input from "../UI/Input/Input.jsx";

const emailReducer = (prevState, action) => {
  if (action.type === "USER_INPUT") return {
    value: action.value,
    isValid: action.value.includes('@'),
  }

  if  (action.type === "USER_BLUR") return {
    value: prevState.value,
    isValid: prevState.value.includes('@'),
  }

  return {
    value: "",
    isValid: false,
  }
};

const passwordReducer = (prevState, action) => {
  if (action.type === "USER_INPUT") return {
    value: action.value,
    isValid: action.value.trim().length > 7,
  }

  if (action.type === "USER_BLUR") return {
    value: prevState.value,
    isValid: prevState.isValid,
  }

  return {
    value: "",
    isValid: false,
  }
}

const Login = () => {
  // const [inputEmail, setInputEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [inputPassword, setInputPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailState] = useReducer(emailReducer, {value: '', isValid: undefined})
  const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, {value: '', isValid: undefined})

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("validation function");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 1000);

    return () => {
      console.log("Очистка"); // Чтобы проверять mail, пароль не чаще раза в секунду, а не для каждого символа
      clearTimeout(timer);
    }
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmailState({type: "USER_INPUT", value: event.target.value})

    // setFormIsValid(
    //     emailState.isValid && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordState({type: "USER_INPUT", value: event.target.value})

    // setFormIsValid(
    //     passwordState.isValid && emailState.isValid
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmailState({type: 'USER_BLUR'})
  };

  const validatePasswordHandler = () => {
    dispatchPasswordState({type: 'USER_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          type="email"
          label="Email"
          isValid={emailIsValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id="password"
          type="password"
          label="Пароль"
          isValid={passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Вход
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
