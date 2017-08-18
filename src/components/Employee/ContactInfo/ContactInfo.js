import './ContactInfo.css';
import React from 'react';

import FontAwesome from 'react-fontawesome';

class ContactInfo extends React.Component {
  render() {
    if(!this.props.employee || !this.props.employee.email){ return null; }

    return (
      <div className="contactContainer">
        <div>
          <h4> Contact information</h4>
          {this.renderEmail()}
          {this.renderPhone()}
          {this.renderGithub()}
          {this.renderDiscord()}
        </div>
      </div>
    );
  }

  renderEmail(){
    if(!this.props.employee || !this.props.employee.email){return null;}
    return (<div className="contactInfo">
      <FontAwesome className="connection" name='envelope'/>
      <br/>
      {this.props.employee.email}
    </div>);
  }

  renderPhone(){
    if(!this.props.employee || !this.props.employee.phone){return null;}
    return (<div className="contactInfo">
      <FontAwesome className="connection" name='phone'/>
      <br/>
      {this.props.employee.phone}
    </div>);
  }

  renderGithub(){
    if(!this.props.employee || !this.props.employee.github){return null;}
    return (<div className="contactInfo">
      <FontAwesome className="connection" name='github'/>
      <br/>
      {this.props.employee.github}
    </div>);
  }

  renderDiscord(){
    if(!this.props.employee || !this.props.employee.discord){return null;}
    return (<div className="contactInfo">
      <FontAwesome className="connection" name='bullhorn'/>
      <br/>
      {this.props.employee.phone}
    </div>);
  }
}

export default ContactInfo;
