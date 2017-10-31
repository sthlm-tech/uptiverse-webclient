import './ContactInfo.css';
import React from 'react';
import FontAwesome from 'react-fontawesome';
import { formatLinkedInUrl, formatGithubUrl, formatFacebookUrl, formatEmailUrl } from "../../../helpers/connectionFormatHelper";

class ContactInfo extends React.Component {
  render() {
    if(!this.props.recruit || !this.props.recruit.connections){ return null; }

    return (
      <div className="contactInfoContainer">
        <div>
          <h4> Contact information</h4>
          {this.renderEmail()}
          {this.renderPhone()}
          {this.renderLinkedIn()}
          {this.renderFacebook()}
          {this.renderGithub()}
        </div>
      </div>
    );
  }

  renderEmail(){
    if(!this.props.recruit || !this.props.recruit.connections.mail){return null;}
    return (
    <div className="connectionContainer">
      <FontAwesome className="connection" name='envelope'/>
      <a className="link" href={formatEmailUrl(this.props.recruit.connections.mail)} target="BLANK">
        {this.props.recruit.connections.mail}
      </a>
    </div>);
  }

  renderPhone(){
    if(!this.props.recruit || !this.props.recruit.connections.phone){return null;}
    return (<div className="connectionContainer">
      <FontAwesome className="connection" name='phone-square'/>
      <span className="link">{this.props.recruit.connections.phone}</span>
    </div>);
  }

  renderGithub(){
    if(!this.props.recruit || !this.props.recruit.connections.github){return null;}
    const url = formatGithubUrl(this.props.recruit.connections.github);
    return (<div className="connectionContainer">
      <FontAwesome className="connection" name='github-square'/>
      <a className="link" href={url} target="BLANK"> {url} </a>
    </div>);
  }

  renderLinkedIn(){
    if(!this.props.recruit || !this.props.recruit.connections.linkedIn){return null;}
    const url = formatLinkedInUrl(this.props.recruit.connections.linkedIn);
    return (<div className="connectionContainer">
      <FontAwesome className="connection" name='linkedin-square'/>
      <a className="link" href={url} target="BLANK"> {url} </a>
    </div>);
  }

  renderFacebook(){
    if(!this.props.recruit || !this.props.recruit.connections.facebook){return null;}
    const url = formatFacebookUrl(this.props.recruit.connections.facebook);
    return (<div className="connectionContainer">
      <FontAwesome className="connection" name='facebook-square'/>
      <a className="link" href={url} target="BLANK"> {url} </a>
    </div>);
  }
}
/**
if(connections.linkedIn){connectionList.push({icon:"linkedin-square", text:formatLinkedInUrl(connections.linkedIn), link: formatLinkedInUrl(connections.linkedIn)})};
if(connections.facebook){connectionList.push({icon:"facebook-square", text: formatFacebookUrl(connections.facebook), link: formatFacebookUrl(connections.facebook)})};
if(connections.github){connectionList.push({icon:"github-square", text: formatGithubUrl(connections.github), link: formatGithubUrl(connections.github)})};
if(connections.phone){connectionList.push({icon:"phone-square", text: connections.phone, link: connections.phone})};
if(connections.mail){connectionList.push({icon:"envelope", text: connections.mail, link: formatEmailUrl(connections.mail)})};

**/

export default ContactInfo;
