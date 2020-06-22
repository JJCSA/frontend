import React, { Component } from 'react'

export default class OngoingInitiativesHeading extends Component{
    render() {
        const hrcolor = {
            width:'2rem', 
            borderColor:"#FF3E06"
          };
        return(
            <div className="text-center mt-5" id="our-initiatives">
                <h4>Ongoing Initiatives</h4>
                <hr style={hrcolor}></hr>
            </div>
        )
    }
}



