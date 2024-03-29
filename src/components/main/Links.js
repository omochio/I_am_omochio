import React from 'react';
import { IconContext } from 'react-icons';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import '../../css/main/Links.css'


class Links extends React.Component {
  render() {
    return(
      <div className='icon-container'>
        <IconContext.Provider value={{ size: '20rem'}}>
          <a style={{color: 'black'}} href='https://twitter.com/omochio_dev'><FaTwitter /></a>
          <a style={{color: 'black'}} href= 'https://github.com/omochio'><FaGithub /></a>
        </IconContext.Provider>
      </div>
    );
  }
}

export default Links;