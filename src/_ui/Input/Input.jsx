import React from "react";
import PropTypes from "prop-types";
import Field from "../Form/Field";
import TextField from "@material-ui/core/TextField";

const Input = ({ withoutForm, name, onChange, ...restProps }) => {
  return withoutForm ? (
    <TextField name={name} onChange={onChange} {...restProps} />
  ) : (
    <Field name={name}>
      {({ onChange, ...fieldProps }) => (
        <TextField
          name={name}
          onChange={event => onChange(event.target.value)}
          {...restProps}
          {...fieldProps}
          error={Boolean(fieldProps.error)}
        />
      )}
    </Field>
  );
};

Input.propsTypes = {
  withoutForm: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func
};

Input.defaultProps = {
  withoutForm: false,
  label: ""
};

export default Input;
