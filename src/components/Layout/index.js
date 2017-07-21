import './Layout.css';
import React from 'react';
import Header from './../Header/Header';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
