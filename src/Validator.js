import React, { useState } from "react";

function PasswordValidator(props) {
  const [password, setPassword] = useState(props.password);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  function validatePassword(password) {
    if (password.length < 8) {
      setIsValid(false);
      setErrorMessage("Password must be at least 8 characters long.");
    } else if (!/|d/.test(password)) {
      setIsValid(false);
      setErrorMessage("Password must contain at least one number.");
    } else {
      setIsValid(true);
      setErrorMessage("");
    }
  }

  return (
    <div>
      <input type="password" onChange={e => validatePassword(e.target.value)} />
      {isValid && <div>{errorMessage}</div>}
    </div>
  );
}

export default PasswordValidator;
