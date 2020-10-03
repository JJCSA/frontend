import React, { Component } from 'react'
import { login } from './../UserFunctions'
import './Login.scss';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/profile`)
      }
    })
  }

  render() {
    return (
      <div className="container-login">
      <style>{'body { background: linear-gradient(180deg, #0F2D58 0%, #2C5797 55.91%); }'}</style>
      <div className="row">
      <div className="col-md-6 mt-5 mx-auto">
      <h1 className="header" >Login to your account</h1>
      <fieldset className="fieldset">
      <form noValidate onSubmit={this.onSubmit}>
      <div className="form-group mt-5 ml-5">
      <label className="label required" htmlFor="email">Email</label>
      <input
      type="email"
      className="form-control form-input input-sm"
      name="email"
      value={this.state.email}
      onChange={this.onChange}
      />
      </div>
      <div className="form-group ml-5">
      <label className="label required mr-5" htmlFor="password">Password</label>
      <label className="forgotpwd col-sm-7 ml-4 text-right">Forgot Password?</label>
      <input
      type="password"
      className="form-control form-input input-sm"
      name="password"
      value={this.state.password}
      onChange={this.onChange}
      />
      </div>
      <div className="form-check ml-5">
      <input type="checkbox" class="form-check-input" name="Rememberme" />
      <label class="label mb-1" forHTML="Rememberme">Remember Me</label>
      </div>

      <button
      type="submit"
      className="btn btn-lg btn-block btnLogin w-75 label ml-5 mt-3 mb-1">
      Login
      </button>
      <label class="member ml-5 mt-5">Not a member yet?
      <br />
      This is a closed community.We will review all applications
      </label>

      <button
      type = "button"
      className="btn btn-lg btn-block btnSignUp w-75 label ml-5 mt-3 mb-3">
      New User Registration
      </button>

      </form>
      </fieldset>
      </div>
      </div>
      </div>
    )
  }
}

export default Login
