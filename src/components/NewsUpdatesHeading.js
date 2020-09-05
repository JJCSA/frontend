import React, { Component } from 'react'

export default class NewsUpdatesHeading extends Component{
    render() {
        const hrcolor = {
            width:'2rem', 
            borderColor:"#FF3E06"
          };
        return(
            <div className="text-center mt-5" id="news-updates">
            <h4>News Updates</h4>
            <hr style={hrcolor}></hr>
        </div>
        )
    }
}



