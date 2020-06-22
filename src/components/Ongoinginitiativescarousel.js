import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'


import planAndAdvice from "./images/planAndAdvice.png"

export default class Ongoinginitiativescarousel extends Component{
    render() {
        return(
            <Carousel>
                <Carousel.Item >
                    <img src={planAndAdvice} alt="First slide"/>
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item >
                    <img
                      src="https://www.jainjagruti.com/images/logo_download.jpg"
                      alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item >
                    <img
                      src="https://www.jainjagruti.com/images/logo_download.jpg"
                      alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        )
    }
}