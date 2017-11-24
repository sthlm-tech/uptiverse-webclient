import './Navigation.css';
import 'font-awesome/css/font-awesome.css';
import React from 'react';
import Link from '../Link';
import FontAwesome from 'react-fontawesome';
import {features} from './features';
import { toggleMenu } from '../../actions/menu';

class Navigation extends React.Component {
  render() {
    if(!this.props.isAuthenticated){ return null;}
    return (
      <div className={this.props.className} role="navigation">
        <span
          className={"link highlight " + (this.props.isOpen ? 'active' : '')}
          onClick={(e)=>{ this.handleClick(e)}}>
          <FontAwesome name={(this.props.isOpen? 'times' : 'bars')}/>
        </span>
        {this.renderOpenMenu()}
      </div>
    );
  }

  renderOpenMenu(){
    if(!this.props.isOpen){ return null;}
    return (
      <div className="menuContainer">
        <div className="menuContent">
          {
            features.map((item, index) => {
              if(!item.shouldShow){ return null; }
              return (
                <div className="menuContentLimiter" key={index}>
                  <MenuItem item={item}/>
                  {item.submenu && <SubMenu items={item.submenu}/> }
                </div>
              )
            })
          }

          <a className="menuBlockLink" href="http://authentication.uptiverse.se/authentication/logout?url=http://beta.uptiverse.se">
            <div className="menuBlock">
              <FontAwesome className="menuIcon" name='sign-out'/>
              <span className="menuText">Logout</span>
            </div>
          </a>
        </div>
      </div>
    );
  }

  handleClick(){
    this.props.dispatch(toggleMenu(this.props.menuName));
  }
}

const MenuItem = ({item}) => {
  let iconClass = item.implemented ? "menuIcon": "menuIcon comming";
  return(
    <Link className="menuBlockLink" to={item.link} >
      <div className="menuBlock">
        <FontAwesome className={iconClass} name={item.icon}/>
        <span className="menuText">{item.name}</span>
      </div>
    </Link>
  );
}

const SubMenu = ({items}) => {
  return (
    <div className="subMenu">
      <FontAwesome className="subMenuIndicator" name="chevron-down"/>
      <ul className="subMenuList">
      {
        items.map((item, index) => {
          if(!item.shouldShow){ return null; }
          return (
            <li key={index}>
              <MenuItem item={item}/>
            </li>
          )
        })
      }
      </ul>
    </div>
  );
}

export default Navigation;
