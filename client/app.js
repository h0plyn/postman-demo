import React, { Component } from 'react';
import Home from './components/Home';
import ReactDOM from 'react-dom';

class Main extends Component {
  render() {
    return <Home />;
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
