import './CircularContainer.css';
import React from 'react';

class CircularContainer extends React.Component {
  render() {
    let spacing = this.props.spacing || 0;
    let style = { ...this.props.style,
                  width: this.props.width,
                  height: this.props.height
                };
    let className = "circularContainer " + this.props.className;
    return (
      <div className={className} style={style} onClick={this.props.onClick}>
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
