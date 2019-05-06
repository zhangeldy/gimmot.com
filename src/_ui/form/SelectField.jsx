import React from "react";
import { Field } from "formik";
import PropTypes from "prop-types";
import { errorMsg } from "../../utils/errorMsg";
import styled from "styled-components";
import SelectPicker from "../SelectPicker";
import ValidBox from "./ValidBox";

const Core = styled.div`
  .has-error {
    [class*="MuiSelect-select"] {
      border: 1px solid #f5222d !important;
    }
  }
`;

export default class SelectField extends React.Component {
  onChange = (event, object) => {
    const { onChange } = this.props;
    object.field.onChange(event);

    if (typeof onChange === "function") {
      onChange(event.target.value, object);
    }
  };

  onBlur = object => {
    const { name } = this.props;
    if (!object.form.touched.hasOwnProperty(name)) {
      object.form.setFieldTouched(name, true);
    }
  };

  render() {
    const { name, label, options, multiple, disabled } = this.props;
    return (
      <Core>
        <Field
          name={name}
          render={object => {
            let error = errorMsg(name, object.form);
            let value = object.field.value;
            if (!value && multiple) value = [];
            if (!value) value = "";
            return (
              <div className="fx-form">
                <div>{label}</div>
                <div>
                  <ValidBox status={error ? "error" : ""} msg={error}>
                    <SelectPicker
                      name={name}
                      value={value}
                      multiple={multiple}
                      disabled={disabled}
                      options={options}
                      onBlur={() => setTimeout(() => this.onBlur(object), 200)}
                      onChange={event => this.onChange(event, object)}
                    />
                  </ValidBox>
                </div>
              </div>
            );
          }}
        />
      </Core>
    );
  }
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool
};
