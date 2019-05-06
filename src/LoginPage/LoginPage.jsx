import React from "react";
import { Wrapper } from "./LoginStyles";
import { loginValidate } from "./LoginValidate";
import { ErrorMessage, Form, Formik } from "formik";
import Color from "../_helpers/Color";
import Button from "@material-ui/core/Button";
import { login } from "./LoginDucks";
import { connect } from "react-redux";
import { compose } from "redux";
import { Icon, Input } from "antd";
import withLocalization from "../_hoc/withLocalization";

function LoginPage({ text, login }) {
  return (
    <Wrapper>
      <div className="col-4 flex items-center mx-auto vertical-center">
        <div className="mx-auto">
          <h4 className="">{text("Авторизация")}</h4>
          <Formik
            enableReinitialize
            initialValues={{
              login: "",
              password: ""
            }}
            validationSchema={loginValidate}
            onSubmit={values => {
              login(values.login, values.password);
            }}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Input
                  type="login"
                  name="login"
                  placeholder={text("Логин")}
                  value={values.login}
                  onChange={handleChange}
                  prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }}/>}

                />
                <h5>
                  {console.log(errors)}
                  <ErrorMessage name="login"/>
                </h5>
                <Input
                  style={{ marginTop: "15px" }}
                  type="password"
                  name="password"
                  placeholder={text("Пароль")}
                  value={values.password}
                  onChange={handleChange}
                  prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }}/>}
                />
                <h5>
                  <ErrorMessage name="password"/>
                </h5>
                <Button
                  type="submit"
                  style={{
                    marginTop: "15px",
                    backgroundColor: Color.primary,
                    width: "100%",
                    color: "white"
                  }}
                >
                  {text("Авторизаватся")}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Wrapper>
  );
}

export default compose(
  connect(null, { login }),
  withLocalization
)(LoginPage);
