import React, { Component } from 'react'
//import { Link, withRouter } from 'react-router-dom'
import {Link} from 'react-scroll'


class Navbar extends Component {
  // logOut(e) {
  //   e.preventDefault()
  //   localStorage.removeItem('usertoken')
  //   this.props.history.push(`/`)
  // }

  render() {
    //const ScrollLink = Scroll.ScrollLink
    // const loginRegLink = (
    //   <ul className="navbar-nav">
    //     <li className="nav-item">
    //       <Link to="/login" className="nav-link">
    //         Login
    //       </Link>
    //     </li>
    //      <li className="nav-item">
    //       <Link to="/register" className="nav-link">
    //         Register
    //       </Link>
    //     </li>
    //   </ul>
    // )

    // const userLink = (
    //   <ul className="navbar-nav">
    //     <li className="nav-item">
    //       <Link to="/profile" className="nav-link">
    //         User
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <a href="" onClick={this.logOut.bind(this)} className="nav-link">
    //         Logout
    //       </a>
    //     </li>
    //   </ul>
    // )

    return (
      <nav className="navbar navbar-light navbar-expand-sm rounded">
          <a className="navbar-brand" href="#">
              <img src="https://www.jainjagruti.com/images/logo_download.jpg" style={{width:'40px'}}></img>
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
          <div className="container">
              
              <div className="collapse navbar-collapse" id="myTogglerNav">
                  <div className="navbar-nav">
                      <Link 
                          activeClass='active'
                          className="nav-item nav-link"
                          to="about-us" 
                          spy={true} 
                          smooth={true} 
                          duration={1000}
                      > About Us </Link> 
                      <Link 
                          activeClass='active'
                          className="nav-item nav-link"
                          to="our-initiatives" 
                          spy={true} 
                          smooth={true} 
                          duration={1000}
                      > Ongoing Initiatives </Link> 
                      <Link 
                          activeClass='active'
                          className="nav-item nav-link"
                          to="testimonials" 
                          spy={true} 
                          smooth={true} 
                          // offset={-70}
                          duration={1000}
                      > Testimonials </Link>    
                      <Link 
                          activeClass='active'
                          className="nav-item nav-link"
                          to="contact-us" 
                          spy={true} 
                          smooth={true} 
                          // offset={-70}
                          duration={1000}
                      > Contact Us </Link> 
                      <Link 
                          activeClass='active'
                          className="nav-item nav-link"
                          to="contact-us" 
                          spy={true} 
                          smooth={true} 
                          // offset={-70}
                          duration={1000}
                      > JJC Mumbai </Link>    
                  </div>
                  
              </div>
              
          </div>
          <button className="btn btn-dark" type="button" style={{backgroundColor:'#FF4020', borderColor:'#FF4020'}}>Login</button>
          <button className="btn btn-light" type="button" style={{borderColor:'#FF4020', color:'#FF4020'}}>Login</button>
      </nav>
    )
  }
}
export default Navbar
