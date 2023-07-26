import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { emailIcon, whatsapp } from '../../../../assets/index';
import './ContactUs.scss';
import comm from '../../../../helpers/communication';

function ContactUs() {
  const captchaRef = useRef(null);
  const [captchaResponse, setCaptchaResponse] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handleMessageChange = e => {
    setMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Validate the passwords here
    const validationErrors = {};
    if (email === '') {
      validationErrors.email = 'Email is required.';
    }
    if (name === '') {
      validationErrors.name = 'Name is required.';
    }

    if (message === '') {
      validationErrors.message = 'Message is required.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const data = {
        captchaToken: captchaResponse,
        name,
        email,
        message,
      };
      comm
        .sendPost('/contactus/verify', null, data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          // handle error
          console.error(error);
        });
      captchaRef.current.reset();
    }
  };
  const handleCaptchaChange = responseToken => {
    setCaptchaResponse(responseToken);
  };
  return (
    <div id="contact-us" className="CONTACTUS">
      <div className="text-center mt-5">
        <h4>CONTACT US</h4>
        <hr className="contact-us" />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h5>Contact Details</h5>
              <span>
                <img src={emailIcon} alt="email" />
              </span>
              <a className="emailInfo" href="mailto:jjcsausa@gmail.com">
                <strong>jjcsausa@gmail.com</strong>
              </a>
              <p className="whatsappInfo">
                <span>
                  <img src={whatsapp} alt="whatsapp" />
                </span>{' '}
                <strong>+1 (909)-333-6349 (Message Only)</strong>
              </p>
            </div>
            <br />
            <h5>OR</h5>
            <br />
            <div>
              <h5>Leave us a message</h5>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>{' '}
                      <input
                        type="text"
                        className="form-control form-style"
                        id="name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="emailId">Email Id</label>{' '}
                      <input
                        type="email"
                        className="form-control form-style"
                        id="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>{' '}
                  <textarea
                    className="form-control form-style"
                    id="message"
                    rows="5"
                  />
                </div>
                <div>
                  <ReCAPTCHA
                    sitekey="6LdKv0snAAAAAJYwxr0ilX6-_bp1aTY9e6C08DT0"
                    ref={captchaRef}
                    onChange={handleCaptchaChange}
                  />
                </div>
                <div>
                  <button type="submit" className="btn mt-2 mb-5 button-style">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contactUsImage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
