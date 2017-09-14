import './Recruits.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from './../../core/history';
import Layout from './../../components/Layout';
import Loader from './../../components/Loader';
import PageHeader from './../../components/PageHeader';
import ListItem from './../../components/Recruit/ListItem';

class Recruits extends Component {
  render() {
    return (
      <Layout>
          <div>
            <PageHeader>Find recruits</PageHeader>
            <div className="searchFieldContainer">
              <input className="searchField" value={this.props.query} placeholder="Search for a recruit" onChange={(e)=>{ this.onChange(e)}}/>
            </div>
            <Loader isLoading={this.props.isLoading}>
              {this.renderSearchResult()}
            </Loader>
          </div>
      </Layout>
    );
  }

  renderSearchResult(){
    var recruits = this.props.recruits;
    if(recruits.length <= 0) {return;}
    return (
      <div className="searchResultContainer">
        <ul className="searchResultList">
          {recruits.map((item, index) => (
            <li key={index}>
              <ListItem recruit={item}/>
            </li>
          ))}
        </ul>
      </div>

    );
  }

  onChange(e){
    const query = encodeURIComponent(e.target.value);
    let url = "/recruits/search/" + query;
    history.push(url);
  }
}

const mapStateToProps = state => {
  return {
    recruits: state.recruits.data,
    isLoading: state.recruits.isLoading
  }
}

const ConnectedRecruits = connect(
  mapStateToProps
)(Recruits)

export default ConnectedRecruits;
