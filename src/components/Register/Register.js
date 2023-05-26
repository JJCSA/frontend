import React, { useState } from 'react';
import './Register.scss';
import { Container, Form, Row, Col, InputGroup } from 'react-bootstrap';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../UserFunctions';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const registrationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
  mobileNumber: Yup.string().required('Mobile Number is required'),
  prefMethodOfContact: Yup.string().required(
    'Preferred Method of Contact is required'
  ),
  jainCommunity: Yup.string().required('Jain Community is required'),
  jainProof: Yup.mixed().required('Jain Community Certificate is required'),
  profPicture: Yup.mixed().required('Profile Picture is required'),
});

function Register() {
  const initialValues = {
    jainProof: null,
    profPicture: null,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    mobileNumber: '',
    prefMethodOfContact: 'Email',
    jainCommunity: '',
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    delete values.passwordConfirmation;
    register(values)
      .then(() => {
        navigate('/login');
      })
      .catch(() => {
        setSubmitting(false);
        setShowError(true);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Container fluid className="register-container">
      <Row>
        <Col className="register-text">
          <h4>New User Registration</h4>
          <h6>
            Have an account?{' '}
            <Link to="/login" className="login-link">
              {' '}
              Log in
            </Link>
          </h6>
        </Col>
      </Row>
      <Row>
        <Col className="register-col">
          <div className="register-box">
            <Formik
              initialValues={initialValues}
              validationSchema={registrationSchema}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
                setFieldValue,
              }) => (
                <FormikForm className="register-form">
                  {showError && (
                    <div className="error">
                      Registration error, please check details and try again.
                    </div>
                  )}
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label>
                        First Name
                        <span style={{ color: 'red' }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.firstName && errors.firstName}
                        className="form-control-custom"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.firstName}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>
                        Last Name
                        <span style={{ color: 'red' }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.lastName && errors.lastName}
                        className="form-control-custom"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.lastName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                      Email
                      <span style={{ color: 'red' }}>*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.email && errors.email}
                      className="form-control-custom"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                      Password
                      <span style={{ color: 'red' }}>*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        placeholder=""
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.password && errors.password}
                        className="form-control-password"
                      />
                      <InputGroup.Prepend className="password-eye-icon">
                        <InputGroup.Text className="password-eye-icon">
                          {showPassword ? (
                            <BsEyeSlash
                              onClick={() => setShowPassword(false)}
                            />
                          ) : (
                            <BsEye onClick={() => setShowPassword(true)} />
                          )}
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                      Confirm Password
                      <span style={{ color: 'red' }}>*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        placeholder=""
                        name="passwordConfirmation"
                        value={values.passwordConfirmation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={
                          touched.passwordConfirmation &&
                          errors.passwordConfirmation
                        }
                        className="form-control-password"
                      />
                      <InputGroup.Prepend className="password-eye-icon">
                        <InputGroup.Text className="password-eye-icon">
                          {showPassword ? (
                            <BsEyeSlash
                              onClick={() => setShowPassword(false)}
                            />
                          ) : (
                            <BsEye onClick={() => setShowPassword(true)} />
                          )}
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control.Feedback type="invalid">
                        {errors.passwordConfirmation}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      Mobile Number
                      <span style={{ color: 'red' }}>*</span>
                    </Form.Label>
                    <PhoneInput
                      country={'us'}
                      value={values.mobileNumber}
                      onChange={phone => {
                        setFieldValue('mobileNumber', phone);
                        console.log(values);
                      }}
                      isInvalid={touched.mobileNumber && errors.mobileNumber}
                      // className="form-control-custom"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.mobileNumber}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="mb-3">
                    <Form.Label>
                      Preferred Method of Contact
                      <span style={{ color: 'red' }}>*</span>
                    </Form.Label>
                    <Form.Group className="mb-3" controlId="formBasicRadio">
                      <Form.Check
                        inline
                        id="call-radio"
                        type="radio"
                        name="prefMethodOfContact"
                        label="Email"
                        value="Email"
                        checked={values.prefMethodOfContact === 'Email'}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        id="whatsapp-radio"
                        type="radio"
                        name="prefMethodOfContact"
                        label="WhatsApp"
                        value="Whatsapp"
                        checked={values.prefMethodOfContact === 'Whatsapp'}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        id="sms-radio"
                        type="radio"
                        name="prefMethodOfContact"
                        label="SMS Text"
                        value="Message"
                        checked={values.prefMethodOfContact === 'Message'}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>

                  <Form.Group>
                    <Form.Label>
                      Which Jain Community do you belong to?
                      <span style={{ color: 'red' }}>*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      name="jainCommunity"
                      value={values.jainCommunity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.jainCommunity && errors.jainCommunity}
                      className="form-control-custom"
                    />
                    <Form.Text className="text-muted">
                      Please do not mention None or N/A, please ask your parents
                      what Jain community they are related to in India and be
                      very specific.
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                      {errors.jainCommunity}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>
                      Upload Photo Proof of your Jain Community Certificate
                      <span style={{ color: 'red' }}>*</span>
                    </Form.Label>
                    <Form.Control
                      type="file"
                      name="jainProof"
                      onChange={e =>
                        setFieldValue('jainProof', e.currentTarget.files[0])
                      }
                      required
                    />
                    <Form.Text className="text-muted">
                      This is a certificate that shows you are a Jain. If you
                      are not aware of this please ask your parents. Your
                      application will be rejected if you don’t upload an
                      appropriate document.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>
                      Upload a Profile Picture
                      <span style={{ color: 'red' }}>*</span>
                    </Form.Label>
                    <Form.Control
                      type="file"
                      name="profPicture"
                      onChange={e =>
                        setFieldValue('profPicture', e.currentTarget.files[0])
                      }
                      required
                    />
                  </Form.Group>
                  <br />
                  <button
                    type="submit"
                    className="btn register-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </FormikForm>
              )}
            </Formik>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
