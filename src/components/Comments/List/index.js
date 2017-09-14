import './List.css';
import React from 'react';
import Date from './../../Date';
import Link from './../../Link';

class List extends React.Component {
  render() {
    if(!this.props.comments){ return null; }
    return (
      <div className="commentBox">
        <ul className="commentsList">
          {this.props.comments.map((item, index) => (
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
