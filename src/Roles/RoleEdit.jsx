import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Papers } from "../_ui/Papers";
import { compose } from "redux";
import { connect } from "react-redux";
import withLocalization from "../_hoc/withLocalization";
import { Permissions } from "../_helpers/Permissions";
import { AntInput, AntTextArea } from "../utils/CreateAntField";
import { RolesValidate } from "./RolesValidate";
import Checkbox from "antd/es/checkbox/Checkbox";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button/Button";
import { Wrapper } from "./RolesStyles";


/*
let permissions = [];

function onChange(checkedValues) {
  let target = checkedValues.target;
  if (target.checked) permissions.push(target.id);
  else permissions.splice(permissions.indexOf(target.id), 1);

}
*/


function RoleEdit({ text, match: { params } }) {

  return (
    <Wrapper >
      <h2 className='mt2 mb3'>
        {params.id ? text("Редактирование роли") : text("Добавление роли")}</h2>
      <Papers className=" p4">
        <Formik
          enableReinitialize
          initialValues={{
            name: "",
            description: "",
            permissions: [],
            accessList: []
          }}
          validationSchema={RolesValidate}
          onSubmit={values => {
            console.log(values);
          }}
        >

          {({ values, errors, handleChange, handleSubmit, submitCount }) => (

            <Form className="form-container" onSubmit={handleSubmit}>

              <div className="clearfix justify-center">
                <div className="col md-col-4 sm-col-12 ">
                  <span> {text("Наименование")}</span>
                </div>
                <div className="col md-col-8 sm-col-12 ">
                  <Field
                    component={AntInput}
                    name="name"
                    type="text"
                    placeholder={text("Наименование")}
                    value={values.name}
                  />
                </div>
              </div>

              <div className="clearfix mt2">
                <div className="col md-col-4 sm-col-12 ">
                  <span> {text("Описание")}</span>
                </div>
                <div className="col md-col-8 sm-col-12 mb1">
                  <Field
                    component={AntTextArea}
                    name="description"
                    type="text"
                    placeholder={text("Описание")}
                    value={values.description}
                  />
                </div>
              </div>

              <h3> {text("Список прав")}</h3>
              <h4 className='errore_msg'>
                <ErrorMessage name="permissions"/>
              </h4>
              <Field
                name="permissions"
                value={values.permissions}
                render={object => {

                  let value = object.field.value;
                  return <>
                    {Object.keys(Permissions).map(key => (
                      <div key={key} className="col md-col-6  mt2 sm-col-12">

                        <Checkbox
                          checked={values.permissions.includes(key)}
                          onChange={event => {
                            let checked = event.target.checked;
                            console.log(checked, value.includes(key));
                            if (checked && !value.includes(key)) {
                              value.push(key);
                            } else if (value.includes(key)) {
                              value.splice(value.indexOf(key), 1);
                            }
                            object.form.setFieldValue(object.field.name, value);
                          }}
                        >{Permissions[key]}</Checkbox>
                      </div>
                    ))}
                  </>;
                }}
              />


              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="submitButton "
              >
                <SaveIcon className='mr1' />
                {text("Сохранить")}
              </Button>
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
)(RoleEdit);
