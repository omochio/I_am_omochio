import React from 'react';
import AboutMe from './main/AboutMe'
import Links from './main/Links'
import '../css/main.css'

const SECTION_TITLE = ['About me', 'Links'];

class Main extends React.Component {
  handleMain(pageNumber) {
    if (pageNumber === 1) {
      return (
        <AboutMe />
      );
    } else if (pageNumber === 2) {
      return (
        <Links />
      );
    }
  }

  render() {
    return (
      <div className='main'>
        <h1 className='main_title'>{SECTION_TITLE[this.props.pageNumber - 1]}</h1>
        <div className='main_container'>
          {this.handleMain(this.props.pageNumber)}
        </div>
      </div>
    );
  }
}

export default Main;
