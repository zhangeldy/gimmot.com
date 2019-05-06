import React from "react";
import { ErrorMessage, Field, Formik } from "formik";
import { Papers } from "../_ui/Papers";
import { compose } from "redux";
import { connect } from "react-redux";
import withLocalization from "../_hoc/withLocalization";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button/Button";
import { Wrapper } from "./RolesStyles";
import Form from "../_ui/form/Form";
import InputField from "../_ui/form/InputField";
import CheckboxGroupField from "../_ui/form/CheckboxGroupField";
import { RolesValidate } from "./RolesValidate";
import { Permissions } from "../_helpers/Permissions";
import SelectField from "../_ui/form/SelectField";

function RoleEdit({ text, match: { params }, initValues }) {
  return (
    <Wrapper>
      <h2 className="mt2 mb3">
        {params.id ? text("Редактирование роли") : text("Добавление роли")}
      </h2>
      <Papers className=" p4">
        <Form
          onSubmit={values => console.log(values)}
          validate={RolesValidate}
          initialValues={initValues}
        >
          <InputField name="name" label={text("Наименование")} />
          <InputField name="description" label={text("Описание")} />
          <SelectField name="select" label="Select" options={[
            {label: '1', value: '1'},
            {label: '2', value: '2'},
            {label: '3', value: '3'},
            {label: '4', value: '4'},
            {label: '5', value: '5'},
          ]}/>
          <h3> {text("Список прав")}</h3>
          <CheckboxGroupField
            name="permissions"
            options={Object.entries(Permissions).map(item => ({
              label: item[1],
              value: item[0]
            }))}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="submitButton "
          >
            <SaveIcon className="mr1" />
            {text("Сохранить")}
          </Button>
        </Form>
      </Papers>
    </Wrapper>
  );
}

export default compose(
  connect(
    null,
    null
  ),
  withLocalization
)(RoleEdit);
