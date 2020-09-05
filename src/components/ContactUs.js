import React, { Component } from 'react'
import {Container ,Col, Row,Form} from 'react-bootstrap'
export default class ContactUs extends Component {
    render(){

        return(
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h6>Contact Details</h6>

                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h6>Leave us a message</h6>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="Text" placeholder="Enter Your Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Email Id</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Your Email Id" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                            </Form>

                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}