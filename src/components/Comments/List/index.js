import './List.css';
import React from 'react';
import _ from 'underscore';
import Date from './../../Date';
import Link from './../../Link';


class List extends React.Component {
  render() {
    if(!this.props.comments){ return null; }
    let comments = [];
    if(this.props.tag){
      for(let i = 0; i < this.props.comments.length; i++){
        var comment = this.props.comments[i];
        if(comment.tags && _.contains(comment.tags, this.props.tag)){
          comments.push(comment);
        }
      }
    }else{
      comments = this.props.comments;
    }

    return (
      <div className="commentBox">
        <ul className="commentsList">
          {comments.map((item, index) => (
            <li key={index}>
              <div>
                <div><Date>{item.date}</Date> -
                  <Link className="link" to={"/employees/" + item.user.username}>
                    {item.user.name.firstname} {item.user.name.lastname}
                  </Link>
                </div>
                <div className="comment">{item.text}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
