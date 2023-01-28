import React, { Component, useState } from 'react';
import './Validator.css';

class PasswordValidator extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      password:props.password,
      isValid:true,
      errorMessage:""
    };
  }
  validatePassword (password) {
    if (password.length<8) {
      this.setState({
        isValid:false,
        errorMessage: "Password must be at least 8 characters long."
      });
    }
  } else if (!/|d/.test(password)) {
    this.setState({
      isValid:false,
      errorMessage:"Password must contain at lease one Number."
    });
  } else {
    this.setState({
      isValid:true,
      errorMessage:""
    });
}
}
render () {
  return(
    <div>
      <input type="password" onChange={e=>
      this.validatePassword(e.target.value)}/>
      {this.state.isValid&&<div{this.state.errorMessage}
      </div>
}
  );
function Validator() {

  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }

  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  }

  return (
    <div className="app">
      <h1>Sign Up</h1>
      <form>

        <input
          type="text"
          name="username"
          placeholder='username'
          value={input.username}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.username && <span className='err'>{error.username}</span>}

        <input
          type="password"
          name="password"
          placeholder='password'
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.password && <span className='err'>{error.password}</span>}

        <input
          type="password"
          name="confirmPassword"
          placeholder='confirm Password'
          value={input.confirmPassword}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}

        <button>Submit</button>

        <h4>Valid!</h4>
      </form>
    </div>
  );
}

export default Validator;