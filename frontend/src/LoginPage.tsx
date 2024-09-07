import './App.css';
import React, { useState } from 'react';
import axios from 'axios';


const LoginForm = () =>{
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8080/signin", {email, password});
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="text" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" id="ButtonLogin">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
