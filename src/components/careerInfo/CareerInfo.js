import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CareerInfo.scss';
import {companyIcon, universityIcon} from '../../assets/index.js'

const CareerInfo = ({ careerType, careerName, careerDescription, careerStart, careerEnd }) => {
    return (
        <Container fluid={true}>
            <Row>
                <Col md={1} className="pl-1">
                    {careerType ==="Education" ? <img src={universityIcon} alt="University" /> : <img src={companyIcon} alt="Company" />}
                </Col>
                <Col md={11}>
                    <Container fluid={true}>
                        <Row>
                            {careerName}
                        </Row>
                        <Row>
                            {careerDescription}
                        </Row>
                        <Row>
                            {careerStart}{' - '}{careerEnd}
                        </Row>
                    </Container>
                </Col>
            </Row>
            <br/>
        </Container>
    );
};


CareerInfo.propTypes = {
    careerType: PropTypes.string,
    careerName: PropTypes.string,
    careerDescription: PropTypes.string,
    careerStart: PropTypes.string,
    careerEnd:PropTypes.string
};


export default CareerInfo;
