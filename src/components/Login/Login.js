import React, { useEffect, useState } from 'react';
import { useSignIn, useIsAuthenticated } from 'react-auth-kit';
import { Redirect, Link } from 'react-router-dom';
import './Login.scss';
import {
  Form, Container, Col, Row, InputGroup,
} from 'react-bootstrap';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { login } from '../UserFunctions';

function Login(props) {
  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();
  const [showPassword, setShowPassword] = useState(false);

  // useEffect(() => {
  //   props.toggleNavbar(true);
  //   return () => {
  //     props.toggleNavbar(true);
  //   };
  // }, [props]);

  if (isAuthenticated()) return (<Redirect to="/" />);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(e.target).then((user) => {
      console.log(user.userState);
      signIn(user);
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
                <Form.Control type="email" placeholder="" className="form-control-custom" name="username" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>
                  Password
                  <span style={{ color: 'red' }}>*</span>
                </Form.Label>
                <Form.Label style={{ color: 'red', float: 'right' }}>
                  Forgot Password?
                </Form.Label>
                <InputGroup>
                  <Form.Control type={showPassword ? 'text' : 'password'} placeholder="" className="form-control-password" name="password" />
                  <InputGroup.Prepend className="password-eye-icon">
                    <InputGroup.Text className="password-eye-icon">{showPassword ? <BsEyeSlash onClick={handleShowPassword} /> : <BsEye onClick={handleShowPassword} />}</InputGroup.Text>
                  </InputGroup.Prepend>
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" name="Rememberme" />
              </Form.Group>
              <input type="hidden" name="grant_type" value="password" />
              <input type="hidden" name="client_id" value="jjcsa" />
              <button type="submit" className="btn submit-button">
                Login
              </button>
              <br />
              <br />
              <Form.Label style={{ margin: 0 }}>Not a member yet?</Form.Label>
              <Form.Label>This is a closed community. We will review all applications</Form.Label>
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
  // <div className="container-login">
  //   <style>
  //     {
  //       'body { background: linear-gradient(180deg, #0F2D58 0%, #2C5797 55.91%); }'
  //     }
  //   </style>
  //   <div className="row">
  //     <div className="col-md-6 mt-5 mx-auto">
  //       <h1 className="header">Login to your account</h1>
  //       <fieldset className="fieldset">
  //         <form onSubmit={onSubmit}>
  //           <div className="form-group mt-5 ml-5">
  //             <span className="label required">
  //               Email
  //             </span>
  //             <input
  //               type="email"
  //               className="form-control form-input input-sm"
  //               name="username"
  //               required
  //             />
  //           </div>
  //           <div className="form-group ml-5">
  //             <span className="label required mr-5">
  //               Password
  //             </span>
  //             <span className="forgotpwd col-sm-7 ml-4 text-right">
  //               Forgot Password?
  //             </span>
  //             <input
  //               type="password"
  //               className="form-control form-input input-sm"
  //               name="password"
  //               required
  //             />
  //           </div>
  //           <div className="form-check ml-5">
  //             <input
  //               type="checkbox"
  //               className="form-check-input"
  //               name="Rememberme"
  //             />
  //             <span className="label mb-1">
  //               Remember Me
  //             </span>
  //           </div>
  //           <input type="hidden" name="grant_type" value="password" />
  //           <input type="hidden" name="client_id" value="jjcsa" />
  //
  //           <button
  //             type="submit"
  //             className="btn btn-lg btn-block btnLogin w-75 label ml-5 mt-3 mb-1"
  //           >
  //             Login
  //           </button>
  //           <div className="member ml-5 mt-5">
  //             Not a member yet?
  //             <br />
  //             This is a closed community.We will review all applications
  //           </div>
  //
  //           <Link to="/register">
  //             <button
  //               type="button"
  //               className="btn btn-lg btn-block btnSignUp w-75 label ml-5 mt-3 mb-3"
  //             >
  //               New User Registration
  //             </button>
  //           </Link>
  //         </form>
  //       </fieldset>
  //     </div>
  //   </div>
  // </div>
  );
}

export default Login;
