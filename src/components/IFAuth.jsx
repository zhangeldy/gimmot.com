import React from "react";
import { loginModule } from "../pages/LoginPage/LoginDucks";
import { connect } from "react-redux";

/**
 * @return {null}
 */
function IFAuth({ user, permission, permissions, children }) {
  return Boolean(user) ? <>{children}</> : null;
}

const mapStateToProps = state => ({
  user: state[loginModule].user,
  permissions: state[loginModule].permissions
});

export default connect(mapStateToProps)(IFAuth);
