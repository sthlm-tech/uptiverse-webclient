import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountBadge from './../components/Comments/CountBadge';
import { getComments } from './../actions/comments';

class CountBadgeContainer extends Component {

  componentDidMount(){
    this.props.dispatch(getComments(this.props.commentKey));
  }

  render() {
    return (
      <CountBadge isLoading={this.props.isLoading} comments={this.props.comments}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const data = state.comments[ownProps.commentKey] || {};
  return {
    comments: data.comments,
    isLoading: data.isLoading
  }
}

const ConnectedCountBadgeContainer = connect(
  mapStateToProps
)(CountBadgeContainer)

export default ConnectedCountBadgeContainer;
