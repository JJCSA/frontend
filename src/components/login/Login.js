import React, { useContext, useState } from 'react';
import { useSignIn, useIsAuthenticated } from 'react-auth-kit';
import { Navigate, Link } from 'react-router-dom';
import './Login.scss';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { Form, Container, Col, Row, InputGroup } from 'react-bootstrap';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import GlobalContext from '../../store/GlobalContext';
import { login } from '../UserFunctions';
import { toast } from 'react-toastify';

const loginSchema = Yup.object().shape({
  username: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

function Login() {
  const { globalState, setGlobalState } = useContext(GlobalContext);
  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();
  const [showPassword, setShowPassword] = useState(false);

  if (isAuthenticated()) return <Navigate to="/" replace />;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (values, { setSubmitting }) => {
    login(values)
      .then(user => {
        signIn(user);
        setGlobalState({
          ...globalState,
          profile: user.authState,
        });
        toast.success('Login successful!');
      })
      .catch(err => {
        toast.error(
          err?.response?.data?.error_description === 'Account disabled'
            ? 'Please wait until account is approved by Admin'
            : 'Login Failed!'
        );
        console.log(err);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="LOGIN">
      <Container fluid className="login-container">
        <Row>
          <Col className="login-col">
            <div className="login-box">
              <Formik
                initialValues={{
                  username: '',
                  password: '',
                  grant_type: '',
                  client_id: '',
                }}
                validationSchema={loginSchema}
                onSubmit={onSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                  isSubmitting,
                }) => (
                  <FormikForm className="login-form" onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>
                        Email
                        <span style={{ color: 'red' }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder=""
                        className="form-control-custom"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.username && errors.username}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.username}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>
                        Password
                        <span style={{ color: 'red' }}>*</span>
                      </Form.Label>
                      <Form.Label style={{ color: 'red', float: 'right' }}>
                        <a href="/forgotPassword">Forgot Password?</a>
                      </Form.Label>
                      <InputGroup>
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          placeholder=""
                          className="form-control-password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={touched.password && errors.password}
                        />
                        <InputGroup.Prepend className="password-eye-icon">
                          <InputGroup.Text className="password-eye-icon">
                            {showPassword ? (
                              <BsEyeSlash onClick={handleShowPassword} />
                            ) : (
                              <BsEye onClick={handleShowPassword} />
                            )}
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <input type="hidden" name="grant_type" value="password" />
                    <input type="hidden" name="client_id" value="jjcsa" />
                    <button
                      type="submit"
                      className="btn submit-button"
                      onClick={() => {
                        setFieldValue('grant_type', 'password');
                        setFieldValue('client_id', 'jjcsa');
                      }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Loading...' : 'Login'}
                    </button>
                    <br />
                    <br />
                    <Form.Label style={{ margin: 0 }}>
                      Not a member yet?
                    </Form.Label>
                    <Form.Label>
                      This is a closed community. We will review all
                      applications
                    </Form.Label>
                    <Link to="/register" className="btn register-button">
                      New User Registration
                    </Link>
                  </FormikForm>
                )}
              </Formik>
            </div>
          </Col>
          <Col className="image-col"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
