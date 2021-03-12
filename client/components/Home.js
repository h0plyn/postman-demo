import React, { useState } from 'react';

const Home = (props) => {
  return (
    <div>
      <div>
        <h1>Postman Demo</h1>
      </div>
      <div>
        <h2>Create Account</h2>
        <form action="/api/users" method="POST">
          <label for="fname">Name:</label>
          <input type="text" id="name" name="name" />
          <br />
          <label for="fname">E-mail:</label>
          <input type="text" id="email" name="email" />
          <br />
          <label for="fname">Password:</label>
          <input type="password" id="password" name="password" />
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};

export default Home;
