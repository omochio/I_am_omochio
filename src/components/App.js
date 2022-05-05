import React from 'react';
import Div100vh from 'react-div-100vh';
import Header from './Header';
import Top from './Top';
import AngleDown from './AngleDown';
import ScrollDetector from './ScrollDetector';
import '../css/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0,
      scrollAmount: 0
    }
    this.isAngleClicked = this.pageNumberIncrement.bind(this);
  }

  pageNumberIncrement() {
    this.setState((prevState) => {
      return (
        {pageNumber: prevState.pageNumber + 1}
      );
    });
  }

  handleHeaderVisibility() {
    if (this.state.pageNumber !== 0) {
      return (
        <Header />
      );
    }
  }

  handleMainPage() {
    if (this.state.pageNumber === 0) {
      return (
        <Top />
      );
    } else if (this.state.pageNumber === 1) {

    } else if (this.state.pageNumber === 2) {

    } else if (this.state.pageNumber === 3) {

    }
  }

  handleAngleVisibility() {
    if (this.state.pageNumber !== 3) {
      return (
        <AngleDown isAngleClicked = {this.pageNumberIncrement}/>
      );
    }
  }
 
  handleDetectMouceScroll() {
    if (this.state.scrollAmount > 0) {
      this.setState((prevStete) => {
        return (
          {pageNumber: prevStete.pageNumber + 1}
        )
      });
    }
  }

  render() {
    return (
      <Div100vh>
        <ScrollDetector />
        { this.handleHeaderVisibility() }
        { this.handleMainPage() }
        { this.handleAngleVisibility() }
      </Div100vh>
    );
  }
}

export default App;
