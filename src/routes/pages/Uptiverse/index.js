import './uptiverse.css';
import React, { Component } from 'react';
import Layout from './../../../components/Layout';
import Loader from './../../../components/Loader';
import PageHeader from './../../../components/PageHeader';

class Uptiverse extends Component {
  render() {
    return (
      <Layout>
      <div>
        <PageHeader>What is Uptiverse?</PageHeader>
        <Loader isLoading={false}>
          <div className="page">
            <p>Uptiverse it where we gather information and functions that is worthwile building system support for at Uptive.</p>
            <p>
              The system is built by employees at Uptive and the ones interested in adding/fixing/modifying any functionality is encouraged to do so.
              It´s never expected of any employee to contribute to the development but free to do so by own will.
            </p>
            <p>
              The intension with Uptiverse is to be used as both a place to experiment with new ideas/technologies and for us to develop functions that will make our daily work easier.
            </p>
          </div>
        </Loader>
      </div>
      </Layout>
    );
  }
}

export default Uptiverse;
