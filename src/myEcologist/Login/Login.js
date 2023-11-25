import "./Login.css";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="row background-color-left align-items-center main-login">
      <div className="col-12 col-md-6 text-center">
        <div className="row company-logo mb-3">
          <a href="#">
            <img
              src="Images/myEcologist.svg"
              height="35"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
        <div className="row mb-3">
          <h3>Login</h3>
        </div>
        <Form className="row w-50 login-form" onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Control
              autoFocus
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mt-3" size="lg" controlId="password">
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {/* Forgot Password Link */}
          <div className="mt-2">
            <Link to="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </Link>
          </div>

          <Button
            className="form-submit-button mt-3"
            block={"true"}
            size="lg"
            type="submit"
            disabled={!validateForm()}
          >
            Login
          </Button>
        </Form>
        <div className="row mt-3 mb-3">
          <Link className="sign-up-link" to={`/Signup`}>Don't have an account? Sign up.</Link>
        </div>
      </div>
      <div className="col-6 d-none d-md-block">
        <img className="login-display-image" src="Images/seaLion.svg"></img>
      </div>
    </div>
  );
};

export default Login;
