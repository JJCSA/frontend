import React, {Component} from 'react'
import {FaLinkedin, FaFacebookF, FaGithub, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa';
// import {EmailShareButton} from 'react-share';
// import {EmailIcon} from 'react-share';
// import $ from "jquery"

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid pl-sm-5 py-3" id="contact"
                     style={{background: "#1B4078", textAlign: 'center'}}>
                    <p style={{fontSize: '50px', fontFamily: 'Nunito Sans', color: 'white'}}> STAY CONNECTED WITH US</p>
                    {/* <div className="pb-3">
                        <MdMood style={{color:'white', fontSize:'35px'}}/>
                        </div> */}
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">

                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex justify-content-around pt-3 pb-5">
                            <a href="https://www.facebook.com/usjainstudents/" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF style={{color: 'white', fontSize: '35px'}}/></a>

                            <a href="https://www.instagram.com/jjc_sa_usa/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram style={{color: 'white', fontSize: '35px'}}/></a>

                            <a href="https://www.linkedin.com/in/jjc-us-student-association/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin style={{color: 'white', fontSize: '35px'}}/></a>

                            <a href="https://twitter.com/jjcsausa" target="_blank" rel="noopener noreferrer">
                                <FaTwitter style={{color: 'white', fontSize: '35px'}}/></a>

                            <a href="https://www.youtube.com/channel/UCERP8n9IzMXT6eqZtUQVovw" target="_blank" rel="noopener noreferrer">
                                <FaYoutube style={{color: 'white', fontSize: '35px'}}/></a>
                        </div>
                    </div>
                    <div>
                            <p style={{
                                color: 'white',
                                fontSize: '20px',
                                fontFamily: 'Lucida Console, Monaco, monospace'
                            }}>&#169; JJCSA-USA</p>
                    </div>
                    {/* <form className="form-inline pb-3" style={{textAlign:'center'}}>
                            <button href="#" className="form-control btn btn-dark btn-block" type="button" style={join_now_button}>Join Student Association Now</button>
                        </form>  */}
                </div>
                {/*div of cards here */}


            </div>
        );
    }
}