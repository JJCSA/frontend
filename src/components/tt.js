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
        return(
            <Carousel breakPoints={breakPoints}>


                <Card className="border-0" >

                    <Card.Body>
                        <Card.Title>FAQs - Student Welfare</Card.Title>
                    </Card.Body>
                </Card>

                <Card className="border-0">

                    <Card.Body>
                        <Card.Title>FAQs - Student Welfare</Card.Title>
                    </Card.Body>
                </Card>

                <Card className="border-0">

                    <Card.Body>
                        <Card.Title>FAQs - Student Welfare</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="border-0">

                    <Card.Body>
                        <Card.Title>FAQs - Student Welfare</Card.Title>
                    </Card.Body>
                </Card>


            </Carousel>
        )
    }
}