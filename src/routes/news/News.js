import './news.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './../../components/Layout';
import NewsList from './../../components/News/List';
import Loader from './../../components/Loader';

class News extends Component {
  render() {
    return (
      <Layout>

          <div className="news">
            <h1 className="heading">The daily news</h1>
            <Loader isLoading={this.props.isLoading}>
              <NewsList news={this.props.news}/>
            </Loader>
          </div>

      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news.data,
    isLoading: state.news.isLoading
  }
}

const ConnectedNews = connect(
  mapStateToProps
)(News)

export default ConnectedNews;
