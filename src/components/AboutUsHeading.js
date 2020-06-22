import React, { Component } from 'react'

export default class AboutUsHeading extends Component{
    render() {
        const hrcolor = {
            width:'2rem', 
            borderColor:"#FF3E06"
          };
        return(
            <div className="text-center mt-5" id="about-us">
                <h4>About Us</h4>
                <hr style={hrcolor}></hr>
            </div>
        )
    }
}



