import React from 'react';
import './ForgotPassword.scss';
import { Form, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPassword = () => (
  <Container fluid className="ForgotPassword-container">
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

export default ForgotPassword;
