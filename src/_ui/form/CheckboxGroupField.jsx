import React from "react";
import { ErrorMessage, Field } from "formik";
import Checkbox from "antd/es/checkbox/Checkbox";

function CheckboxGroupField({ name, options }) {
  return (
    <>
      <h4 className="errore_msg">
        <ErrorMessage name={name} />
      </h4>
      <Field
        name={name}
        render={object => {
          let value = object.field.value || [];
          return (
            <>
              {options.map(item => (
                <div key={item.value} className="col md-col-6  mt2 sm-col-12">
                  <Checkbox
                    checked={value.includes(item.value)}
                    onChange={event => {
                      let checked = event.target.checked;
                      if (checked && !value.includes(item.value)) {
                        value.push(item.value);
                      } else if (value.includes(item.value)) {
                        value.splice(value.indexOf(item.value), 1);
                      }
                      object.form.setFieldValue(object.field.name, value);
                    }}
                  >
                    {item.label}
                  </Checkbox>
                </div>
              ))}
            </>
          );
        }}
      />
    </>
  );
}

export default CheckboxGroupField;
