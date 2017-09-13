import'./CountBadge.css';
import React from 'react';
import FontAwesome from 'react-fontawesome';

class CountBadge extends React.Component {

  render() {
    var commentCount = "";
    if(!this.props.isLoading && this.props.comments ){ commentCount = this.props.comments.length};
    return (
        <div className="badge"><FontAwesome className="connection" name='comments'/>{ commentCount }</div>
    );
  }
}


export default CountBadge;
