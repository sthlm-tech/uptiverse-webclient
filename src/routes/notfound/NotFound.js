import './notfound.css';
import React, { Component } from 'react';
import Layout from './../../components/Layout';
import Loader from './../../components/Loader';
import PageHeader from './../../components/PageHeader';

class NotFound extends Component {
  render() {
    return (
      <Layout className="notfound">
        <Loader>
          <PageHeader>Page can not be found</PageHeader>
          <p><i>Have you tried looking under the rug?</i></p>
        </Loader>
      </Layout>
    );
  }
}

export default NotFound;
