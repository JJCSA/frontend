import React from 'react';
import './ForgotPassword.scss';
import
{
  Form, Col, Row,
} from 'react-bootstrap';
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
            Enter the email address you used to create the account.
            We will email you the instructions to reset your password.
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
              <Form.Control type="email" placeholder="" className="inlinebox" name="username" />
            </Form.Group>
            <div>
              {/* button box */}
              <div className="button-box">
                {/* button label */}
                <Link to="/ForgotPasswordMessage">
                  <button type="submit" className="submit-button">
                    Send Email
                  </button>
                </Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Col>
  </Row>
);
export default ForgotPassword;