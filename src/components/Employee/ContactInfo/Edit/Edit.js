import './../ContactInfo.css';
import React from 'react';
import FontAwesome from 'react-fontawesome';

function Edit({ employee, onChange}) {
  if(!employee){ return null; }
  return (
    <div className="contactContainer">
      <div>
        <h4>Contact information</h4>
        <div> <FontAwesome className="connection" name='envelope'/> <input className="contactInfo" placeholder="Your email adress" value={employee.email} data-property="email" onChange={ (e)=>{ onChange(e) }} /> </div>
        <div> <FontAwesome className="connection" name='phone'/> <input className="contactInfo" placeholder="Your phonenumber" value={employee.phone} data-property="phone" onChange={ (e)=>{ onChange(e) }} /> </div>
        <div> <FontAwesome className="connection" name='github'/> <input className="contactInfo" placeholder="Your github user" value={employee.github} data-property="github" onChange={ (e)=>{ onChange(e) }} /> </div>
        <div> <FontAwesome className="connection" name='bullhorn'/> <input className="contactInfo" placeholder="Your discord user" value={employee.discord} data-property="discord" onChange={ (e)=>{ onChange(e) }} /> </div>
      </div>
    </div>
  );
}

export default Edit;
