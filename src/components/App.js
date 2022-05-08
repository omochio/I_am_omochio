import React from 'react';
import Div100vh from 'react-div-100vh';
import Header from './Header';
import Top from './Top';
import Main from './Main';
import AngleDown from './AngleDown';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0,
    }
    this.pageNumberIncrement = this.pageNumberIncrement.bind(this);
    this.setPageNumberTop = this.setPageNumberTop.bind(this);
  }

  pageNumberIncrement() {
    this.setState((prevState) => {
      return (
        {pageNumber: prevState.pageNumber + 1}
      );
    })
  }

  setPageNumberTop() {
    this.setState(() => {
      return (
        {pageNumber: 0}
      );
    })
  }

  handleHeaderVisibility() {
    if (this.state.pageNumber !== 0) {
      return (
        <Header setPageNumberTop = {this.setPageNumberTop} />
      );
    }
  }

  handleMainPage(pageNumber) {
    if (pageNumber === 0) {
      return (
        <Top />
      );
    } else {
      return (
        <Main pageNumber={pageNumber} />
      );
    }
  }

  handleAngleVisibility() {
    if (this.state.pageNumber !== 2) {
      return (
        <AngleDown isAngleClicked = {this.pageNumberIncrement} />
      );
    }
  }

  render() {
    return (
      <Div100vh className='app'>
        { this.handleHeaderVisibility() }
        { this.handleMainPage(this.state.pageNumber) }
        { this.handleAngleVisibility() }
      </Div100vh>
    );
  }
}

export default App;
