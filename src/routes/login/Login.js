import React, { Component } from 'react';
import Layout from './../../components/Layout';

class Login extends Component {
  render() {
    return (
      <Layout>
        <a href="http://authentication.uptiverse.se/authentication/login/google?url=http://beta.uptiverse.se">login</a>
      </Layout>
    );
  }
}

export default Login;
