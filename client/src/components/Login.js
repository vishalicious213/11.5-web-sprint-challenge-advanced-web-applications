import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className='login-page'>
      <h1>Welcome to the Bubble App!</h1>
      <form className='login-form'>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={username}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
        />
        <button>Login</button>
      </form>
    </section>
  );
};

export default Login;
