import React from 'react';
import { Link } from 'react-router-dom';

const GoogleLogin = (props) => {
  console.log('props', props);
  return <Link to="/auth/google">Login with Google</Link>;
};

export default GoogleLogin;
