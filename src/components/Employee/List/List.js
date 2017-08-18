import './List.css';
import React from 'react';
import Link from './../../Link';
import ListItem from './../ListItem';

class List extends React.Component {
  render() {
    if(!this.props.employees){ return (<div></div>); }

    let listItems = mapEmployees(this.props.employees);

    return (
      <ul className="employee-list">
        { listItems }
      </ul>
    );
  }
}

function mapEmployees(employees){
  return employees.map((item, index) => (
    <li key={index} className="listItem">
      <Link className="link" to={formatRoute(item.username)} >
        <ListItem employee={item}/>
      </Link>
    </li>
  ));
}

function formatRoute(id){
  return "/employees/" + id;
}

export default List;
