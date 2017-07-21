import React from 'react';

class LoadingContainer extends React.Component {
  render() {
    if(this.props.isLoading){ return (<div>LOADING</div>);}
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default LoadingContainer;
