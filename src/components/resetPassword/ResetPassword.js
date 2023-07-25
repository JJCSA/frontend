import React, { useState } from 'react';
import './ResetPassword.scss';
import { Form, Col, Row, Container } from 'react-bootstrap';
import PasswordValidator from 'password-validator';

const ResetPassword = () => {

  // Strong Password Validation with 8 Letter 1 Uppercase , Lowercase and Number

  const [tempPassword, setTempPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const schema = new PasswordValidator();

  // Configure the password complexity rules
  schema
    .is()
    .min(8) // Minimum length 8
    .has()
    .uppercase() // Must have uppercase letters
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .digits(1) // Must have at least 1 digit
    .has()
    .not()
    .spaces(); // Should not contain spaces

  const handleTempPasswordChange = e => {
    setTempPassword(e.target.value);
  };

  const handleNewPasswordChange = e => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Validate the passwords here
    const validationErrors = {};
    if (tempPassword === '') {
      validationErrors.tempPassword = 'Temporary password is required.';
    }

    if (newPassword === '') {
      validationErrors.newPassword = 'New password is required.';
    } else if (!schema.validate(newPassword)) {
      validationErrors.newPassword =
        'New password must be at least 8 characters long, and include uppercase letters, lowercase letters, and at least 1 digit.';
    }

    if (confirmPassword === '') {
      validationErrors.confirmPassword = 'Confirm password is required.';
    } else if (newPassword !== confirmPassword) {
      validationErrors.confirmPassword =
        'New password and Confirm password must match.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Passwords are valid, perform your password change logic here
      // For example, you can send a request to the server to update the password
      setErrors({}); // Clear error message on successful password change
      setTempPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

// Basic Password Validation
  // const [tempPassword, setTempPassword] = useState('');
  // const [newPassword, setNewPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  // const handleTempPasswordChange = e => {
  //   setTempPassword(e.target.value);
  // };

  // const handleNewPasswordChange = e => {
  //   setNewPassword(e.target.value);
  // };

  // const handleConfirmPasswordChange = e => {
  //   setConfirmPassword(e.target.value);
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   // Validate the passwords here
  //   if (tempPassword === '') {
  //     setErrorMessage('Temporary password is required.');
  //   } else if (newPassword === '') {
  //     setErrorMessage('New password is required.');
  //   } else if (confirmPassword === '') {
  //     setErrorMessage('Confirm password is required.');
  //   } else if (newPassword !== confirmPassword) {
  //     setErrorMessage('New password and Confirm password must match.');
  //   } else if (newPassword !== confirmPassword) {
  //     setErrorMessage('New password and Confirm password must match.');
  //   } else {
  //     // Passwords are valid, perform your password change logic here
  //     // For example, you can send a request to the server to update the password
  //     setErrorMessage(''); // Clear error message on successful password change
  //     setTempPassword('');
  //     setNewPassword('');
  //     setConfirmPassword('');
  //   }
  // };


  return (
    <Container fluid className="ResetPassword-container">
      <Row className="row-RESET-PASSWORD">
        <Col className="col-RESET-PASSWORD">
          <div className="reset-password-message-container">
            <div className="message-header">
              <p className="message-header-content">
                {/* Need to change Username with actual name of Username */}
                Hi Username,
                <br />
                Your new password must be different from any of your previous
                password.
              </p>

              <p className="message-header-content-1">Create New Password</p>
            </div>

            <div className="outside-box">
              <Form onSubmit={handleSubmit}>
                <div className="temporary-password">
                  <Form className="label2">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>
                        Temporary Password
                        <span style={{ color: 'red' }}>*</span>
                      </Form.Label>
                      {/* inline box layout */}
                      <Form.Control
                        type="password"
                        placeholder=""
                        className="inlinebox-3"
                        name="temporarypassword"
                        onChange={handleTempPasswordChange}
                      />
                      {errors.tempPassword && (
                        <div style={{ color: 'red' }}>
                          {errors.tempPassword}
                        </div>
                      )}
                    </Form.Group>
                  </Form>
                </div>

                <div className="new-password">
                  <Form className="label">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>
                        New Password
                        <span style={{ color: 'red' }}>*</span>
                      </Form.Label>
                      {/* inline box layout */}
                      <Form.Control
                        type="password"
                        placeholder=""
                        className="inlinebox"
                        name="password"
                        onChange={handleNewPasswordChange}
                      />
                      {errors.newPassword && (
                        <div style={{ color: 'red' }}>{errors.newPassword}</div>
                      )}
                    </Form.Group>
                  </Form>
                </div>

                <div className="confirm-password">
                  <Form className="label1">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>
                        Confirm Password
                        <span style={{ color: 'red' }}>*</span>
                      </Form.Label>
                      {/* inline box layout */}
                      <Form.Control
                        type="password"
                        placeholder=""
                        className="inlinebox-1"
                        name="confirmpassword"
                        onChange={handleConfirmPasswordChange}
                      />
                      {errors.confirmPassword && (
                        <div style={{ color: 'red' }}>
                          {errors.confirmPassword}
                        </div>
                      )}
                    </Form.Group>
                  </Form>
                </div>

                <div className="button-box">
                  <button type="submit" className="submit-button">
                    Reset Password
                  </button>
                  {/* {errorMessage && (
                    <div style={{ color: 'red' }}>{errorMessage}</div>
                  )} */}
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default ResetPassword;
