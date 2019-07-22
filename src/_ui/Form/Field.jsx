import React from "react";
import { Field as FieldFormik } from "formik";
import PropTypes from "prop-types";
import { errorMsg } from "../../utils/errorMsg";

export default class Field extends React.Component {
  onChange = (value, object) => {
    object.form.setFieldValue(this.props.name, value);
  };

  onBlur = object => {
    const { name } = this.props;
    if (!object.form.touched.hasOwnProperty(name)) {
      object.form.setFieldTouched(name, true);
    }
  };

  render() {
    const { name, children } = this.props;

    return (
      <FieldFormik
        name={name}
        render={object => {
          return (
            <>
              {children({
                value: object.field.value,
                error: errorMsg(name, object.form),
                params: object,
                onChange: value => this.onChange(value, object),
                onBlur: () => setTimeout(() => this.onBlur(object), 200)
              })}
            </>
          );
        }}
      />
    );
  }
}

Field.propTypes = {
  name: PropTypes.string.isRequired
};
