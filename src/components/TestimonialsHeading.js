import React, { Component } from 'react'

export default class TestimonialsHeading extends Component{
    render() {
        const hrcolor = {
            width:'2rem', 
            borderColor:"#FF3E06"
          };
        return(
            <div className="text-center mt-5" id="testimonials">
          <h4>Testimonials</h4>
          <hr style={hrcolor}></hr>
        </div>
        )
    }
}



