import './../PersonalDevelopment.css';
import React from 'react';

function Edit({ employee, onChange}) {
  if(!employee){ return null; }
  return (
    <div className="personalDevelopmentContainer">
      <div>
        <h4 className="header"> Personal development</h4>
        <textarea className="text" placeholder="What would make you even better than you already are?" value={employee.developmentGoals} data-property="developmentGoals" onChange={ (e)=>{ onChange(e) }}></textarea>
      </div>
    </div>
  );
}

export default Edit;
