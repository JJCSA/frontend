import React, { Component } from "react";
import axios from 'axios';
// import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import {locationIcon, infoIcon, emailIcon, phoneIcon, caseIcon, bookIcon, tickIcon, communityIcon, attachmentIcon} from "../../assets/index.js";
import ImageFormatter from "../imageFormatter/ImageFormatter";
import StatusFormatter from "../statusFormatter/StatusFormatter";
import CareerInfo from "../careerInfo/CareerInfo"
import * as Constants from "../../utils/constants";
import PhoneNumberFormatter from "../phoneNumberFormatter/PhoneNumberFormatter"
import {ToggleButton, ToggleButtonGroup, Button} from 'react-bootstrap';
import './UserModal.scss'

const ACCEPT = "Accept";
const REJECT = "Reject";

class UserModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            "status":"",
            "rejectReason":""
        }
        this.changeStatus = this.changeStatus.bind(this);
        this.setRejectReason = this.setRejectReason.bind(this);
        this.submitStatusUdate = this.submitStatusUdate.bind(this);
    }

    changeStatus(status) {
        this.setState({"status":status});
        if(status === ACCEPT) {
            this.setState({"status":Constants.userStatus.APPROVED})
            this.setState({"rejectReason":""});
        } else {
            this.setState({"status":Constants.userStatus.REJECTED})
        }
    }

    setRejectReason(e) {
        this.setState({"rejectReason":e.target.value});
    }

    submitStatusUdate(e) {
        e.preventDefault();

        switch(this.state.status) {
            case Constants.userStatus.APPROVED: 
                console.log("Approved user_id:", this.props.data.user_id);
                let copiedObject = JSON.parse(JSON.stringify(this.props.data))
                copiedObject.status = this.state.status
                axios.put(Constants.apiRootURL + '/users/' + this.props.data.user_id, copiedObject)
                .then(response => response.data)
                .then(result => this.props.onsubmitUpdate(result))
                break;
            case Constants.userStatus.REJECTED:
                console.log("Deleting user_id:", this.props.data.user_id)
                axios({
                    method: 'DELETE',
                    url: Constants.apiRootURL + '/users/' + this.props.data.user_id
                })
                .then(response => response.data)
                .then(result => this.props.onsubmitUpdate(result));
                break;
            default:
                alert("Please choose a valid option")
        }
    }

    render() {
        return (
            <div className="modal-user">
                <Container fluid={true}>
                    <Row>
                        <Col md={2} className="pl-0 pr-0 pt-1">
                                <ImageFormatter cell={this.props.data.image} avatarSize="large"/>
                        </Col>
                        <Col md={6} className="ml-2">
                            <Container fluid>
                                <Row>
                                    <span className="name-container">{this.props.data.name}</span>
                                </Row>
                                <Row>
                                    <div>
                                        <img src={locationIcon} alt="Location" />
                                        <span className="info-container-info">{this.props.data.city},{this.props.data.state}</span>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="mt-1">
                                        {StatusFormatter(this.props.data.status)}
                                    </div>        
                                </Row>
                            </Container>  
                        </Col>

                    </Row>
                    <Row>
                            <div className="info-container mt-3 rounded mb-3">
                                <div className="divOutside">
                                    <div className="mt-3 ml-2 mb-3">
                                        <img src={infoIcon} alt="Info"/>
                                        <span className="info-container-headers"> Contact Details</span>
                                    </div>
                                </div>
                                <div className="divOutside last">
                                    <div className="mt-3 ml-2 mb-3">
                                            <img src={emailIcon} alt="Email" />
                                            <span className="info-container-info"> {this.props.data.email}</span>
                                            <img src={phoneIcon} alt="Phone" className="ml-5"/>
                                            <span className="info-container-info"> {PhoneNumberFormatter(this.props.data.number)}</span>
                                    </div>
                                </div>
                            </div>
                    </Row>
                    { this.props.data.status === Constants.userStatus.PENDING ?
                    <>
                        <Row>
                                <div className="info-container mt-1 rounded mb-3">
                                    <div className="divOutside">
                                        <div className="mt-3 ml-2 mb-3">
                                            <img src={phoneIcon} alt="Info"/>
                                            <span className="info-container-headers"> Preferred Method of Contact</span>
                                        </div>
                                    </div>
                                    <div className="divOutside last">
                                        <div className="mt-3 ml-2 mb-3">
                                                {this.props.data.preferred_contact_method.map(function(method) {
                                                    return (
                                                    <>
                                                        <img src={tickIcon} alt="Tick" />
                                                        <span className="info-container-info"> {method}</span>
                                                        <span className="ml-4"/>
                                                    </>
                                                )})}
                                        </div> 
                                    </div>
                                </div>
                        </Row>
                        <Row>
                                <div className="info-container mt-1 rounded mb-3">
                                    <div className="divOutside">
                                        <div className="mt-3 ml-2 mb-3">
                                            <img src={communityIcon} alt="Community"/>
                                            <span className="info-container-headers"> Jain Community</span>
                                        </div>
                                    </div>
                                    <div className="divOutside last">
                                        <div className="mt-3 ml-2 mb-3">
                                                <span className="info-container-info"> {this.props.data.jain_community}</span>
                                                <Button variant="outline-secondary" className="ml-4">
                                                    <>
                                                        <img src={attachmentIcon} alt="Attachment"/>  
                                                        <span className="info-container-info"> Certificate proof</span>
                                                    </>
                                                </Button>
                                        </div>
                                    </div>
                                </div>
                        </Row>
                        <Row>
                            <div className="card border-0 info-container">
                                    <ToggleButtonGroup type="radio" name="options" value={this.state.status} onChange={this.changeStatus}>
                                        <ToggleButton value={ACCEPT} className="Btn-accept rounded mb-0">Accept</ToggleButton>
                                        <ToggleButton value={REJECT} className="Btn-reject rounded mb-0">Reject</ToggleButton>
                                    </ToggleButtonGroup>
                                    <form onSubmit={this.submitStatusUdate}>
                                        {this.state.status === Constants.userStatus.REJECTED && 
                                        <input type="text" value={this.state.rejectReason} className="form-control mt-2" placeholder="Reason for rejecting" onChange={this.setRejectReason} required/>}
                                        <Button type="submit" variant="outline-primary" className="mt-1, Btn-submit">Submit Updates</Button>
                                    </form>
                            </div>
                        </Row>
                    </> :
                    <>
                        <Row>
                            <Col md={6} style={{paddingLeft:"0px"}}>
                                <div className="info-container rounded mb-3">
                                    <div id="Content1" className="divOutside">
                                        <div className="ml-2 mb-3" style={{paddingTop:"10px"}}>
                                            <img src={caseIcon} alt="Experience"/>
                                            <span className="info-container-headers"> Experience Details</span>
                                        </div>
                                    </div>
                                    <div className="divOutside">
                                        <div className="mt-3 ml-2 mb-3">
                                            {this.props.data.experience.map((experience_row, index)=>{
                                                return (
                                                <CareerInfo careerType="Experience" careerName={experience_row.company_name} careerDescription={experience_row.role} careerStart={experience_row.start_date} careerEnd={experience_row.end_date} />
                                            )})}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} style={{paddingRight:"0px"}}>
                                <div className="info-container rounded mb-3">
                                    <div className="divOutside">
                                        <div className="ml-2 mb-3" style={{paddingTop:"10px"}}>
                                            <img src={bookIcon} alt="Education"/>
                                            <span className="info-container-headers"> Education Details</span>
                                        </div>
                                    </div>
                                    <div className="divOutside">
                                        <div className="mt-3 ml-2 mb-3">
                                        {this.props.data.education.map((education_row, index)=>{
                                                return (
                                                <CareerInfo careerType="Education" careerName={education_row.university_name} careerDescription={education_row.course} careerStart={education_row.start_date} careerEnd={education_row.end_date} />
                                            )})}
                                        </div> 
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </> }
                </Container> 
            </div>
        );
    }
}

export default UserModal;
