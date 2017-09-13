import './ListItem.css';
import React from 'react';
import Link from './../../Link';
import CountBadge from './../../../containers/CountBadgeContainer';
import FontAwesome from 'react-fontawesome';

function ListItem({ recruit }) {
  if(!recruit){ return (<div></div>); }

  return (
    <div className="container">
    <Link to={formatRoute(recruit._id)} className="recruitLink">
      <div>
        <div className="name">
          { recruit.firstname + " " + recruit.lastname }
        </div>
        <div className="connections">
          <FontAwesome className={linkedInIconStyle(recruit)} name='linkedin-square'/>
          <FontAwesome className={facebookIconStyle(recruit)} name='facebook-square'/>
          <FontAwesome className={githubIconStyle(recruit)} name='github-square'/>
          <FontAwesome className={phoneIconStyle(recruit)} name='phone-square'/>
          <FontAwesome className={mailIconStyle(recruit)} name='envelope'/>
        </div>
        <div className="comments">
          <CountBadge commentKey={getCommentKey(recruit._id)}/>
        </div>
      </div>
    </Link>
    </div>
  );
}

function getCommentKey(id){
  return "recruit-" + id;
}

function formatRoute(id){
  return "/recruits/" + id;
}

function linkedInIconStyle(item){
  if(item && item.connections && item.connections.linkedIn){ return "activeConnection";}
  return "inactiveConnection";
}

function facebookIconStyle(item){
  if(item && item.connections && item.connections.facebook){ return "activeConnection";}
  return "inactiveConnection";
}

function githubIconStyle(item){
  if(item && item.connections && item.connections.github){ return "activeConnection";}
  return "inactiveConnection";
}

function phoneIconStyle(item){
  if(item && item.connections && item.connections.phone){ return "activeConnection";}
  return "inactiveConnection";
}

function mailIconStyle(item){
  if(item && item.connections && item.connections.mail){ return "activeConnection";}
  return "inactiveConnection";
}

export default ListItem;
