import React from 'react';
import { login } from './LoginDucks';
import { connect } from 'react-redux';

function LoginPage({ text, login }) {
  return <div>LoginPage</div>;
}

export default connect(null, { login })(LoginPage);
