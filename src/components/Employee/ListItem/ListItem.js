import './ListItem.css';
import React from 'react';
import CircularContainer from "./../../CircularContainer";
function ListItem({ employee }) {
  const diameter = 57;
  const spacing = 5;
  if(!employee){ return (<div></div>); }

  return (
    <div className="list-item">
      <CircularContainer width={diameter} height={diameter} spacing={spacing}>
        <img src={employee.picture} alt="" style={{width: diameter-spacing, height: diameter-spacing}}/>
      </CircularContainer>
      <div className="userName">
        {employee.firstname} {employee.lastname}
      </div>
    </div>
  );
}

export default ListItem;
