import React from "react";
import styles from "./signup.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignUp = ({ signUpClick }) => {
  const loginHandler = (event) => {
    event.preventDefault();
    signUpClick(true);
  };

  return (
    <React.Fragment>
      <Formik
        validationSchema={signUpSchema}
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.container}>
            <h3>Member SignUp</h3>
            <Field
              name="name"
              type="text"
              className={styles.searchBar}
              placeholder="Name"
            />
            {errors.name && touched.name ? (
              <div>
                <p className="error-message">{errors.name}</p>
              </div>
            ) : null}
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
                value="SignUp"
              />
            </div>
            <div className={styles.signUp}>
              <p>
                Already have an account?
                <span>
                  <button
                    className={styles.signUpButton}
                    onClick={loginHandler}
                  >
                    Login!
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

export default SignUp;
