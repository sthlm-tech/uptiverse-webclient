import './important.css';
import React, { Component } from 'react';
import Layout from './../../../components/Layout';
import Loader from './../../../components/Loader';
import PageHeader from './../../../components/PageHeader';
import { connect } from 'react-redux';

class Important extends Component {
  render() {
    return (
      <Layout>
      <div>
        <PageHeader>This is where you find all the goodies.</PageHeader>
        <Loader isLoading={this.props.isLoading}>
          <ul>
            {
              this.props.important.map((item, index) =>
                <li key={index}><div dangerouslySetInnerHTML={{__html: item.text}}></div></li>
              )
            }
          </ul>
        </Loader>
      </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    important: state.pages.important,
    isLoading: state.pages.isLoading
  }
}

const ConnectedImportant = connect(
  mapStateToProps
)(Important)

export default ConnectedImportant;
