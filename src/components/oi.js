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
        const card_text = {
            textAlign:'justify'
        }
        // const card_body = {
        //     height: '325px'
        // }
        return(
            <div style={{background: "linear-gradient(180deg, #FBFBFB 0%, #F6F6F6 100%)"}}>
                <Carousel breakPoints={breakPoints} className="py-5">
                    <Card className="border-0 mx-4" style={card_css}>
                        <Card.Img style={card_image} variant="top" src="http://localhost:3001/assets/images/faq.jpg" />
                        <Card.Body >
                            <Card.Title>FAQs - Student Welfare</Card.Title>
                            <Card.Text style={card_text}>The purpose of writing FAQs is to address a larger audience with the most common problems they face, right from preparing for entrance exams to come to the US to the point they land a job. Multiple topics are covered and each topic has its own set of FAQs. Topics include, Cover Letter, Resume building, Job Search, Networking etc.
                            </Card.Text>
                            <br/> <br/> <br/>
                            <a href='#' style={know_more_button}>Know More > </a>

                        </Card.Body>
                    </Card>

                    <Card className="border-0 mx-4" style={card_css}>
                        <Card.Img style={card_image} variant="top" src="http://localhost:3001/assets/images/housie.jpg"/>
                        <Card.Body>
                            <Card.Title>Fun Events</Card.Title>
                            <Card.Text style={card_text}>The purpose of this event was to bring our members together virtually and have some entertainment. During these times it was necessary to refresh our minds with such events.
                                Several games were played and everyone had a good opportunity to know other members as well.

                            </Card.Text>
                            <br/> <br/> <br/> <br/>
                            <a href='#' style={know_more_button}>Know More > </a>
                        </Card.Body>
                    </Card>

                    <Card className="border-0 mx-4" style={card_css}>
                        <Card.Img style={card_image} variant="top" src="http://localhost:3001/assets/images/helpdesk.jpg"/>
                        <Card.Body>
                            <Card.Title>HelpDesk - Job/Referal/Food</Card.Title>
                            <Card.Text style={card_text}>As the pandemic kicked in, a lot of our Jain students and professionals started facing difficulties to meet with their day to day needs. Individuals lost their jobs, could not find new jobs, faced difficulties to pay their rents and also it was not easy to go outside to buy groceries. Through this HelpDesk initiative, members from the USA and India contributed a capable amount due to which we were able to make this a success. We were able to help a total of 110 individuals for a total amount of approximately $21,000.

                            </Card.Text>
                            <a href='#' style={know_more_button}>Know More > </a>
                        </Card.Body>
                    </Card>
                    <Card className="border-0 mx-4" style={card_css}>
                        <Card.Img style={card_image} variant="top" src="http://localhost:3001/assets/images/healthyliving.jpg"/>
                        <Card.Body>
                            <Card.Title>Healthy Living</Card.Title>
                            <Card.Text style={card_text}>The purpose of this event was to spread awareness about how important is Healthy Living. The event was conducted by professionals and attendees were given tips about living in a healthy way especially during this pandemic. There was a Q&A session where a lot of questions were addressed which helped all our attendees.


                            </Card.Text>
                            <br/> <br/> <br/>
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