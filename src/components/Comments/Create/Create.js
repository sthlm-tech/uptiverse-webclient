import './Create.css';
import React from 'react';

class Create extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      comment: ""
    };
  }

  handleChange(event){
   this.setState({
     comment: event.target.value
   });
  }

  handleAddComment(event){
    this.props.addComment({
      key: this.props.commentKey,
      comment: {
        user: this.props.user,
        text: this.state.comment
      }
    });

    this.setState({
      comment: ""
    });
  }

  render() {
    if(!this.props.commentKey){ return null; }
    return (
      <div className="createComment">
        <textarea className="commentField" placeholder="Spread the word, write it down..." value={this.state.comment} onChange={(e) => this.handleChange(e)} cols="3" rows="3"></textarea>
        <span className="btn" onClick={(e) => this.handleAddComment(e)} >Add comment</span>
      </div>
    );
  }
}

export default Create;
