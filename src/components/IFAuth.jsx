import React from "react";
import { loginModule } from "../LoginPage/LoginDucks";
import { connect } from "react-redux";

/**
 * @return {null}
 */
function IFAuth({ user, permission, permissions, children }) {
  if (permission instanceof Array) {
    if (permissions.some(item => permission.includes(item))) {
      return <>{children}</>;
    }
  }
  if (permission && permissions.includes(permission)) {
    return <>{children}</>;
  }
  if (Boolean(user) && permission === undefined) {
    return <>{children}</>;
  }
  return null;
}

const mapStateToProps = state => ({
  user: state[loginModule].user,
  permissions: state[loginModule].permissions
});

export default connect(mapStateToProps)(IFAuth);
