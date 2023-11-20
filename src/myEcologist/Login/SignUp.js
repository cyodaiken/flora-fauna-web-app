import "./Login.css";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  function validateForm() {
    return (
      email.length > 0 &&
      password.length > 0 &&
      firstName.length > 0 &&
      lastName.length > 0 &&
      dob.length > 0 &&
      agreeTerms
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    console.log(firstName);
    console.log(lastName);
    console.log(dob);
    console.log(agreeTerms);
  }

  return (
    <div className="row background-color-left align-items-center main-login">
      <div className="col-6 text-center">
        <div className="row company-logo mb-3">
          <a href="#">
            <img
              src="Images/myEcologist.svg"
              height="40"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
        <div className="row mb-3">
          <h3>Sign Up</h3>
        </div>
        <Form className="row w-50 login-form" onSubmit={handleSubmit}>
          <Form.Group className="mt-3" size="lg" controlId="email">
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

          <Form.Group className="mt-3" size="lg" controlId="firstName">
            <Form.Control
              type="text"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mt-3" size="lg" controlId="lastName">
            <Form.Control
              type="text"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mt-3" size="lg" controlId="dob">
            <Form.Control
              type="date"
              value={dob}
              placeholder="Date of Birth"
              onChange={(e) => setDob(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="agreeTerms" className="mb-2 mt-2">
            <Form.Check
              type="checkbox"
              label="I agree to all terms and conditions"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
          </Form.Group>

          <Button
            className="form-submit-button mt-3"
            block
            size="lg"
            type="submit"
            disabled={!validateForm()}
          >
            Sign Up
          </Button>
        </Form>
      </div>
      <div className="col-6 p-0 m-0 login-image">
        <img
          className="login-display-image"
          src="https://i1.adis.ws/i/canon/pca---wildlife-photography---wildlife-tips-intro-page-shutterstock_760566388_94cf75c81a874ceab4a474493862d708?$media-collection-full-dt$"
          alt="Login Display"
        />
      </div>
    </div>
  );
};

export default SignUp;
