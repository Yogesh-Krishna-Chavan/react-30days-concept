import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleName}></input>
      </label>

      <br />
      <br />

      <label>
        Email:
        <input type="email" value={email} onChange={handleEmail}></input>
      </label>

      <br />
      <br />

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePassword}
        ></input>
      </label>

      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
