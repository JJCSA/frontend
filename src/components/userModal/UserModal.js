import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToggleButton, ToggleButtonGroup, Button } from 'react-bootstrap';
import {
  locationIcon, infoIcon, emailIcon, phoneIcon, caseIcon, bookIcon, tickIcon, communityIcon, attachmentIcon, AdminIcon
} from '../../assets/index';
import ImageFormatter from '../imageFormatter/ImageFormatter';
import UserStatusFormatter from '../userStatusFormatter/UserStatusFormatter';
import CareerInfo from '../careerInfo/CareerInfo';
import * as Constants from '../../utils/constants';
import PhoneNumberFormatter from '../phoneNumberFormatter/PhoneNumberFormatter';
import './UserModal.scss';
import comm from '../../helpers/communication';
import GlobalContext  from '../../../src/store/GlobalContext'

const ACCEPT = 'Accept';
const REJECT = 'Reject';
class UserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      rejectReason: '',
      pendingAction: false,
      isAdmin: this.props.data.userRole === 'ADMIN' ? true : false
    };
    this.changeStatus = this.changeStatus.bind(this);
    this.setRejectReason = this.setRejectReason.bind(this);
    this.submitStatusUpdate = this.submitStatusUpdate.bind(this);
    this.getCommunityProof = this.getCommunityProof.bind(this);
    this.updateUserRole = this.updateUserRole.bind(this);
  }

  static contextType = GlobalContext;

  setRejectReason(e) {
    this.setState({...this.state, rejectReason: e.target.value });
  }

  async getCommunityProof(e) {
    e.preventDefault();
    const response = await comm.get(`/admin/users/${this.props.data.id}/communityProof`, this.props.token, null);
    window.open(response.data, '_blank');
  }

  async submitStatusUpdate(e) {
    e.preventDefault();
    const params = {
      userId: this.props.data.id,
      status: this.state.status,
    };
    const response = await comm.sendPut('/admin/users/status', this.props.token, params);
    this.props.onsubmitUpdate({ ...this.props.data, userStatus: this.state.status });
  }

  changeStatus(status) {
    this.setState({...this.state, status, pendingAction: true });
    if (status === ACCEPT) {
      this.setState({...this.state, status: Constants.userStatus.NEWUSER });
      this.setState({...this.state, rejectReason: '' });
    } else {
      this.setState({...this.state, status: Constants.userStatus.REJECTED });
    }
  }

  updateUserRole(e) {
    e.preventDefault();
    console.log("State before:", this.state);
     this.setState({...this.state, isAdmin: !this.state.isAdmin }, () => {
      console.log("State updated:", this.state);
      // console.log("this.props.data.userRole: ", this.props.data.userRole === 'ADMIN' ? true : false);
    });
  }

  render() {
    const globalState = this.context;
    return (
      <div className="modal-user">
        <Container fluid>
          <Row>
            <Col md={2} className="pl-0 pr-0 pt-1">
              <ImageFormatter cell={this.props.data.profilePicture} avatarSize="large" />
            </Col>
            <Col md={6} className="ml-2">
              <Container fluid>
                <Row>
                  <span className="name-container">{this.props.data.name}</span>
                </Row>
                <Row>
                  {
                  (this.props.data.city && this.props.data.state)
                    ? (
                      <div>
                        <img src={locationIcon} alt="Location" />
                        <span className="info-container-info">
                          {this.props.data.city}
                          ,
                          {this.props.data.state}
                        </span>
                      </div>
                    )
                    : <></>
                }
                </Row>
                <Row>
                  <div className="mt-1">
                    {UserStatusFormatter(this.props.data.userStatus)}
                  </div>
                </Row>
              </Container>
            </Col>

          </Row>
          <Row>
            <div className="info-container mt-3 rounded mb-3">
              <div className="divOutside">
                <div className="mt-3 ml-2 mb-3">
                  <img src={infoIcon} alt="Info" />
                  <span className="info-container-headers"> Contact Details</span>
                </div>
              </div>
              <div className="divOutside last">
                <div className="mt-3 ml-2 mb-3">
                  <img src={emailIcon} alt="Email" />
                  <span className="info-container-info">
                    {' '}
                    {this.props.data.email}
                  </span>
                  <img src={phoneIcon} alt="Phone" className="ml-5" />
                  <span className="info-container-info">
                    {' '}
                    {PhoneNumberFormatter(this.props.data.mobileNumber)}
                  </span>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div className="info-container mt-1 rounded mb-3">
              <div className="divOutside">
                <div className="mt-3 ml-2 mb-3">
                  <img src={phoneIcon} alt="Info" />
                  <span className="info-container-headers"> Preferred Method of Contact</span>
                </div>
              </div>
              <div className="divOutside last">
                <div className="mt-3 ml-2 mb-3">
                  <>
                    <img src={tickIcon} alt="Tick" />
                    <span className="info-container-info">
                      {' '}
                      {this.props.data.contactMethod}
                    </span>
                    <span className="ml-4" />
                  </>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div className="info-container mt-1 rounded mb-3">
              <div className="divOutside">
                <div className="mt-3 ml-2 mb-3">
                  <img src={communityIcon} alt="Community" />
                  <span className="info-container-headers"> Jain Community</span>
                </div>
              </div>
              <div className="divOutside last">
                <div className="mt-3 ml-2 mb-3">
                  <span className="info-container-info">
                    {' '}
                  {this.props.data.communityName}
                  </span>
                  <Button variant="outline-secondary" className="ml-4" onClick={this.getCommunityProof}>
                  <span className="info-container-info"><img src={attachmentIcon} alt="attachment"/> Certificate proof</span>
                  </Button>
                </div>
              </div>
            </div>
          </Row>
          { this.props.data.userStatus === Constants.userStatus.PENDING
            ? (
              <>
                <Row>
                  <div className="card border-0 info-container">
                    <ToggleButtonGroup type="radio" name="options" value={this.state.status} onChange={this.changeStatus}>
                      <ToggleButton value={ACCEPT} className="Btn-accept rounded mb-0">Accept</ToggleButton>
                      <ToggleButton value={REJECT} className="Btn-reject rounded mb-0">Reject</ToggleButton>
                    </ToggleButtonGroup>
                    {/* <form onSubmit={this.submitStatusUpdate}> */}
                    <div>
                      {this.state.status === Constants.userStatus.REJECTED
                                            && <input type="text" value={this.state.rejectReason} className="form-control mt-2" placeholder="Reason for rejecting" onChange={this.setRejectReason} required />}
                      {this.state.pendingAction && <Button type="submit" variant="outline-primary" className="mt-1, Btn-submit" onClick={this.submitStatusUpdate}>Submit Updates</Button>}
                    </div>
                    {/* </form> */}
                  </div>
                </Row>
              </>
            )
            : (
              <>
                <Row>
                  <Col md={6} style={{ paddingLeft: '0px' }}>
                    <div className="info-container rounded mb-3">
                      <div id="Content1" className="divOutside">
                        <div className="ml-2 mb-3" style={{ paddingTop: '10px' }}>
                          <img src={caseIcon} alt="Experience" />
                          <span className="info-container-headers"> Experience Details</span>
                        </div>
                      </div>
                      <div className="divOutside">
                        <div className="mt-3 ml-2 mb-3">
                          {this.props.data.workExperience.map((experience_row, index) => (
                            <CareerInfo careerType="Experience" careerName={experience_row.company_name} careerDescription={experience_row.role} careerStart={experience_row.start_date} careerEnd={experience_row.end_date} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} style={{ paddingRight: '0px' }}>
                    <div className="info-container rounded mb-3">
                      <div className="divOutside">
                        <div className="ml-2 mb-3" style={{ paddingTop: '10px' }}>
                          <img src={bookIcon} alt="Education" />
                          <span className="info-container-headers"> Education Details</span>
                        </div>
                      </div>
                      <div className="divOutside">
                        <div className="mt-3 ml-2 mb-3">
                          {this.props.data.educationList.map((education_row, index) => (
                            <CareerInfo careerType="Education" careerName={education_row.universityName} careerDescription={education_row.degree} careerStart={education_row.start_date} careerEnd={education_row.end_date} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                {(this.props.data.userStatus === Constants.userStatus.ACTIVE) && (this.props.data.userRole !== Constants.userTypes.SUPERADMIN) && (globalState.globalState.profile.userRole === Constants.userTypes.SUPERADMIN) ? (
                  <Row>
                    <div className="info-container mt-1 rounded mb-3">
                      <div className="divOutside">
                        <div className="mt-3 ml-2 mb-3">
                          <img src={AdminIcon} alt="Info" />
                          <span className="info-container-headers"> Assign Admin Role</span>
                          <input type="checkbox" checked={this.state.isAdmin} className="admin-checkbox" onChange={(e) => this.updateUserRole(e)}  />
                        </div>
                      </div>
                    </div>
                  </Row>
                )
                  : (
                    <>
                    </>
                  )}
                {/* {this.props.data.userRole === 'ADMIN' ? true : false !== this.state.isAdmin ?
                <div className='row info-container' style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px', backgroundColor: '#f7f7f7' }}>
                  <span className="info-container-headers"> Are you sure you want to continue? </span>
                  <button style={{
                    marginLeft: '8px',
                    marginRight: '8px',
                    padding: '8px 16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }} onClick={() => console.log("Yes button clicked")}>Yes</button>
                  <button style={{
                    padding: '8px 16px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }} onClick={() => console.log("No button clicked")}>No</button>
                </div> : "" } */}
              </>
            )}
        </Container>
      </div>
    );
  }
}

UserModal.contextType = GlobalContext;

export default UserModal;
