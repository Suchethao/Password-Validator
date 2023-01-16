import React, { Component, useState } from 'react';
import './Validator.css';

  function Validator() {
 
    const [input, setInput] = useState({
      email: '',
      password: '',
      confirmPassword: ''
    });
   
    const [error, setError] = useState({
      email: '',
      password: '',
      confirmPassword: ''
    })
   
    const onInputChange = e => {
   
    }
   
    const validateInput = e => {
   
    }
  
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="passwordConfirm" placeholder="confirm password" />
        <input 
        type="button" 
        value="Submit!"
        //add onClick={this.handleClick}
         />
      </div>
    );
  }


export default Validator;
