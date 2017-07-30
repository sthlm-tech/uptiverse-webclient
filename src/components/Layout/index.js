import './Layout.css';
import React from 'react';
import ApplicationHeader from './../ApplicationHeader/ApplicationHeader';

class Layout extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <ApplicationHeader />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
