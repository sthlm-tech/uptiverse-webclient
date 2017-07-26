import './Loader.css';
import React from 'react';

class LoadingContainer extends React.Component {
  render() {
    if(this.props.isLoading){
      return (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      );
    }

    return (
      <div className="loadedContent">
        { this.props.children }
      </div>
    );
  }
}

export default LoadingContainer;
