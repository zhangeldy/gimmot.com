import React from "react";
import { Input } from "antd";
import { Field } from "formik";
import PropTypes from "prop-types";
import { errorMsg } from "../../utils/errorMsg";
import ValidBox from "./ValidBox";
const { TextArea } = Input;

export default class TextAreaField extends React.Component {
  onChange = (event, object) => {
    const { onChange } = this.props;
    object.field.onChange(event);

    if (typeof onChange === "function") {
      onChange(event.target.value, object);
    }
  };

  render() {
    const { name, label, disabled, withoutLabel } = this.props;
    return (
      <Field
        name={name}
        render={object => {
          let error = errorMsg(name, object.form);
          let inputComponent = (
            <ValidBox status={error ? "error" : ""} msg={error}>
              <TextArea
                disabled={disabled}
                name={name}
                value={object.field.value}
                placeholder={label}
                autosize={{ minRows: 2, maxRows: 6 }}
                onChange={event => this.onChange(event, object)}
              />
            </ValidBox>
          );

          if (withoutLabel) {
            return inputComponent;
          } else {
            return (
              <div className="fx-form">
                <div>{label}</div>
                <div>{inputComponent}</div>
              </div>
            );
          }
        }}
      />
    );
  }
}

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  withoutLabel: PropTypes.bool
};
