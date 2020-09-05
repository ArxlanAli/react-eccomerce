import React, { useState } from "react";
import styles from "./authentication.module.css";
import Login from "./login/login";
import Signup from "./signup/signup";

const Authentictaion = () => {
  const [isLogin, setLogin] = useState(true);

  const loginSignUphandler = (value) => {
    setLogin(value);
  };

  return (
    <React.Fragment>
      <div className={styles.navbar}></div>
      {isLogin && <Login loginClick={loginSignUphandler} />}
      {!isLogin && <Signup signUpClick={loginSignUphandler} />}
    </React.Fragment>
  );
};

export default Authentictaion;
