import React, { Component } from 'react';
import Layout from './../../components/Layout';

class Login extends Component {
  render() {
    return (
      <Layout>
        <div className="login">
          <h1 className="heading">Welcome to Uptiverse</h1>
          <div>
            <p className="description">This is where the magic happens and in order to be a part of the magic you need to login. <br/> Use your Uptive account to sign in.</p>
            <div className="buttonContainer">
              <a className="loginButton" href="http://authentication.uptiverse.se/authentication/login/google?url=http://beta.uptiverse.se">Sign in</a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Login;
