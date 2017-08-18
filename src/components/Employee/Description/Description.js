import './Description.css';
import React from 'react';

class Description extends React.Component {

  render() {
    if(!this.props.employee){ return null; }
    return (
      <div className="descriptionContainer">
        <div>
            <p className="description">
              {this.props.employee.description}
            </p>
          </div>
      </div>
    );
  }
}

export default Description;
