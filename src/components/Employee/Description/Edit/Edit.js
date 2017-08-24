import './../Description.css';
import React from 'react';

function Edit({ employee, onChange}) {
  if(!employee){ return null; }
  return (
    <div className="descriptionContainer">
      <textarea className="description" placeholder="A short description about yourself" value={employee.description} data-property="description" onChange={ (e)=>{ onChange(e) }}></textarea>
    </div>
  );
}

export default Edit;
