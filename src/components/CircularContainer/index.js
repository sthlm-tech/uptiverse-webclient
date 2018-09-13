import './CircularContainer.css';
import React from 'react';

class CircularContainer extends React.Component {
  render() {
    let spacing = this.props.spacing || 0;
    let style = this.props.style || {};

    style.width =  this.props.width;
    style.height = this.props.height;
    
    return (
      <div className="circularContainer" style={style}>
        <div className="content" style={{
          width: this.props.width - spacing,
          height: this.props.height - spacing
        }}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default CircularContainer;
