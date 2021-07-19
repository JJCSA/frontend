import React, {Component, useEffect} from 'react';
import { register } from '../UserFunctions';
import './Register.scss';
import {Container, Form, Row, Col, InputGroup} from "react-bootstrap";
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      errors: {},
      showPassword: false,
      showConfirmPassword: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleShowPassword = this.handleShowPassword.bind(this);
    this.handleShowConfirmPassword = this.handleShowConfirmPassword.bind(this);
  }

  // componentDidMount() {
  //   this.props.toggleNavbar(true);
  // }
  //
  // componentWillUnmount() {
  //   this.props.toggleNavbar(true);
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    };

    register(newUser).then((res) => {
      this.props.history.push('/login');
    });
  }

  handleShowPassword(){
    this.setState({
      showPassword: !this.state.showPassword
    });
  }

  handleShowConfirmPassword(){
    this.setState({
      showConfirmPassword: !this.state.showConfirmPassword
    });
  }

  render() {
    return (
        <Container fluid className="register-container">
          <Row>
            <Col className="register-text">
              <h4>New User Registration</h4>
              <h6>Have an account? <Link to="/login" className="login-link">Log in</Link></h6>
            </Col>
          </Row>
          <Row>
            <Col className="register-col">
              <div className="register-box">
              <Form onSubmit={this.onSubmit} className="register-form">
                <Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      First Name
                      <span style={{ color: 'red' }}>*</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="" name="firstname" value={this.state.firstname} onChange={this.onChange} required className="form-control-custom"/>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>
                      Last Name
                      <span style={{ color: 'red' }}>*</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="" name="lastname" value={this.state.lastname} onChange={this.onChange} required className="form-control-custom"/>
                  </Form.Group>
                </Row>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    Email
                    <span style={{ color: 'red' }}>*</span>
                  </Form.Label>
                  <Form.Control type="email" placeholder="" name="email" value={this.state.email} onChange={this.onChange} required className="form-control-custom"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>
                    Password
                    <span style={{ color: 'red' }}>*</span>
                  </Form.Label>
                  <InputGroup>
                    <Form.Control type={this.state.showPassword ? 'text' : 'password'} placeholder="" name="password" value={this.state.password} onChange={this.onChange} required className="form-control-password"/>
                    <InputGroup.Prepend className="password-eye-icon">
                      <InputGroup.Text className="password-eye-icon">{this.state.showPassword ? <BsEyeSlash onClick={this.handleShowPassword} /> : <BsEye onClick={this.handleShowPassword} />}</InputGroup.Text>
                    </InputGroup.Prepend>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>
                    Confirm Password
                    <span style={{ color: 'red' }}>*</span>
                  </Form.Label>
                  <InputGroup>
                    <Form.Control type={this.state.showConfirmPassword ? 'text' : 'password'} placeholder="" name="confirmpassword" value={this.state.confirmpassword} onChange={this.onChange} required className="form-control-password"/>
                    <InputGroup.Prepend className="password-eye-icon">
                      <InputGroup.Text className="password-eye-icon">{this.state.showConfirmPassword ? <BsEyeSlash onClick={this.handleShowConfirmPassword} /> : <BsEye onClick={this.handleShowConfirmPassword} />}</InputGroup.Text>
                    </InputGroup.Prepend>
                  </InputGroup>
                </Form.Group>

                <Form.Group>
                  <Form.Label>
                    Mobile Number
                    <span style={{ color: 'red' }}>*</span>
                  </Form.Label>
                  <Form.Control type="tel" placeholder="" pattern="+[0-9]{3}[0-9]{3}-[0-9]{2}-[0-9]{3}" name="mobilenumber" value={this.state.mobile} onChange={this.onChange} required className="form-control-custom"/>
                </Form.Group>

                <div className="mb-3">
                  <Form.Label> Preferred Method of Contact<span style={{ color: 'red' }}>*</span></Form.Label>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check inline type="checkbox" name="call" label="Phone Call" />
                    <Form.Check inline type="checkbox" name="premail" label="Email" />
                    <Form.Check inline type="checkbox" name="whatsapp" label="WhatsApp" />
                    <Form.Check inline type="checkbox" name="sms" label="SMS Text" />
                  </Form.Group>
                </div>

                <Form.Group>
                  <Form.Label>
                    Which Jain Community do you belong to?
                    <span style={{ color: 'red' }}>*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="" name="jain" value={this.state.jain} onChange={this.onChange} required className="form-control-custom"/>
                  <Form.Text className="text-muted">
                    Please do not mention None or N/A, please ask your parents what Jain community are they related with in India and be very specific
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload Photo Proof of your Jain Community Certificate<span style={{ color: 'red' }}>*</span></Form.Label>
                  <Form.Control type="file" name="cert" value={this.state.cert} onChange={this.onChange} required/>
                  <Form.Text className="text-muted">This is a certificate that shows you are a Jain. If you are not aware of this please ask your parents. Your application will be rejected if you don’t upload an appropriate document.</Form.Text>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload a Profile Picture</Form.Label>
                  <Form.Control type="file" name="profile" value={this.state.profile} onChange={this.onChange}/>
                </Form.Group>
                <br/>
                <button type="submit" className="btn register-button">
                  Submit
                </button>

              </Form>
              </div>
            </Col>
          </Row>
        </Container>
      // <div className="container">
      //   <style>{'body { background: linear-gradient(180deg, #0F2D58 0%, #2C5797 55.91%); }'}</style>
      //   <div className="row mb-5">
      //     <div className="col-md-6 mt-3 mx-auto">
      //       <h1 className="header">New User Registration</h1>
      //       <h2 className="headersubtext"> Have an account? Login</h2>
      //       <fieldset className="fieldsetstyle">
      //         <form noValidate onSubmit={this.onSubmit}>
      //           <div className="form-row col-sm-12">
      //             <div className="col-sm-6 mt-2">
      //               <label className="label required" htmlFor="firstname">First Name</label>
      //               <input
      //                 type="text"
      //                 className="form-control form-input-half input-sm"
      //                 name="firstname"
      //                 value={this.state.firstname}
      //                 onChange={this.onChange}
      //               />
      //             </div>
      //             <div className="col-sm-6 mt-2">
      //               <label className="label required" htmlFor="lastname">Last Name</label>
      //               <input
      //                 type="text"
      //                 className="form-control form-input-half input-sm"
      //                 name="lastname"
      //                 value={this.state.lastname}
      //                 onChange={this.onChange}
      //               />
      //             </div>
      //           </div>
      //           <div className="form-row col-sm-12">
      //             <div className="col-sm-12">
      //               <label className="label required" htmlFor="email">Email</label>
      //               <input
      //                 type="email"
      //                 className="form-control form-input input-sm"
      //
      //                 name="email"
      //                 value={this.state.email}
      //                 onChange={this.onChange}
      //               />
      //             </div>
      //           </div>
      //           <div className="form-row col-sm-12">
      //             <div className="col-sm-12">
      //               <label className="label required" htmlFor="password">Password</label>
      //               <input
      //                 type="password"
      //                 className="form-control form-input input-sm"
      //
      //                 name="password"
      //                 value={this.state.password}
      //                 onChange={this.onChange}
      //               />
      //             </div>
      //             <div className="col-sm-12">
      //               <label className="label required" htmlFor="password">Confirm Password</label>
      //               <input
      //                 type="password"
      //                 className="form-control form-input input-sm"
      //
      //                 name="confirmpassword"
      //                 value={this.state.confirmpassword}
      //                 onChange={this.onChange}
      //               />
      //             </div>
      //           </div>
      //           <div className="form-row col-sm-12">
      //             <div className="col-sm-12">
      //               <label className="label" htmlFor="mobilenumber">Mobile Number</label>
      //               <input
      //                 type="tel"
      //                 className="form-control form-input input-sm"
      //                 pattern="+[0-9]{3}[0-9]{3}-[0-9]{2}-[0-9]{3}"
      //                 name="mobilenumber"
      //                 value={this.state.mobile}
      //                 onChange={this.onChange}
      //               />
      //             </div>
      //             <div className="col-sm-6">
      //               <label className="label">Preferred Method of Contact</label>
      //               <div className="form-row col-sm-12 ml-2">
      //                 <div className="form-check col-sm-6">
      //                   <input type="checkbox" className="form-check-input" name="call" />
      //                   <label className="Label-sm" forHTML="call">Phone Call</label>
      //                 </div>
      //                 <div className="form-check col-sm-6">
      //                   <input type="checkbox" className="form-check-input" name="premail" />
      //                   <label className="Label-sm" forHTML="premail">Email</label>
      //                 </div>
      //               </div>
      //               <div className="form-row col-sm-12 ml-2">
      //                 <div className="form-check col-sm-6">
      //                   <input type="checkbox" className="form-check-input" name="whatsapp" />
      //                   <label className="Label-sm" forHTML="call">Whatsapp</label>
      //                 </div>
      //                 <div className="form-check col-sm-6">
      //                   <input type="checkbox" className="form-check-input" name="sms" />
      //                   <label className="Label-sm" forHTML="call">SMS Text</label>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           <div className="form-row col-sm-12 mb-2">
      //             <div className="col-sm-12">
      //               <label className="label required" htmlFor="jain">Which Jain Community do you belong to?</label>
      //               <input
      //                 type="text"
      //                 className="form-control form-input input-sm"
      //
      //                 name="jain"
      //                 value={this.state.jain}
      //                 onChange={this.onChange}
      //               />
      //               <label className="subtext">
      //                 Note: Please do not mention None or N/A,
      //                 please ask your parents what Jain community are they related with in India and be very specific
      //               </label>
      //             </div>
      //           </div>
      //           <div className="form-row col-sm-12 mb-2">
      //             <div className="col-sm-12">
      //               <label className="label required" htmlFor="cert">Upload Photo Proof of your Jain Community Certificate</label>
      //               <input
      //                 type="file"
      //                 className="form-control-file file"
      //                 name="cert"
      //                 value={this.state.cert}
      //                 onChange={this.onChange}
      //               />
      //               <label className="subtext">
      //                 Note: This is a certificate that shows you are a Jain. If you are not aware of this please ask your parents.
      //                 Your application will be rejected if you don’t upload an appropriate document.
      //               </label>
      //             </div>
      //           </div>
      //
      //           <div className="form-row col-sm-12">
      //             <div className="col-sm-12">
      //               <label className="label" htmlFor="profile">Upload a Profile Picture</label>
      //               <input
      //                 type="file"
      //                 className="form-control-file file"
      //
      //                 name="profile"
      //                 value={this.state.profile}
      //                 onChange={this.onChange}
      //               />
      //             </div>
      //           </div>
      //
      //           <button
      //             type="button"
      //             className="btn btn-md btn-block btnSignUp w-75 label ml-5 mt-3 mb-3"
      //           >
      //             Submit
      //           </button>
      //
      //         </form>
      //       </fieldset>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Register;
