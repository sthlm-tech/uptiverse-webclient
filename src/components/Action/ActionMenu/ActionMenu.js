import './ActionMenu.css';
import React from 'react';

class ActionMenu extends React.Component {
  render() {
    return (
      <div className="actionMenu">
        { this.props.children }
      </div>);
  }
}

export default ActionMenu;
