import React, { useState } from 'react';
import './Register.scss';
import {
  Container, Form, Row, Col, InputGroup,
} from 'react-bootstrap';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import { register } from '../UserFunctions';

function Register() {
  const [formData, setFormData] = useState({
    jainProof: null,
    profPicture: null,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNumber: '',
    prefMethodOfContact: 'Email',
    jainCommunity: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const history = useHistory();

  const handleChange = (ev) => {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.files ? ev.target.files[0] : ev.target.value,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    register(formData).then(() => {
      history.push('/login');
    }).catch(() => setShowError(true));
  };

  return (
    <Container fluid className="register-container">
      <Row>
        <Col className="register-text">
          <h4>New User Registration</h4>
          <h6>
            Have an account?
            <Link to="/login" className="login-link"> Log in</Link>
          </h6>
        </Col>
      </Row>
      <Row>
        <Col className="register-col">
          <div className="register-box">
            <Form className="register-form" onSubmit={handleSubmit}>
              {showError && (<div className="error">Registration error, please check details and try again.</div>)}
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>
                    First Name
                    <span style={{ color: 'red' }}>*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="" name="firstName" value={formData.firstName} onChange={handleChange} required className="form-control-custom" />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>
                    Last Name
                    <span style={{ color: 'red' }}>*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="" name="lastName" value={formData.lastName} onChange={handleChange} required className="form-control-custom" />
                </Form.Group>
              </Row>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  Email
                  <span style={{ color: 'red' }}>*</span>
                </Form.Label>
                <Form.Control type="email" placeholder="" name="email" value={formData.email} onChange={handleChange} required className="form-control-custom" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>
                  Password
                  <span style={{ color: 'red' }}>*</span>
                </Form.Label>
                <InputGroup>
                  <Form.Control type={showPassword ? 'text' : 'password'} placeholder="" name="password" value={formData.password} onChange={handleChange} required className="form-control-password" />
                  <InputGroup.Prepend className="password-eye-icon">
                    <InputGroup.Text className="password-eye-icon">{showPassword ? <BsEyeSlash onClick={() => setShowPassword(false)} /> : <BsEye onClick={() => setShowPassword(true)} />}</InputGroup.Text>
                  </InputGroup.Prepend>
                </InputGroup>
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  Mobile Number
                  <span style={{ color: 'red' }}>*</span>
                </Form.Label>
                <Form.Control type="tel" placeholder="Enter US phone number" pattern="^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required className="form-control-custom" />
              </Form.Group>

              <div className="mb-3">
                <Form.Label>
                  Preferred Method of Contact
                  <span style={{ color: 'red' }}>*</span>
                </Form.Label>
                <Form.Group className="mb-3" controlId="formBasicRadio">
                  <Form.Check inline id="call-radio" type="radio" name="prefMethodOfContact" label="Email" value="Email" checked={formData.prefMethodOfContact === 'Email'} onChange={handleChange} />
                  <Form.Check inline id="whatsapp-radio" type="radio" name="prefMethodOfContact" label="WhatsApp" value="Whatsapp" checked={formData.prefMethodOfContact === 'Whatsapp'} onChange={handleChange} />
                  <Form.Check inline id="sms-radio" type="radio" name="prefMethodOfContact" label="SMS Text" value="Message" checked={formData.prefMethodOfContact === 'Message'} onChange={handleChange} />
                </Form.Group>
              </div>

              <Form.Group>
                <Form.Label>
                  Which Jain Community do you belong to?
                  <span style={{ color: 'red' }}>*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="" name="jainCommunity" value={formData.jainCommunity} onChange={handleChange} required className="form-control-custom" />
                <Form.Text className="text-muted">
                  Please do not mention None or N/A, please ask your parents what Jain community are they related with in India and be very specific
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>
                  Upload Photo Proof of your Jain Community Certificate
                  <span style={{ color: 'red' }}>*</span>
                </Form.Label>
                <Form.Control type="file" name="jainProof" onChange={handleChange} required />
                <Form.Text className="text-muted">This is a certificate that shows you are a Jain. If you are not aware of this please ask your parents. Your application will be rejected if you don’t upload an appropriate document.</Form.Text>
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>
                  Upload a Profile Picture
                  <span style={{ color: 'red' }}>*</span>
                </Form.Label>
                <Form.Control type="file" name="profPicture" onChange={handleChange} required />
              </Form.Group>
              <br />
              <button type="submit" className="btn register-button">
                Submit
              </button>

            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
