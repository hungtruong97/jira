import React, { useState } from "react";

const Login = (props) => {
  const [userLogin, setUserLogin] = useState({ account: "", password: "" });
  const handleChange = (e) => {
    const [name, value] = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <form className="container" onSubmit={handleLogin}>
      <h1>Login</h1>
      <div className="form-group">
        <p>Username</p>
        <input
          name="username"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          name="password"
          type="password"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success">Login</button>
      </div>
    </form>
  );
};

export default Login;
