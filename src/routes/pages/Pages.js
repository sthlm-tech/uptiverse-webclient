import './pages.css';
import React, { Component } from 'react';
import Layout from './../../components/Layout';
import Loader from './../../components/Loader';
import PageHeader from './../../components/PageHeader';

class Pages extends Component {
  render() {
    return (
      <Layout>
          <div>
            <PageHeader>All the content!</PageHeader>
            <Loader isLoading={false}>
              <div className="page">This page will contain an over view of all content we have created together.<br/> for now the content is hard coded but the future will bring more. All pages is currently accessable from the menu.</div>
            </Loader>
          </div>
      </Layout>
    );
  }
}

export default Pages;
