import React, { Component } from 'react'
//import { Link, withRouter } from 'react-router-dom'
import {Link} from 'react-scroll'
import "./navbarhoverstyle.css"

class Navbar extends Component {

  render() {
    const login_button = {
        backgroundColor:'#FF4020',
        borderColor:'#FF4020'
    }
    const donate_button = {
        borderColor:'#FF4020',
        color:'#FF4020'
    }
   const nav_heading = {
        fontSize:'14px'
   }
    return (
      <nav className="navbar navbar-light bg-light navbar-expand-sm rounded fixed-top position-sticky mb-2">
          <a className="navbar-brand ml-sm-5 px-3" href="https://www.jainjagruti.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://www.jainjagruti.com/images/logo_download.jpg" alt="JJC logo" style={{width:'70px'}}/>
          </a>
          <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#myTogglerNav"
              aria-controls="myTogglerNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
          ><span className="navbar-toggler-icon" />
          </button>
          
              
              <div className="collapse navbar-collapse" id="myTogglerNav">
                  <div className="navbar-nav mr-auto my-sm-2">
                      <Link
                        data-toggle="collapse"
                        data-target=".navbar-collapse.show"
                        offset={-350}
                        activeClass='active'
                        className="nav-item nav-link active navbarhover px-3"
                        to="about-us"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        style={nav_heading}
                      > About Us </Link>
                    <Link
                        data-toggle="collapse"
                        data-target=".navbar-collapse.show"
                        offset={-350}
                          activeClass='active'
                          className="nav-item nav-link active navbarhover px-3"
                          to="our-initiatives"
                          spy={true}
                          smooth={true}

                          duration={1000}
                      > Ongoing Initiatives </Link>
                    <Link
                        data-toggle="collapse"
                        data-target=".navbar-collapse.show"
                        offset={-350}
                          activeClass='active'
                          className="nav-item nav-link active navbarhover px-3"
                          to="testimonials" 
                          spy={true} 
                          smooth={true} 
                          // offset={-70}
                          duration={1000}
                      > Testimonials </Link>

                      <Link
                          data-toggle="collapse"
                          data-target=".navbar-collapse.show"
                          offset={-350}
                          activeClass='active'
                          className="nav-item nav-link active navbarhover px-3"
                          to="news-updates"
                          spy={true}
                          smooth={true}
                          duration={1000}
                      > News Updates </Link>

                    <Link
                        data-toggle="collapse"
                        data-target=".navbar-collapse.show"
                        offset={-350}
                          activeClass='active'
                          className="nav-item nav-link active navbarhover px-3"
                          to="contact-us"
                          spy={true}
                          smooth={true}
                          duration={1000}
                      > Contact Us </Link>
                      <a className=" jjclink my-2 px-3" href="https://www.jainjagruti.com/" target="_blank" rel="noopener noreferrer">JJC Mumbai</a>
                  </div>
                        <form className="form-inline">
                            <button className=" form-control btn btn-dark btn-block mr-sm-3" type="button" style={login_button}>Login</button>
                            <button className=" form-control btn btn-light btn-block my-2 my-sm-0 mr-sm-5" type="button" style={donate_button}>Donate</button>
                        </form>
              </div>
          
          
      </nav>
    )
  }
}
export default Navbar
