import React from "react";
import {  Field, Form, Formik } from "formik";
import { UsersValidate } from "./UsersValidate";
import { Papers} from "../_ui/Papers";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { compose } from "redux";
import { connect } from "react-redux";
import withLocalization from "../_hoc/withLocalization";
import Roles from "../_helpers/Roles"
import { AntInput, AntSelect } from "../utils/CreateAntField";
import { Wrapper } from "./UserStyles";



function UserEdit({ text, match: { params } }) {
  return (
    <Wrapper >
      <h2
      >{params.id ? text("Редактирование пользователя") : text("Добавление пользователя")}</h2>
      <Papers className="p4 ">

        <Formik
          enableReinitialize
          initialValues={{
            name: "",
            login: "",
            password: "",
            email: "",
            role: "",
            note: "",
            selectOptions: ["Mark", "Bob", "Anthony"]
          }}
          validationSchema={UsersValidate}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ values, errors, handleChange, handleSubmit ,handleBlur,submitCount}) => (

            <Form  onSubmit={handleSubmit}>

              <div className="clearfix mt2">
                <div className="col md-col-4 sm-col-12 ">
                  <span > {text("ФИО")}</span>
                </div>
                <div className="col md-col-8 sm-col-12 mb1">
                  <Field
                    component={AntInput}
                    name="name"
                    type="text"
                    value={values.name}
                    placeholder={text("ФИО")}
                  />
                </div>
              </div>

              <div className="clearfix mt2">
                <div className="col md-col-4 sm-col-12 ">
                  <span > {text("Email")}</span>
                </div>
                <div className="col md-col-8 sm-col-12 mb1">
                  <Field
                    name="email"
                    type="email"
                    component={AntInput}
                    value={values.email}
                    placeholder={text("Email")}
                    />
                </div>
              </div>

              <div className="clearfix mt2">
                <div className="col md-col-4 sm-col-12 ">
                  <span > {text("Логин")}</span>
                </div>
                <div className="col md-col-8 sm-col-12 mb1">
                  <Field
                    component={AntInput}
                    name="login"
                    type="login"
                    value={values.login}
                    placeholder={text("Логин")}
                  />
                </div>
              </div>

              <div className="clearfix mt2">
                <div className="col md-col-4 sm-col-12 ">
                  <span> {text("Пароль")}</span>
                </div>
                <div className="col md-col-8 sm-col-12 mb1">
                  <Field
                    name="password"
                    type="password"
                    component={AntInput}
                    value={values.password}
                    placeholder={text("Пароль")}
                  />
                </div>
              </div>

              <div className="clearfix mt2">
                <div className="col md-col-4 sm-col-12 ">
                  <span> {text("Роль")}</span>
                </div>
                <div className="col md-col-8 sm-col-12 mb1">
                  <Field
                    style={{width:"90%"}}
                    component={AntSelect}
                    name="role"
                    defaultValue={values.role}
                    selectOptions={Object.keys(Roles)}
                    tokenSeparators={[","]}
                    />
                </div>
              </div>

              <div className="clearfix mt2">
                <div className="col md-col-4 sm-col-12 ">
                  <span> {text("Роль")}</span>
                </div>
                <div className="col md-col-8 sm-col-12 mb1">
                  <Field
                    component={AntInput}
                    name="note"
                    value={values.note}
                    type="text"
                    placeholder={text("Примечание")}
                  />
                </div>
              </div>

              <div className="submit-container mt2">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="submitButton "
                >
                  <SaveIcon className='mr1' />
                  {text("Сохранить")}
                </Button>

              </div>
            </Form>
          )}
        </Formik>
      </Papers>
    </Wrapper>

  );
}

export default compose(
  connect(null, null),
  withLocalization
)(UserEdit);
