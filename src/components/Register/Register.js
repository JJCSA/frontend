import React, { Component } from 'react'
import { register } from './../UserFunctions'
import './Register.scss';

class Register extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
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

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
      <style>{'body { background: linear-gradient(180deg, #0F2D58 0%, #2C5797 55.91%); }'}</style>
      <div className="row mb-5">
      <div className="col-md-6 mt-3 mx-auto">
      <h1 className="header" >New User Registration</h1>
      <h2 className="headersubtext"> Have an account? Login</h2>
      <fieldset className="fieldsetstyle">
      <form noValidate onSubmit={this.onSubmit}>
      <div className="form-row col-sm-12">
      <div className="col-sm-6 mt-2">
      <label className="label required" htmlFor="firstname">First Name</label>
      <input
      type="text"
      className="form-control form-input-half input-sm"
      name="firstname"
      value={this.state.firstname}
      onChange={this.onChange}
      />
      </div>
      <div className="col-sm-6 mt-2">
      <label className="label required" htmlFor="lastname">Last Name</label>
      <input
      type="text"
      className="form-control form-input-half input-sm"
      name="lastname"
      value={this.state.lastname}
      onChange={this.onChange}
      />
      </div>
      </div>
      <div className="form-row col-sm-12">
      <div className="col-sm-12">
      <label className="label required" htmlFor="email">Email</label>
      <input
      type="email"
      className="form-control form-input input-sm"

      name="email"
      value={this.state.email}
      onChange={this.onChange}
      />
      </div>
      </div>
      <div class="form-row col-sm-12">
      <div className="col-sm-12">
      <label className="label required" htmlFor="password">Password</label>
      <input
      type="password"
      className="form-control form-input input-sm"

      name="password"
      value={this.state.password}
      onChange={this.onChange}
      />
      </div>
      <div className="col-sm-12">
      <label className="label required" htmlFor="password">Confirm Password</label>
      <input
      type="password"
      className="form-control form-input input-sm"

      name="confirmpassword"
      value={this.state.confirmpassword}
      onChange={this.onChange}
      />
      </div>
      </div>
      <div className="form-row col-sm-12">
      <div className="col-sm-12">
      <label className="label" htmlFor="mobilenumber">Mobile Number</label>
      <input
      type="tel"
      className="form-control form-input input-sm"
      pattern="+[0-9]{3}[0-9]{3}-[0-9]{2}-[0-9]{3}"
      name="mobilenumber"
      value={this.state.mobile}
      onChange={this.onChange}
      />
      </div>
      <div className="col-sm-6">
      <label class="label">Preferred Method of Contact</label>
      <div className="form-row col-sm-12 ml-2">
      <div className="form-check col-sm-6">
      <input type="checkbox" class="form-check-input" name="call" />
      <label class="Label-sm" forHTML="call">Phone Call</label>
      </div>
      <div className="form-check col-sm-6">
      <input type="checkbox" class="form-check-input" name="premail" />
      <label class="Label-sm" forHTML="premail">Email</label>
      </div>
      </div>
      <div className="form-row col-sm-12 ml-2">
      <div className="form-check col-sm-6">
      <input type="checkbox" class="form-check-input" name="whatsapp" />
      <label class="Label-sm"  forHTML="call">Whatsapp</label>
      </div>
      <div className="form-check col-sm-6">
      <input type="checkbox" class="form-check-input" name="sms" />
      <label class="Label-sm"   forHTML="call">SMS Text</label>
      </div>
      </div>
      </div>
      </div>
      <div className="form-row col-sm-12 mb-2">
      <div className="col-sm-12">
      <label className="label required" htmlFor="jain">Which Jain Community do you belong to?</label>
      <input
      type="text"
      className="form-control form-input input-sm"

      name="jain"
      value={this.state.jain}
      onChange={this.onChange}
      />
      <label className="subtext">Note: Please do not mention None or N/A,
      please ask your parents what Jain community are they related with in India and be very specific</label>
      </div>
      </div>
      <div className="form-row col-sm-12 mb-2">
      <div className="col-sm-12">
      <label className="label required" htmlFor="cert">Upload Photo Proof of your Jain Community Certificate</label>
      <input
      type="file"
      className="form-control-file file"
      name="cert"
      value={this.state.cert}
      onChange={this.onChange}
      />
      <label className="subtext">Note: This is a certificate that shows you are a Jain. If you are not aware of this please ask your parents.
      Your application will be rejected if you don’t upload an appropriate document.</label>
      </div>
      </div>

      <div className="form-row col-sm-12">
      <div className="col-sm-12">
      <label className="label" htmlFor="profile">Upload a Profile Picture</label>
      <input
      type="file"
      className="form-control-file file"

      name="profile"
      value={this.state.profile}
      onChange={this.onChange}
      />
      </div>
      </div>

      <button
      type = "button"
      className="btn btn-md btn-block btnSignUp w-75 label ml-5 mt-3 mb-3">
      Submit
      </button>


      </form>
      </fieldset>
      </div>
      </div>
      </div>
    )
  }
}

export default Register
