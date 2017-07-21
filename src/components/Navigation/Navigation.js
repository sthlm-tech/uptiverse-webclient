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
        <span className="link highlight" onClick={(e)=>{ this.toggleMenu(e)}}><FontAwesome name='bars'/></span>
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

          <span className="menuBlockLink" >
            <div className="menuBlock">
              <FontAwesome className="menuIcon" name='sign-out'/>
              <span className="menuText">Logout</span>
            </div>
          </span>
          </div>
      </div>
    );
  }
  //<a href="http://localhost:5000/authentication/logout?url=http://localhost:3000/">Logout</a>

  toggleMenu(){
    this.setState({showMenu: !this.state.showMenu});
  }
/*
  render() {
    return (
      <div className={cx(s.root, this.props.className)} role="navigation">
        { this.renderIfLoggedin(this.context.store.getState().user) }
      </div>
    );
  }

  renderIfLoggedin(user){
    if(!this.isLoggedIn(user)) return null;
    return (
      <div>
        <span className={cx(s.link, s.highlight)} onClick={(e)=>{ this.toggleMenu(e)}}><FontAwesome name='bars'/></span>
        {this.renderOpenMenu()}
      </div> );
  }

  renderOpenMenu(){
    if(!this.state.showMenu){ return null;}
    return (
      <div className={s.menuContainer}>
        <div className={s.menuContent}>
          <Link className={s.menuBlockLink} to="/news">
            <div className={s.menuBlock}>
              <FontAwesome className="menuIcon" name='newspaper-o'/>
              <span className={s.menuText}>News</span>
            </div>
          </Link>

          <Link className={s.menuBlockLink} to="/employees">
            <div className={s.menuBlock}>
              <FontAwesome className={s.menuIcon} name='users'/>
              <span className={s.menuText}>Employees</span>
            </div>
          </Link>

          <Link className={s.menuBlockLink} to="/recruits">
            <div className={s.menuBlock}>
              <FontAwesome className={s.menuIcon} name='user-plus'/>
              <span className={s.menuText}>Recruits</span>
            </div>
          </Link>

          <span className={s.menuBlockLink} onClick={ logout() }>
            <div className={s.menuBlock}>
              <FontAwesome className={s.menuIcon} name='sign-out'/>
              <span className={s.menuText}>Logout</span>
            </div>
          </span>
          </div>
      </div>
    );
  }

  isLoggedIn(user){
    if(user){ return true; }
    return false;
  }

  toggleMenu(){
    this.setState({showMenu: !this.state.showMenu});
  }
*/
}

export default Navigation;
