import React from 'react';
import '../css/top.css';
import Icon from '../img/cupIcon5.svg';

class Top extends React.Component {
  render() {
    return (
        <div className='top_content'>
          <h1 className='top_iam'>I am</h1>
          <img src={Icon} alt='アイコン' className='top_icon'/>
          <h2 className='top_name'>omochio</h2>
        </div>
    );
  }
}

export default Top;