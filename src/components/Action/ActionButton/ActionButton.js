import './ActionButton.css';
import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

class EditButton extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (event.defaultPrevented === true) {
      return;
    }

    event.preventDefault();

  };

  render() {
    return (
      <div className="actionbutton" onClick={this.handleClick}>
        <FontAwesome className="icon" name={this.props.icon}/>
      </div>);
  }
}
export default EditButton;
