import React from 'react';
import AboutMeText from '../../json/aboutMeText.json'
import '../../css/main/about_me.css'

class AboutMe extends React.Component {
  render() {
    return(
      <div className='aboutme'>
          <p className='aboutme_text'>
            {AboutMeText.Y2022}
          </p>
      </div>
    );
  }
}

export default AboutMe;