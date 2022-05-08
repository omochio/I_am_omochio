import React from 'react';
import { BiArrowToTop } from 'react-icons/bi'
import { IconContext } from 'react-icons';
import '../css/header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <IconContext.Provider value={{ size: '8rem' }}>
          <BiArrowToTop onClick={() => {this.props.setPageNumberTop()}} />
        </IconContext.Provider>
      </header>
    );
  }
}

export default Header;