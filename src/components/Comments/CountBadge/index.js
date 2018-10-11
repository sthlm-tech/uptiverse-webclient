import'./CountBadge.css';
import React from 'react';
import FontAwesome from 'react-fontawesome';
import tagFilter from './../tagFilter';

class CountBadge extends React.Component {

  render() {
    let comments = tagFilter(this.props.comments, this.props.tag);
    var commentCount = "";
    if(!this.props.isLoading && comments){ commentCount = comments.length};
    return (
        <div className="badge"><FontAwesome className="connection" name='comments'/>{ commentCount }</div>
    );
  }
}


export default CountBadge;
