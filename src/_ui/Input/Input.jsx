import React from 'react';
import PropTypes from 'prop-types';
import Field from '../Form/Field';
import TextField from '@material-ui/core/TextField';

function InputLabel({ label }) {
  return (
    <div style={{ transform: 'translateY(-2px)', opacity: 0.5 }}>{label}</div>
  );
}

const Input = ({ withoutForm, name, onChange, label, ...restProps }) => {
  return withoutForm ? (
    <TextField
      name={name}
      onChange={onChange}
      label={<InputLabel label={label} />}
      {...restProps}
    />
  ) : (
    <Field name={name}>
      {({ onChange, ...fieldProps }) => (
        <TextField
          name={name}
          onChange={event => onChange(event.target.value)}
          label={<InputLabel label={label} />}
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
  onChange: PropTypes.func,
};

Input.defaultProps = {
  withoutForm: false,
  label: '',
};

export default Input;
