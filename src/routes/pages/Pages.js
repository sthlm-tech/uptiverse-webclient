import './pages.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './../../components/Layout';
import Loader from './../../components/Loader';
import PageHeader from './../../components/PageHeader';
import Link from './../../components/Link';
import FontAwesome from 'react-fontawesome';
class Pages extends Component {
  render() {
    let pages = this.props.content.find(function (item) { return item.name === "Pages"; });
    console.log(pages)
    return (
      <Layout>
          <div>
            <PageHeader>All the content!</PageHeader>
            <Loader isLoading={false}>
              <div className="page">This page will contain an over view of all content we have created together.<br/> for now the content is hard coded but the future will bring more. All pages is currently accessable from this page.</div>

              <ul className="pageList">
              {
                pages.submenu.map((item, index) => {
                  if(!item.shouldShow){ return null; }
                  return (
                    <li key={index}>
                      <MenuItem item={item}/>
                    </li>
                  )
                })
              }
              </ul>

            </Loader>
          </div>
      </Layout>
    );
  }
}

const MenuItem = ({item, onClick}) => {
  let iconClass = item.implemented ? "pageListIcon": "pageListIcon comming";
  return(
    <Link to={item.link} onClick={onClick}>
      <div className="pageListBlock">
        <FontAwesome className={iconClass} name={item.icon}/>
        <span className="pageListText">{item.name}</span>
        <FontAwesome className="pageListNavigationIcon" name="arrow-circle-right"/>
      </div>
    </Link>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    content: state.menus.content,
  }
}

const ConnectedPages = connect(
  mapStateToProps,
)(Pages)

export default ConnectedPages;
