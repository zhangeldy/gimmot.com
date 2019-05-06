import React from "react";
import { Form } from "antd";
import PropTypes from "prop-types";
const FormItem = Form.Item;

export default class ValidBox extends React.Component {
  render() {
    const { msg, validIcon, status, children } = this.props;
    return (
      <FormItem help={msg} validateStatus={status} hasFeedback={validIcon}>
        {children}
      </FormItem>
    );
  }
}

ValidBox.propTypes = {
  msg: PropTypes.string,
  validIcon: PropTypes.bool,
  status: PropTypes.oneOf(["error", "info", "warn", "success", ""])
};
