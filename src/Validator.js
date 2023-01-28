import React, { useState } from 'react';

function PasswordValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || confirmPassword === "") {
      setError("All fields are required!");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("Valid!");
    }
  };

  return (
    <div className="center-container">
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
      <br />
      {error && <p>{error}</p>}
    </form>
    </div>
  );
}

export default PasswordValidator;
