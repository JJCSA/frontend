import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  locationIcon,
  infoIcon,
  caseIcon,
  linkedIn,
  universityDegree,
  specialization,
} from '../../../../assets/index';
import ImageFormatter from '../../../../components/imageFormatter/ImageFormatter';
import './JJCSearchModal.scss';

const JJCSearchModal = props => {
  return (
    <div className="JJCSEARCH-MODAL">
      <Container fluid>
        <Row>
          <Col md={1} className="pl-0 pr-0 pt-1">
            <ImageFormatter
              cell={props.data.profilePicture}
              avatarSize="large"
            />
          </Col>
          <Col md={10} className="mt-3 ml-3">
            <div className="name-container">{props.data.name}</div>
            {props.data.city && props.data.state && (
              <div className="location-container">
                <img src={locationIcon} alt="Location" />
                {props.data.city}, {props.data.state}
              </div>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="info-container mt-3 rounded mb-3">
              <div className="mt-3 ml-2 mb-3">
                <img src={infoIcon} alt="Info" />
                <span className="info-container-headers">About Me</span>
                <hr />
              </div>
              <div className="mt-3 ml-2 mb-3">
                <span className="info-container-info">
                  {props.data.aboutMe}
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="info-container mt-3 rounded mb-3">
              <div className="mt-3 ml-2 mb-3">
                <img src={universityDegree} alt="Education" />
                <span className="info-container-headers">University Name</span>
                <hr />
              </div>
              <div className="mt-3 ml-2 mb-3">
                <span className="info-container-info">
                  {props.data.universityName}
                </span>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="info-container mt-3 rounded mb-3">
              <div className="mt-3 ml-2 mb-3">
                <img src={specialization} alt="Education" />
                <span className="info-container-headers">Field of Study</span>
                <hr />
              </div>
              <div className="mt-3 ml-2 mb-3">
                <span className="info-container-info">
                  {props.data.specialization}
                </span>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="info-container mt-3 rounded mb-3">
              <div className="mt-3 ml-2 mb-3">
                <img src={caseIcon} alt="Experience" />
                <span className="info-container-headers">Job Title</span>
                <hr />
              </div>
              <div className="mt-3 ml-2 mb-3">
                <span className="info-container-info">
                  {props.data.workRole}
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="info-container mt-3 rounded mb-3">
              <div className="mt-3 ml-2 mb-3">
                <img src={linkedIn} alt="Experience" />
                <span className="info-container-headers">LinkedIn Url</span>
                <hr />
              </div>
              <div className="mt-3 ml-2 mb-3">
                <span className="info-container-info">
                  <a
                    className="linkedIn-url"
                    href={props.data.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.data.linkedinUrl}
                  </a>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JJCSearchModal;
