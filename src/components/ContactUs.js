import React, { Component } from 'react'
import {Container ,Col, Row,Form} from 'react-bootstrap'
import './contactus.css'
export default class ContactUs extends Component {
    render(){

        const send_message_button = {
            // height: '40px',
            borderColor:'#FF4020',
            color:'#FF4020'
        }
        return(
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h5>Contact Details</h5>
                            {/*<a href="jjcsausa@gmail.com"> <img src="http://localhost:3001/assets/images/email.svg" /></a>*/}
                            <span> <img src="http://localhost:3001/assets/images/email.svg" /></span><a href="mailto:jjcsausa@gmail.com" style={{color:'black'}}> jjcsausa@gmail.com </a>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h5>Leave us a message</h5>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="Text" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Email Id</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows="3" style={{backgroundColor:'#F6F6F6'}}/>
                                </Form.Group>
                            </Form>

                        </div>
                        <div style={{textAlign:"left"}}>
                            <button type="button" className="btn mt-2 mb-5" style={send_message_button}>Send Message</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}