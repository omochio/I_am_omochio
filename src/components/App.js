import React from 'react';
import Div100vh from 'react-div-100vh';
import Header from './Header';
import Top from './Top';
import AngleDown from './AngleDown';
import '../css/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0,
    }
    this.pageNumberIncrement = this.pageNumberIncrement.bind(this);
  }

  pageNumberIncrement() {
    this.setState((prevState) => {
      return (
        {pageNumber: prevState.pageNumber + 1}
      );
    })
  }

  handleHeaderVisibility() {
    if (this.state.pageNumber !== 0) {
      return (
        <Header />
      );
    }
  }

  handleMainPage(pageNumber) {
    if (pageNumber === 0) {
      return (
        <Top />
      );
    } else if (pageNumber === 1) {

    } else if (pageNumber === 2) {

    } else if (pageNumber === 3) {

    }
  }

  handleAngleVisibility() {
    if (this.state.pageNumber !== 3) {
      return (
        <AngleDown isAngleClicked = {this.pageNumberIncrement} />
      );
    }
  }

  render() {
    return (
      <Div100vh>
        { this.handleHeaderVisibility() }
        { this.handleMainPage(this.state.pageNumber) }
        { this.handleAngleVisibility() }
      </Div100vh>
    );
  }
}

export default App;
