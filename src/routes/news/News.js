import './news.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './../../components/Layout';
import NewsList from './../../components/News/List';
import Loader from './../../components/Loader';
import PageHeader from './../../components/PageHeader';
import ActionMenu from './../../components/Action/ActionMenu';
import ActionButton from './../../components/Action/ActionButton';
import history from '../../core/history';

class News extends Component {
  render() {
    return (
      <Layout>
          <div>
            <PageHeader>The daily news</PageHeader>
            <Loader isLoading={this.props.isLoading}>
              <NewsList news={this.props.news}/>
            </Loader>
          </div>
          <ActionMenu>
            <ActionButton text="test" icon="plus" onClick={handleCreateContentClicked.bind(this)}/>
          </ActionMenu>
      </Layout>
    );
  }
}

function handleCreateContentClicked(){
  history.push("/news/create");
};

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
