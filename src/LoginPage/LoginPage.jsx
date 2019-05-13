import React from "react";
import { login } from "./LoginDucks";
import { connect } from "react-redux";
import { compose } from "redux";
import withTranslation from "../_hoc/withTranslation";

function LoginPage({ text, login }) {
  return <div>LoginPage</div>;
}

export default compose(
  withTranslation,
  connect(null, { login })
)(LoginPage);
