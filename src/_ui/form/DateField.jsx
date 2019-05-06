import React from "react";
import { DatePicker } from "antd";
import { Field } from "formik";
import PropTypes from "prop-types";
import moment from "moment";
import ValidBox from "./ValidBox";
import { errorMsg } from "../../utils/errorMsg";


export default class DateField extends React.Component {
  onChange = (value, object) => {
    const { name, onChange } = this.props;
    object.form.setFieldValue(name, value);

    if (typeof onChange === "function") {
      onChange(value, object);
    }
  };

  onBlur = (status, object) => {
    if (!status) {
      const { name } = this.props;
      if (!object.form.touched.hasOwnProperty(name)) {
        object.form.setFieldTouched(name, true);
      }
    }
  };

  render() {
    const { name, label, disabled } = this.props;
    return (
        <Field
          name={name}
          render={object => {
            let error = errorMsg(name, object.form);
            let value = object.field.value;
            if (value) {
              value = moment(value, "DD.MM.YYYY");
            } else {
              value = undefined;
            }

            return (
              <div className="fx-form">
                <div>{label}</div>
                <div>
                  <ValidBox status={error ? "error" : ""} msg={error}>
                    <DatePicker
                      disabled={disabled}
                      format="DD.MM.YYYY"
                      value={value}
                      onOpenChange={status =>
                        setTimeout(() => this.onBlur(status, object), 200)
                      }
                      onChange={(moment, value) => this.onChange(value, object)}
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

DateField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};
