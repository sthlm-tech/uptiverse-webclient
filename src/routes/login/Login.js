import React, { Component } from 'react';
import Layout from './../../components/Layout';

class Login extends Component {
  render() {
    return (
      <Layout>
        <a href="http://localhost:5000/authentication/login/google?url=http://localhost:3000">login</a>
      </Layout>
    );
  }
}

export default Login;
