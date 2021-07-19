import React from 'react';
import { emailIcon } from '../../../../assets/index';
import './ContactUs.scss';

function ContactUs() {
  return (
    <div id="contact-us" className="CONTACTUS">
      <div className="text-center mt-5">
        <h4>Contact Us</h4>
        <hr className="contact-us" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h5>Contact Details</h5>
              <span>
                <img src={emailIcon} alt="email" />
              </span>
              <a className="emailInfo" href="mailto:jjcsausa@gmail.com">
                jjcsausa@gmail.com
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h5>Leave us a message</h5>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control form-style"
                        id="name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="emailId">Email Id</label>
                      <input
                        type="email"
                        className="form-control form-style"
                        id="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    className="form-control form-style"
                    id="message"
                    rows="5"
                  />
                </div>
              </form>
            </div>
            <div>
              <button type="button" className="btn mt-2 mb-5 button-style">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
