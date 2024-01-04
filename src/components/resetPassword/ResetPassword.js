import React, { useState } from 'react';
import './ResetPassword.scss';
import { Form, Col, Row, Container } from 'react-bootstrap';
import PasswordValidator from 'password-validator';
import comm from '../../helpers/communication';
import { toast } from 'react-toastify';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const ResetPassword = () => {
  // Strong Password Validation with 8 Letter 1 Uppercase , Lowercase and Number

  const [tempPassword, setTempPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState('');

  const schema = new PasswordValidator();

  const [showTempPassword, setShowTempPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const handleEmail = e => {
    setEmail(e.target.value);
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
    if (email === '') {
      validationErrors.email = 'Email is required.';
    }
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
      const data = {
        email,
        tempPassword,
        newPassword,
      };
      comm
        .sendPost('/user-password/reset-password', null, data)
        .then(res => {
          if (res.status === 200) {
            if (res.data) {
              toast.success('Password Updated Sucessfully');
              setTempPassword('');
              setNewPassword('');
              setConfirmPassword('');
              setEmail('');
            }
          }
        })
        .catch(err => {
          toast.error(
            err?.res?.data?.error_description
              ? err?.res?.data?.error_description
              : 'Password updated failed'
          );
        });
    }
  };
  return (
    <Container fluid className="ResetPassword-container">
      <Row className="row-RESET-PASSWORD">
        <Col className="col-RESET-PASSWORD">
          <div className="reset-password-message-container">
            <div className="message-header">
              <p className="message-header-content">
                {/* Need to change Username with actual name of Username */}
                Your new password must be different from any of your previous
                password.
              </p>

              <p className="message-header-content-1">Create New Password</p>
            </div>

            <div className="outside-box">
              <Form onSubmit={handleSubmit}>
                <div className="email">
                  <div className="label2">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>
                        Email
                        <span className="red-asterick">*</span>
                      </Form.Label>
                      {/* inline box layout */}
                      <Form.Control
                        type="text"
                        placeholder=""
                        className="inlinebox-3"
                        name="email"
                        onChange={handleEmail}
                      />
                      {errors.email && (
                        <div className="red-asterick">{errors.email}</div>
                      )}
                    </Form.Group>
                  </div>
                </div>
                <div className="temporary-password">
                  <div className="label2">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>
                        Temporary Password
                        <span className="red-asterick">*</span>
                      </Form.Label>
                      {/* inline box layout */}
                      <Form.Control
                        type={showTempPassword ? 'text' : 'password'}
                        placeholder=""
                        className="inlinebox-3"
                        name="temporarypassword"
                        onChange={handleTempPasswordChange}
                      />
                      {errors.tempPassword && (
                        <div className="red-asterick">
                          {errors.tempPassword}
                        </div>
                      )}
                      <span className="password-toggle">
                        {showTempPassword ? (
                          <BsEyeSlash
                            onClick={() => setShowTempPassword(false)}
                          />
                        ) : (
                          <BsEye onClick={() => setShowTempPassword(true)} />
                        )}
                      </span>
                    </Form.Group>
                  </div>
                </div>

                <div className="new-password">
                  <div className="label">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>
                        New Password
                        <span className="red-asterick">*</span>
                      </Form.Label>
                      {/* inline box layout */}
                      <Form.Control
                        type={showNewPassword ? 'text' : 'password'}
                        placeholder=""
                        className="inlinebox"
                        name="password"
                        onChange={handleNewPasswordChange}
                      />
                      {errors.newPassword && (
                        <div className="red-asterick">{errors.newPassword}</div>
                      )}
                      <span className="password-toggle1">
                        {showNewPassword ? (
                          <BsEyeSlash
                            onClick={() => setShowNewPassword(false)}
                          />
                        ) : (
                          <BsEye onClick={() => setShowNewPassword(true)} />
                        )}
                      </span>
                    </Form.Group>
                  </div>
                </div>

                <div className="confirm-password">
                  <div className="label1">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>
                        Confirm Password
                        <span className="red-asterick">*</span>
                      </Form.Label>
                      {/* inline box layout */}
                      <Form.Control
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder=""
                        className="inlinebox-1"
                        name="confirmpassword"
                        onChange={handleConfirmPasswordChange}
                      />
                      {errors.confirmPassword && (
                        <div className="red-asterick">
                          {errors.confirmPassword}
                        </div>
                      )}
                      <span className="password-toggle2">
                        {showConfirmPassword ? (
                          <BsEyeSlash
                            onClick={() => setShowConfirmPassword(false)}
                          />
                        ) : (
                          <BsEye onClick={() => setShowConfirmPassword(true)} />
                        )}
                      </span>
                    </Form.Group>
                  </div>
                </div>

                <div className="button-box">
                  <button type="submit" className="submit-button">
                    Reset Password
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
export default ResetPassword;
