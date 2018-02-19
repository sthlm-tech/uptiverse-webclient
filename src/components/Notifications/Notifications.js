import './Notifications.css';
import 'font-awesome/css/font-awesome.css';
import React from 'react';
import { toggleMenu } from '../../actions/menu';
import FontAwesome from 'react-fontawesome';

class Notifications extends React.Component {
  render() {
    var newNotifications = this.props.notifications || [];
    var hasNewNotifications =  newNotifications.length > 0;
    if(!this.props.isAuthenticated || !this.props.isToggled){ return null;}
    return (
      <div className={this.props.className}>
        <span className={"notificationLink highlight " + (this.props.isOpen ? 'active' : '')} onClick={(e)=>{ this.handleClick(e)}}>
            <FontAwesome name={(this.props.isOpen ? 'times' : 'bell-o')}/>
            { hasNewNotifications &&
              <div className="counterContainer">
                 <span className="counter">{ newNotifications.length < 10 ? newNotifications.length : ".." }</span>
              </div>
            }
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
          Notifications
        </div>
      </div>
    );
  }

  handleClick(){
    this.props.dispatch(toggleMenu(this.props.menuName));
  }
}

export default Notifications;
