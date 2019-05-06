import React from "react";
import { Input } from "antd";
import { Field } from "formik";
import PropTypes from "prop-types";
import { errorMsg } from "../../utils/errorMsg";

import ValidBox from "./ValidBox";

export default class InputField extends React.Component {
  onChange = (event, object) => {
    const { onChange } = this.props;
    object.field.onChange(event);

    if (typeof onChange === "function") {
      onChange(event.target.value, object);
    }
  };

  render() {
    const { name, label, disabled, type } = this.props;
    return (
      <Field
        name={name}
        render={object => {
          let error = errorMsg(name, object.form);
          return (
            <div className="fx-form">
              <div>{label}</div>
              <div>
                <ValidBox status={error ? "error" : ""} msg={error}>
                  <Input
                    disabled={disabled}
                    name={name}
                    {...object.field}
                    placeholder={label}
                    onChange={event => this.onChange(event, object)}
                    type={type}
                  />
                </ValidBox>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.string,
};
