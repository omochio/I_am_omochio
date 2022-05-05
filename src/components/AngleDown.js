import React from 'react';
import '../css/angle_down.css';
import AngleDownImg from '../img/angleDown.svg';

class AngleDown extends React.Component {
  render() {
    return (
      <img src={AngleDownImg} alt='アングルアイコン' className='angle_img' onClick={() => {this.props.isAngleClicked()}}/>
    );
  }
}

export default AngleDown;