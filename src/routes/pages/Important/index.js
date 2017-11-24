import './important.css';
import React, { Component } from 'react';
import Layout from './../../../components/Layout';
import Loader from './../../../components/Loader';
import PageHeader from './../../../components/PageHeader';

class Important extends Component {
  render() {
    return (
      <Layout>
      <div>
        <PageHeader>This is where you find all the goodies.</PageHeader>
        <Loader isLoading={false}>
          <ul>
            <li>Accountinformation: 123456789</li>
            <li>Accountinformation: 123456789</li>
            <li>Accountinformation: 123456789</li>
          </ul>
        </Loader>
      </div>
      </Layout>
    );
  }
}

export default Important;
