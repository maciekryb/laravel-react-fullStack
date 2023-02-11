import React from "react";
import { Link } from "react-router-dom";

const onSubmit = (ev) => {
  ev.preventDefault();
};

const Signup = () => {
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Signup for free</h1>
          <input placeholder="Full Name" type="email" />
          <input placeholder="Email Adress" type="email" />
          <input placeholder="Password" type="password" />
          <input placeholder="Password Confirmation" type="password" />
          <button className="btn btn-block">Signup</button>
          <p className="message">
            Already registered? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
