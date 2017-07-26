import './notfound.css';
import React, { Component } from 'react';
import Layout from './../../components/Layout';
import Loader from './../../components/Loader';

class NotFound extends Component {
  render() {
    return (
      <Layout className="notfound">
        <Loader>
          <h1>Page can not be found</h1>
          <p><i>Have you tried looking under the rug?</i></p>
        </Loader>
      </Layout>
    );
  }
}

export default NotFound;
