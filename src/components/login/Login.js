import React, { useContext, useState } from 'react';
import { useSignIn, useIsAuthenticated } from 'react-auth-kit';
import { Navigate, Link } from 'react-router-dom';
import './Login.scss';
import { Form, Container, Col, Row, InputGroup } from 'react-bootstrap';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import GlobalContext from '../../store/GlobalContext';
import { login } from '../UserFunctions';
import { toast } from 'react-toastify';

function Login() {
  const { globalState, setGlobalState } = useContext(GlobalContext);
  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();
  const [showPassword, setShowPassword] = useState(false);

  if (isAuthenticated()) return <Navigate to="/" replace />;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = e => {
    e.preventDefault();
    login(e.target)
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
          err?.response?.data?.error_description
            ? err?.response?.data?.error_description
            : 'Login Failed!'
        );
        console.log(err);
      });
  };

  return (
    <Container fluid className="login-container">
      <Row>
        <Col className="login-col">
          <div className="login-box">
            <Form className="login-form" onSubmit={onSubmit}>
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
                />
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
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember Me"
                  name="Rememberme"
                />
              </Form.Group>
              <input type="hidden" name="grant_type" value="password" />
              <input type="hidden" name="client_id" value="jjcsa" />
              <button type="submit" className="btn submit-button">
                Login
              </button>
              <br />
              <br />
              <Form.Label style={{ margin: 0 }}>Not a member yet?</Form.Label>
              <Form.Label>
                This is a closed community. We will review all applications
              </Form.Label>
              <Link to="/register" className="btn register-button">
                New User Registration
              </Link>
            </Form>
          </div>
        </Col>
        <Col className="image-col">
          {/* <img className="login-image" src={LoginImage} alt="Login Image" /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Login;