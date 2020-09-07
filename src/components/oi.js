import React, { Component } from 'react'
import './ongoinginitiatives.css'
import Carousel from 'react-elastic-carousel'
import {Card, Button} from 'react-bootstrap'
export default class OI extends Component{

    render(){
        const breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2 },
            { width: 768, itemsToShow: 3 }
        ];
        const load_more_button = {
            borderColor:'#FF4020',
            color:'#FF4020'
        }
        const know_more_button = {

            color:'#FF4020'
        }
        const card_image = {
            width:'100%',
            height:'300px',
            padding:'0px',
            borderRadius: '8px 8px 0px 0px'
        }
        const card_css = {
            borderRadius:'8px'
        }
        return(
            <div style={{background: "linear-gradient(180deg, #FBFBFB 0%, #F6F6F6 100%)"}}>
                <Carousel breakPoints={breakPoints} className="py-5">
                    <Card className="border-0 mx-4" style={card_css}>
                        <Card.Img style={card_image} variant="top" src="http://localhost:3001/assets/images/faq.jpg" />
                        <Card.Body>
                            <Card.Title>FAQs - Student Welfare</Card.Title>
                            <a href='#' style={know_more_button}>Know More > </a>
                        </Card.Body>
                    </Card>

                    <Card className="border-0 mx-4" style={card_css}>
                        <Card.Img style={card_image} variant="top" src="http://localhost:3001/assets/images/housie.jpg"/>
                        <Card.Body>
                            <Card.Title>Fun Events - Housie</Card.Title>
                            <a href='#' style={know_more_button}>Know More > </a>
                        </Card.Body>
                    </Card>

                    <Card className="border-0 mx-4" style={card_css}>
                        <Card.Img style={card_image} variant="top" src="http://localhost:3001/assets/images/helpdesk.jpg"/>
                        <Card.Body>
                            <Card.Title>HelpDesk - Job/Referal/Food</Card.Title>
                            <a href='#' style={know_more_button}>Know More > </a>
                        </Card.Body>
                    </Card>
                    <Card className="border-0 mx-4" style={card_css}>
                        <Card.Img style={card_image} variant="top" src="http://localhost:3001/assets/images/healthyliving.jpg"/>
                        <Card.Body>
                            <Card.Title>Healthy Living</Card.Title>
                            <a href='#' style={know_more_button}>Know More > </a>
                        </Card.Body>
                    </Card>

                </Carousel>
                <div style={{textAlign:"center"}} className="pb-5">
                    <button type="button" className="btn" style={load_more_button}>Donate Now</button>
                </div>
            </div>
        )
    }
}