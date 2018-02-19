import './welcome.css';
import React, { Component } from 'react';
import Layout from './../../../components/Layout';
import Loader from './../../../components/Loader';
import PageHeader from './../../../components/PageHeader';

class Uptiverse extends Component {
  render() {
    return (
      <Layout>
      <div>
        <PageHeader>Welcome to Uptive!</PageHeader>
        <Loader isLoading={false}>
          <div className="page">
            <p>Welcome text goes here.</p>
          </div>
        </Loader>
      </div>
      </Layout>
    );
  }
}

export default Uptiverse;
