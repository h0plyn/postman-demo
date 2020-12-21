import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './components/Home';
import ReactDOM from 'react-dom';
import store from './store';
import './style.css';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return <Home />;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
