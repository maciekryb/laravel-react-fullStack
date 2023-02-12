import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passowrdRef = useRef();
  const passwordConfirmationRef = useRef();

  const { setUser, setToken } = useStateContext();

  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      passowrd: passowrdRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    axiosClient
      .post("/signup", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (repsone && response.status === 422) {
          console.log(response.data.errors);
        }
      });
  };

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Signup for free</h1>
          <input ref={nameRef} placeholder="Full Name" />
          <input ref={emailRef} placeholder="Email Adress" type="email" />
          <input ref={passowrdRef} placeholder="Password" type="password" />
          <input
            ref={passwordConfirmationRef}
            placeholder="Password Confirmation"
            type="password"
          />
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
