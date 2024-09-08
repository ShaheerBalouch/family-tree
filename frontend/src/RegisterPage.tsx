import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () =>{
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [termsAndConditions, setTermsAndConditions] = useState<boolean>(false);

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8080/signup", {email, password, firstName, lastName, termsAndConditions});
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input type="text" id="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" id="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <input type="text" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="checkbox" id="termsAndConditions" onChange={(e) => setTermsAndConditions(!termsAndConditions)}/>
            <button type="submit" id="ButtonLogin">Login</button>
          </form>
        </div>
      );
    }
    
    export default RegisterForm;