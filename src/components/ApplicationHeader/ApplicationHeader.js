import React from 'react';
import './ApplicationHeader.css';
import Link from '../Link/Link';
import NavigationContainer from './../../containers/NavigationContainer';
import logoUrl from './logo.png';
//<Navigation className={s.nav} />
function Header() {
  return (
    <div className="root">
      <div className="container">
        <NavigationContainer className="nav" />
        <Link className="brand" to="/">
          <img src={logoUrl} height="50" alt="Start page" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
