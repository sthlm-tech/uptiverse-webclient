import './List.css';
import React from 'react';
import Date from './../../Date';
import Link from './../../Link';

class List extends React.Component {
  render() {
    if(!this.props.comments){ return null; }
    return (
      <div className="commentBox">
        <h5>Comments</h5>
        <ul className="comments">
          {this.props.comments.map((item, index) => (
            <li key={index}>
              <div>
                <div><Date>{item.date}</Date> -
                  <Link className="link" to={formatRoute(item.user.username)} >
                    {item.user.name.firstname} {item.user.name.lastname}
                  </Link>
                </div>
                <div>{item.text}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function formatRoute(id){
  return "/employee/" + id;
}

export default List;
