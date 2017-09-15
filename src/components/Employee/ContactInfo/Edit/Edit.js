import './../ContactInfo.css';
import React from 'react';
import FontAwesome from 'react-fontawesome';

function Edit({ employee, onChange}) {
  if(!employee){ return null; }
  let mail = "";
  let phone = "";
  let github = "";
  let discord = "";

  if(employee.connections.mail){ mail = employee.connections.mail.id };
  if(employee.connections.phone){ phone = employee.connections.phone.id };
  if(employee.connections.github){ github = employee.connections.github.id };
  if(employee.connections.discord){ discord = employee.connections.discord.id };
  return (
    <div className="contactContainer">
      <div>
        <h4>Contact information</h4>
        <div> <FontAwesome className="connection" name='envelope'/> <input className="contactInfo" placeholder="Your email adress" value={mail} data-property="mail" onChange={ (e)=>{ onChange(e) }} /> </div>
        <div> <FontAwesome className="connection" name='phone'/> <input className="contactInfo" placeholder="Your phonenumber" value={phone} data-property="phone" onChange={ (e)=>{ onChange(e) }} /> </div>
        <div> <FontAwesome className="connection" name='github'/> <input className="contactInfo" placeholder="Your github user" value={github} data-property="github" onChange={ (e)=>{ onChange(e) }} /> </div>
        <div> <FontAwesome className="connection" name='bullhorn'/> <input className="contactInfo" placeholder="Your discord user" value={discord} data-property="discord" onChange={ (e)=>{ onChange(e) }} /> </div>
      </div>
    </div>
  );
}

export default Edit;
