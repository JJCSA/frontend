import React, { useState } from 'react';
import './ResetPassword.scss';
import {
  Form, Col, Row, InputGroup,
} from 'react-bootstrap';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const ResetPassword = () => (
  <Row className="RESET-PASSWORD">
    <Col>
      <div className="reset-password-message-container">
        <div className='message-header'>
          <p className='message-header-content'>

            {/* Need to change Username with actual name of Username */}

            Hi, Username. <br></br>
            Your new password must be different from any of your previous password.
          </p>

          <p className='message-header-content-1'>
            Create New Password
          </p>
        </div>
        
        <div className='outside-box'>
          <Form>
            <div className='new-password'>
              <Form className="label">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    New Password
                    <span style={{ color: 'red' }}>*</span>
                  </Form.Label>
                  {/* inline box layout */}
                  <Form.Control type="password" placeholder="" className="inlinebox-1" name="password" />
                </Form.Group>
                </Form>
              </div>

              <div className='confirm-password'>
              <Form className="label-1">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    Confirm Password
                    <span style={{ color: 'red' }}>*</span>
                  </Form.Label>
                  {/* inline box layout */}
                  <Form.Control type="password" placeholder="" className="inlinebox-1" name="password" />
                </Form.Group>
                </Form>
              </div>

              <div className='button-box'>
                <Link to="/Login">
                  <button type="submit" className="submit-button">
                    Reset Password
                  </button>
                </Link>
              </div>
            </Form>
        </div>
      </div>
    </Col>
  </Row>
);
export default ResetPassword;
