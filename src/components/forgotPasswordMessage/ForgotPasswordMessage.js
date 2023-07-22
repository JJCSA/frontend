import React from 'react';
import './ForgotPasswordMessage.scss';
import { Form, Col, Row, Container } from 'react-bootstrap';

const ForgotPasswordMessage = () => (
  <Container fluid className="ForgotPasswordMessage-container">
    <Row className="row FORGOT-PASSWORD-Message">
      <Col>
        <div className="forgot-password-message-container">
          <div className="email-icon-header">
            <div className="email-icon">
              <div className="vector-icon">
                <div className="vector-border" />
              </div>
            </div>
          </div>

          <div className="message-outside-container-1">
            <p className="message-content">
              Wrong email address ?
              <u>
                {' '}
                <a href="/forgotPassword">Change Email Adderess</a>{' '}
              </u>
            </p>
            {/* need to write proper a href */}
            {/* <p className="message-content-1">
              Did not receive an email ?{' '}
              <u>
                {' '}
                <a href="/resetPassword"> Resend Email </a>{' '}
              </u>
            </p> */}
          </div>

          <div className="message-outside-container-2">
            <p className="message-content-2">
              {/* proper email id should be come instead of email_id@gmail.com below */}
              We have sent you an email to your registered email id. <br></br>
              Check your inbox and follow the instructions to reset your account
              password.
            </p>

            <p className="message-content-3">Email Sent</p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);
export default ForgotPasswordMessage;
