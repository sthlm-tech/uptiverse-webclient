import './../ContactInfo.css';
import React from 'react';
import FontAwesome from 'react-fontawesome';

function Edit({ recruit, onChange}) {
  if(!recruit){ return null; }

  let mail = "";
  let phone = "";
  let linkedIn = "";
  let facebook = "";
  let github = "";

  if(recruit.connections.mail){ mail = recruit.connections.mail };
  if(recruit.connections.phone){ phone = recruit.connections.phone };
  if(recruit.connections.linkedIn){ linkedIn = recruit.connections.linkedIn };
  if(recruit.connections.facebook){ facebook = recruit.connections.facebook };
  if(recruit.connections.github){ github = recruit.connections.github };

  return (
    <div className="contactContainer">
      <div>
        <div><FontAwesome className="connection" name='envelope'/> <input className="contactInfo" placeholder="Your email adress" value={mail} data-property="mail" onChange={ (e)=>{ onChange(e) }} /> </div>
        <div><FontAwesome className="connection" name='phone'/> <input className="contactInfo" placeholder="Your phonenumber" value={phone} data-property="phone" onChange={ (e)=>{ onChange(e) }} /> </div>
        <div><FontAwesome className="connection" name='facebook-square'/> <input className="contactInfo" placeholder="Your facebook user" value={facebook} data-property="facebook" onChange={ (e)=>{ onChange(e) }} /> </div>
        <div><FontAwesome className="connection" name='linkedin-square'/> <input className="contactInfo" placeholder="Your linkedIn user" value={linkedIn} data-property="linkedIn" onChange={ (e)=>{ onChange(e) }} /> </div>
        <div><FontAwesome className="connection" name='github-square'/> <input className="contactInfo" placeholder="Your github user" value={github} data-property="github" onChange={ (e)=>{ onChange(e) }} /> </div>
      </div>
    </div>
  );
}

export default Edit;
