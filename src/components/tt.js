import React, { Component } from 'react'
import './testimonials.css'
import Carousel from 'react-elastic-carousel'
import {Card, Button} from 'react-bootstrap'
export default class TT extends Component{

    render(){
        const breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2 },
            { width: 768, itemsToShow: 3 },
            { width: 1150, itemsToShow: 4, itemsToScroll: 2 }
        ];
        const card_style = {
            backgroundColor:'#F6F6F6',
            borderRadius:'8px'
        }
        const card_title = {
            textAlign:'center'
        }
        const card_footer = {
            backgroundColor: '#F6F6F6',
            textAlign: 'right',
            color:'black',

        }
        const card_text = {
            textAlign:'justify',
            // fontSize:'14px',
            color:'#333333',
            fontFamily:'Noto Sans',
            fontStyle:'italic'
        }
        return(
            <Carousel breakPoints={breakPoints}>


                <Card className="border-0 mx-2" style={card_style}>
                    <Card.Body>
                        <Card.Title style={card_title}>Food Assistance</Card.Title>
                        <Card.Text style={card_text}>"Thank you for the support shown by you to all the extended family of Jains. I got all the necessary items which will keep me fine for at least next one month or more. I feel so proud to be a jain and feel so happy that there are people here away from home to look after me."
                            </Card.Text>
                        <br/> <br/> <br/> <br/>
                        <Card.Footer style={card_footer}>
                            <small className="text-dark">-Anonymous</small>
                        </Card.Footer>
                    </Card.Body>
                </Card>

                <Card className="border-0 mx-2" style={card_style}>
                    <Card.Body>
                        <Card.Title style={card_title}>Job Assistance</Card.Title>
                        <Card.Text style={card_text}>"As the pandemic continues it is difficult to find jobs and get interview due to few openings and competitive environment with experienced people as they are laid off. In this crucial time JJCSA-USA came up Job assistance program through which I got an opportunity to connect with our Jain colleagues and get referrals that increases the opportunity of getting interviews. I thank JJC for this initiative."</Card.Text>
                        <br/>
                        <Card.Footer style={card_footer}>
                            <small className="text-dark">-Anonymous</small>
                        </Card.Footer>
                    </Card.Body>
                </Card>

                <Card className="border-0 mx-2" style={card_style}>
                    <Card.Body>
                        <Card.Title style={card_title}>Rental Assistance </Card.Title>
                        <Card.Text style={card_text}> "I would like to thank you from the bottom of my heart for coming up with such a Nobel thought and for helping everyone in need. I had requested for Rental assistance and I was reached out by JJCSA-USA Representative and I received the amount."

                        </Card.Text>
                        <br/> <br/> <br/><br/>
                        <Card.Footer style={card_footer}>
                            <small className="text-dark">-Anonymous</small>
                        </Card.Footer>
                    </Card.Body>
                </Card>

                <Card className="border-0 mx-2" style={card_style}>
                    <Card.Body>
                        <Card.Title style={card_title}>Job Assistance</Card.Title>
                        <Card.Text style={card_text}> "Thank you so much for helping us out during times like these, when the job market is not great. You guys are doing a great job. I got a great help while searching job in USA. "</Card.Text>

                        <br/> <br/> <br/> <br/><br/>
                        <Card.Footer style={card_footer}>
                            <small className="text-dark">-Anonymous</small>
                        </Card.Footer>
                    </Card.Body>
                </Card>
                
                <Card className="border-0 mx-2" style={card_style}>
                    <Card.Body>
                        <Card.Title style={card_title}>Ongoing Initiatives</Card.Title>
                        <Card.Text style={card_text}>"Thank you very much JJC Mumbai and JJCSA-USA for coming up with the initiative, which helped all the students across USA. I feel having my extended family here in USA. I am grateful to be part of this association."</Card.Text>
                        <br/> <br/> <br/> <br/>
                        <Card.Footer style={card_footer}>
                            <small className="text-dark">-Anonymous</small>
                        </Card.Footer>
                    </Card.Body>
                </Card>


            </Carousel>
        )
    }
}