//Login.js

import React, { useState } from 'react';
import '../App.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (username === "user" || password === "12345") {
      
      window.location.href='/dashboard'
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="wrapper">
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>SCMS LOGIN</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>

          

        </form>
      </div>
    </div>
  );
}

export default Login;
