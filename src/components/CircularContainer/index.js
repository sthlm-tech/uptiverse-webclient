import './CircularContainer.css';
import React from 'react';

class CircularContainer extends React.Component {
  render() {
    let spacing = this.props.spacing || 0;
    return (
      <div className="circularContainer" style={{width: this.props.width, height: this.props.height}}>
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
