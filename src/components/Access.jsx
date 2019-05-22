import React from "react";
import { loginModule } from "../pages/LoginPage/LoginDucks";
import { connect } from "react-redux";

/**
 * @return {null}
 */
function Access({ permissions, userPermissions }) {
  if (permissions instanceof Array) {
    if (userPermissions.some(item => permissions.includes(item))) {
      return <>{children}</>;
    }
  }
  return null;
}

const mapStateToProps = state => ({
  userPermissions: state[loginModule].permissions
});

export default connect(mapStateToProps)(Access);
