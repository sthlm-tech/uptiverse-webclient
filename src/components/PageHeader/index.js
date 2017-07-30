import './PageHeader.css';
import React from 'react';

class PageHeader extends React.Component {
  render() {
    let props = this.props;
    return (
      <h1 className="heading" {... props}>{ this.props.children }</h1>
    );
  }
}

export default PageHeader;
