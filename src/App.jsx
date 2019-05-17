import React from 'react';
import './App.css';
import Header from './js/header';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}
