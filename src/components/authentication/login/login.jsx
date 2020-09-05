import React from "react";
import styles from "./login.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import history from "../../../core/browserHistory";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = ({ loginClick }) => {
  const signUpHandler = (event) => {
    event.preventDefault();
    loginClick(false);
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          history.push("/home");
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.container}>
            <h3>Member Login</h3>
            <Field
              name="email"
              type="text"
              className={styles.searchBar}
              placeholder="Email"
            />
            {errors.email && touched.email ? (
              <div>
                <p className="error-message">{errors.email}</p>
              </div>
            ) : null}
            <Field
              name="password"
              type="password"
              className={styles.searchBar}
              placeholder="Password"
            />
            {errors.password && touched.password ? (
              <div>
                <p className="error-message">{errors.password}</p>
              </div>
            ) : null}
            <div className="wrapper">
              <input
                type="submit"
                className={styles.loginButton}
                value="Login"
              />
            </div>
            <div className={styles.signUp}>
              <p>
                Dont have an account?
                <span>
                  <button
                    className={styles.signUpButton}
                    onClick={signUpHandler}
                  >
                    SignUp!
                  </button>
                </span>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default Login;
