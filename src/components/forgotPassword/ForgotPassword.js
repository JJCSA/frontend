import React from 'react';
import './ForgotPassword.scss';
<<<<<<< HEAD
import { Form, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPassword = () => (
  <Container fluid className="login-container">
    <Row className="row FORGOT-PASSWORD">
      <Col>
        <div className="forgot-password-container">
          <div className="forgot-password-header">
            <h4>Forgot Password?</h4>
          </div>
          <div className="forgot-password-content">
            <p>
              Enter the email address you used to create the account.
              We will email you the instructions to reset your password.
            </p>
          </div>
          <div className="outlinebox">
            <Form className="label">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  Email
                  <span style={{ color: 'red' }}>*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  className="inlinebox"
                  name="username"
                />
              </Form.Group>
=======
import { Form, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPassword = () => (
  <Row className="FORGOT-PASSWORD">
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
        {/* outline box layout */}
        <div className="outlinebox">
          {/* Email Label */}
          <Form className="label">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Email
                <span style={{ color: 'red' }}>*</span>
              </Form.Label>
              {/* inline box layout */}
              <Form.Control
                type="email"
                placeholder=""
                className="inlinebox"
                name="username"
              />
            </Form.Group>
            <div>
              {/* button box */}
>>>>>>> 8c01972 (Fixed issue (#129))
              <div className="button-box">
                <Link to="/ForgotPasswordMessage">
                  <button type="submit" className="submit-button">
                    Send Email
                  </button>
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);
<<<<<<< HEAD

=======
>>>>>>> 8c01972 (Fixed issue (#129))
export default ForgotPassword;
