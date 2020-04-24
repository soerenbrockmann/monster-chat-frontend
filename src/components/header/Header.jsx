import React from 'react';
import './Header.css';

import UserNavIcon from '../userNavIcon/UserNavIcon';

function Header({ title, iconUrl, switchImage, toogleTitle }) {
  return (
    <header className='App-header'>
      <h1>{title}</h1>
      <button onClick={toogleTitle} className='button'>
        Toogle Title
      </button>
      <UserNavIcon iconUrl={iconUrl} />
      <button onClick={switchImage} className='button'>
        Switch Image
      </button>
    </header>
  );
}

export default Header;
