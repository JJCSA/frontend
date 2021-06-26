import React from 'react';
import { useSignIn, useIsAuthenticated } from 'react-auth-kit';
import { Redirect, Link } from 'react-router-dom';
import { login } from '../UserFunctions';
import './Login.scss';

function Login() {
  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();

  if (isAuthenticated()) return (<Redirect to="/" />);

  const onSubmit = (e) => {
    e.preventDefault();
    login(e.target).then((user) => {
      signIn(user);
    });
  };

  return (
    <div className="container-login">
      <style>
        {
          'body { background: linear-gradient(180deg, #0F2D58 0%, #2C5797 55.91%); }'
        }
      </style>
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <h1 className="header">Login to your account</h1>
          <fieldset className="fieldset">
            <form onSubmit={onSubmit}>
              <div className="form-group mt-5 ml-5">
                <span className="label required">
                  Email
                </span>
                <input
                  type="email"
                  className="form-control form-input input-sm"
                  name="username"
                  required
                />
              </div>
              <div className="form-group ml-5">
                <span className="label required mr-5">
                  Password
                </span>
                <span className="forgotpwd col-sm-7 ml-4 text-right">
                  Forgot Password?
                </span>
                <input
                  type="password"
                  className="form-control form-input input-sm"
                  name="password"
                  required
                />
              </div>
              <div className="form-check ml-5">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="Rememberme"
                />
                <span className="label mb-1">
                  Remember Me
                </span>
              </div>
              <input type="hidden" name="grant_type" value="password" />
              <input type="hidden" name="client_id" value="jjcsa" />

              <button
                type="submit"
                className="btn btn-lg btn-block btnLogin w-75 label ml-5 mt-3 mb-1"
              >
                Login
              </button>
              <div className="member ml-5 mt-5">
                Not a member yet?
                <br />
                This is a closed community.We will review all applications
              </div>

              <Link to="/register">
                <button
                  type="button"
                  className="btn btn-lg btn-block btnSignUp w-75 label ml-5 mt-3 mb-3"
                >
                  New User Registration
                </button>
              </Link>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default Login;
