import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';




function LoginForm() {

  return (
    <div>
      <form>
        <h1>Login</h1>
        <input type="text" id="email" placeholder="Email"/>
        <input type="text" id="password" placeholder="Password"/>
      </form>
    </div>
  );
}

export default LoginForm;
