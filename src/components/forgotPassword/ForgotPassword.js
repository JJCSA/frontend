import React, { useState } from 'react';
import './ForgotPassword.scss';
import { Form, Col, Row, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const validateForm = (event) => {
    event.preventDefault(); // Prevent form submission if validation fails

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
      setEmailError('Email must be filled out');
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
      // Code to handle form submission (e.g., send email, show success message, etc.)
      // For now, let's just log the email for demonstration purposes
      console.log('Valid email:', email);

      // Navigate to the ForgotPasswordMessage page programmatically
      navigate('/ForgotPasswordMessage');
    }
  };

  return (
    <Container fluid className="ForgotPassword-container">
      <Row className="row FORGOT-PASSWORD">
        <Col>
          <div className="forgot-password-container">
            <div className="forgot-password-header">
              <h4>Forgot Password?</h4>
            </div>
            <div className="forgot-password-content">
              <p>
                Enter the email address you used to create the account. We will
                email you the instructions to reset your password.
              </p>
            </div>
            <div className="outlinebox">
              <Form className="label" onSubmit={validateForm} method="post">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    Email
                    <span style={{ color: 'red' }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder=""
                    className="inlinebox"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && (
                    <div style={{ color: 'red' }}>{emailError}</div>
                  )}
                </Form.Group>
                <div className="button-box">
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={!email || !!emailError}
                  >
                    Send Email
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;