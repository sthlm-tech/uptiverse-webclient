import './Navigation.css';
import 'font-awesome/css/font-awesome.css';
import React from 'react';
import Link from '../Link';
//import { logout } from '../../actions/logout';
//import { Popover, OverlayTrigger } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showMenu: false,
    };
  }

  render() {
    if(!this.props.isAuthenticated){ return null;}
    return (
      <div className={this.props.className} role="navigation">
        <span className={"link highlight " + (this.state.showMenu ? 'active' : '')} onClick={(e)=>{ this.toggleMenu(e)}}><FontAwesome name={(this.state.showMenu ? 'times' : 'bars')}/></span>
        {this.renderOpenMenu()}
      </div>
    );
  }

  renderOpenMenu(){
    if(!this.state.showMenu){ return null;}
    return (
      <div className="menuContainer">
        <div className="menuContent">
          <Link className="menuBlockLink" to="/news">
            <div className="menuBlock">
              <FontAwesome className="menuIcon" name='newspaper-o'/>
              <span className="menuText">News</span>
            </div>
          </Link>

          <Link className="menuBlockLink" to="/employees">
            <div className="menuBlock">
              <FontAwesome className="menuIcon" name='users'/>
              <span className="menuText">Employees</span>
            </div>
          </Link>

          <Link className="menuBlockLink" to="/recruits">
            <div className="menuBlock">
              <FontAwesome className="menuIcon" name='user-plus'/>
              <span className="menuText">Recruits</span>
            </div>
          </Link>

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
  //<a href="http://localhost:5000/authentication/logout?url=http://localhost:3000/">Logout</a>

  toggleMenu(){
    this.setState({showMenu: !this.state.showMenu});
  }
}

export default Navigation;
