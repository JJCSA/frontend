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
import './JJCSearchModal.css';

// Fix: Destructure 'data' from 'props'
const JJCSearchModal = ({ data }) => {
  // Fix: Destructure properties from 'data' for cleaner access
  const {
    profilePicture,
    name,
    city,
    state,
    aboutMe,
    universityName,
    specialization: fieldOfStudy, // Renamed to avoid conflict with imported 'specialization' icon
    workRole,
    linkedinUrl,
  } = data;

  return (
    <div className="JJCSEARCH-MODAL">
      <Container fluid>
        <Row>
          <Col md={1} className="pl-0 pr-0 pt-1">
            <ImageFormatter
              cell={profilePicture} // Used destructured variable
              avatarSize="large"
            />
          </Col>
          <Col md={10} className="mt-3 ml-4">
            <div className="name-container">{name}</div>{' '}
            {/* Used destructured variable */}
            {city &&
              state && ( // Used destructured variables
                <div className="location-container">
                  <img src={locationIcon} alt="Location" />
                  {city}, {state} {/* Used destructured variables */}
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
                  {aboutMe} {/* Used destructured variable */}
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
                  {universityName} {/* Used destructured variable */}
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
                  {fieldOfStudy} {/* Used destructured variable */}
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
                  {workRole} {/* Used destructured variable */}
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
                    href={linkedinUrl} // Used destructured variable
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {linkedinUrl} {/* Used destructured variable */}
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
