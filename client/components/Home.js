import React, { useState } from 'react';
import GoogleLogin from './GoogleLogin';

const Home = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Boilermaker</h1>
      <GoogleLogin />
      <div className="count">{count}</div>
      <button className="increment btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Home;
