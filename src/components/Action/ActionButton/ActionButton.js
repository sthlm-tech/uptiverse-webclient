import './ActionButton.css';
import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

class EditButton extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    show: PropTypes.bool,
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
    const className = "actionbutton " + this.props.className;
    const textClassName = this.props.alwaysShow ? "text" : "text hidden";
    return (
      <div className={className} onClick={this.handleClick}>
        <FontAwesome className="icon" name={this.props.icon}/>
        {!this.props.hideText && <p className={textClassName}>{this.props.text}</p>}

      </div>);
  }
}
export default EditButton;
