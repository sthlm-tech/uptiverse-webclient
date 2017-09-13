import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './../components/Comments/List';
import { getComments } from './../actions/comments';

class CommentsListContainer extends Component {

  componentDidMount(){
    this.props.dispatch(getComments(this.props.commentKey));
  }

  render() {
    return (
      <List isLoading={this.props.isLoading} comments={this.props.comments}/>
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

const ConnectedCommentsListContainer = connect(
  mapStateToProps
)(CommentsListContainer)

export default ConnectedCommentsListContainer;
