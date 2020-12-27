import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class GoogleLogin extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return <Redirect to="/auth/google" />;
  }

  render() {
    return <button onClick={this.handleClick}>Login with Google</button>;
  }
}

export default GoogleLogin;
