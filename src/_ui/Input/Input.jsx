import React from "react";
import { InputField } from "./InputStyle";
import PropsTypes from "prop-types";

function Input(props) {
  return <InputField margin="dense" {...props} />;
}

Input.propsTypes = {
  label: PropsTypes.string,
  value: PropsTypes.any,
  onChange: PropsTypes.func,
};

export default Input;
