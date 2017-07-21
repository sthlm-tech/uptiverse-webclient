import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './../components/Navigation';

class NavigationContainer extends Component {
  render() {
    return (
      <Navigation className={this.props.className} isAuthenticated={this.props.isAuthenticated}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

const ConnectedNavigationContainer = connect(
  mapStateToProps
)(NavigationContainer)

export default ConnectedNavigationContainer;
