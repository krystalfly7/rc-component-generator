import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.less';
import RcTestComp from '../src/index.js';

export default class App extends Component {

  render() {
    return (
      <div>
        <RcTestComp />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
