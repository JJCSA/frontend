import React, { useState } from 'react';
import './ForgotPassword.css';
import { Form, Col, Row, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import comm from '../../helpers/communication';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const validateForm = event => {
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
      comm
        .sendPost(`/user-password/forgot-password?email=${email}`, null, null)
        .then(res => {
          if (res.status === 200) {
            // Navigate to the ForgotPasswordMessage page programmatically
            navigate('/ForgotPasswordMessage');
          }
        })
        .catch(err => {
          toast.error(
            err?.res?.data?.error_description
              ? err?.res?.data?.error_description
              : 'Email does not exist'
          );
        });
    }
  };

  return (
    <Container fluid className="ForgotPassword-container">
      <Row className="row FORGOT-PASSWORD">
        <Col className="col-forgot-password">
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
                    onChange={e => setEmail(e.target.value)}
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
