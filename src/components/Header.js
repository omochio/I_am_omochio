import React from 'react';
import { IconContext } from 'react-icons';
import { HiOutlineMenu } from 'react-icons/hi';
import '../css/header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className='header_top'>Top</h1>
        <IconContext.Provider value={{ className: 'header_menu', size:'4vw' }}>
          <HiOutlineMenu />
        </IconContext.Provider>
      </header>
    );
  }
}

export default Header;