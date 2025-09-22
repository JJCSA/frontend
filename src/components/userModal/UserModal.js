import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToggleButton, ToggleButtonGroup, Button } from 'react-bootstrap';
import {
  locationIcon,
  infoIcon,
  emailIcon,
  phoneIcon,
  caseIcon,
  bookIcon,
  tickIcon,
  communityIcon,
  AdminIcon,
} from '../../assets/index';
import ImageFormatter from '../imageFormatter/ImageFormatter';
import UserStatusFormatter from '../userStatusFormatter/UserStatusFormatter';
import CareerInfo from '../careerInfo/CareerInfo';
import * as Constants from '../../utils/constants';
import PhoneNumberFormatter from '../phoneNumberFormatter/PhoneNumberFormatter';
import './UserModal.css';
import comm from '../../helpers/communication';
import GlobalContext from '../../store/GlobalContext';

const ACCEPT = 'Accept';
const REJECT = 'Reject';

const UserModal = ({ data, token, onsubmitUpdate }) => {
  const [status, setStatus] = useState('');
  const [rejectReason, setRejectReason] = useState('');
  const [pendingAction, setPendingAction] = useState(false);
  const [isAdmin, setIsAdmin] = useState(data.userRole === 'ADMIN');
  const [regionalContact, setRegionalContact] = useState(
    data.isRegionalContact
  );

  const globalState = useContext(GlobalContext);

  const changeStatus = statusOption => {
    setStatus(statusOption);
    setPendingAction(true);
    if (statusOption === ACCEPT) {
      setStatus(Constants.userStatus.NEWUSER);
      setRejectReason('');
    } else {
      setStatus(Constants.userStatus.REJECTED);
    }
  };

  const submitStatusUpdate = async e => {
    e.preventDefault();
    // const params = {
    //   userId: data.id,
    //   status,
    //   ...(status === 'REJECTED' ? { rejectReason } : ''),
    // };
    // const responseOption = await comm.sendPut(
    //   '/admin/users/status',
    //   token,
    //   params
    // );
    onsubmitUpdate({ ...data, userStatus: status });
  };
  const updateUserRole = async e => {
    if (e === 'no') {
      setIsAdmin(data.userRole === 'ADMIN');
    } else if (e === 'yes') {
      if (data.userRole === 'ADMIN') {
        await comm
          .sendDelete(`/super-admin/user/${data.id}/role/ADMIN`, token, '')
          .then(() => {
            onsubmitUpdate({ ...data, userRole: 'USER' });
          });
      } else {
        const params = {
          role: 'ADMIN',
        };
        await comm
          .sendPost(`/super-admin/user/${data.id}/role`, token, params)
          .then(() => {
            onsubmitUpdate({ ...data, userRole: 'ADMIN' });
          });
      }
    }
  };

  const updateRegionalContact = async e => {
    if (e === 'no') {
      setRegionalContact(false);
    } else if (e === 'yes') {
      if (regionalContact) {
        await comm
          .sendPost(
            `/admin/users/${data.id}/regional-contact?isRegionalContact=true`,
            token
          )
          .then(() => {
            onsubmitUpdate({ ...data, isRegionalContact: true });
          });
      } else {
        await comm
          .sendPost(
            `/admin/users/${data.id}/regional-contact?isRegionalContact=false`,
            token
          )
          .then(() => {
            onsubmitUpdate({ ...data, isRegionalContact: false });
          });
      }
    }
  };

  return (
    <div className="modal-user">
      <Container fluid>
        <Row>
          <Col md={2} className="pl-0 pr-0 pt-1">
            <ImageFormatter cell={data.profilePicture} avatarSize="large" />
          </Col>
          <Col md={6} className="ml-2">
            <Container fluid>
              <Row>
                <span className="name-container">{data.name}</span>
              </Row>
              <Row>
                {data.city && data.state ? (
                  <div>
                    <img src={locationIcon} alt="Location" />
                    <span className="info-container-info">
                      {data.city},{data.state}
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </Row>
              <Row>
                <div className="mt-1">
                  {UserStatusFormatter(data.userStatus)}
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
                <span className="info-container-info"> {data.email}</span>
                <img src={phoneIcon} alt="Phone" className="ml-5" />
                <span className="info-container-info">
                  {' '}
                  {PhoneNumberFormatter(data.mobileNumber)}
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
                <span className="info-container-headers">
                  {' '}
                  Preferred Method of Contact
                </span>
              </div>
            </div>
            <div className="divOutside last">
              <div className="mt-3 ml-2 mb-3">
                <>
                  <img src={tickIcon} alt="Tick" />
                  <span className="info-container-info">
                    {' '}
                    {data.contactMethod}
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
                  {data.communityName}
                </span>
              </div>
            </div>
          </div>
        </Row>
        {data.userStatus === Constants.userStatus.PENDING ? (
          <>
            <Row>
              <div className="card border-0 info-container">
                <ToggleButtonGroup
                  type="radio"
                  name="options"
                  value={status}
                  onChange={changeStatus}
                >
                  <ToggleButton
                    value={ACCEPT}
                    className="Btn-accept rounded mb-0"
                  >
                    Accept
                  </ToggleButton>
                  <ToggleButton
                    value={REJECT}
                    className="Btn-reject rounded mb-0"
                  >
                    Reject
                  </ToggleButton>
                </ToggleButtonGroup>
                <div>
                  {status === Constants.userStatus.REJECTED && (
                    <input
                      type="text"
                      value={rejectReason}
                      className="form-control mt-2"
                      placeholder="Reason for rejecting"
                      onChange={e => setRejectReason(e.target.value)}
                      required
                    />
                  )}
                  {pendingAction && (
                    <Button
                      type="submit"
                      variant="outline-primary"
                      className="mt-1, Btn-submit"
                      onClick={submitStatusUpdate}
                    >
                      Submit Updates
                    </Button>
                  )}
                </div>
              </div>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <Col md={6} style={{ paddingLeft: '0px' }}>
                <div className="info-container rounded mb-3">
                  <div id="Content1" className="divOutside">
                    <div className="ml-2 mb-3" style={{ paddingTop: '10px' }}>
                      <img src={caseIcon} alt="Experience" />
                      <span className="info-container-headers">
                        {' '}
                        Experience Details
                      </span>
                    </div>
                  </div>
                  <div className="divOutside">
                    <div className="mt-3 ml-2 mb-3">
                      {data.workExperience.map((experienceRow, index) => (
                        <CareerInfo
                          key={experienceRow.id || index}
                          careerType="Experience"
                          careerName={experienceRow.companyName}
                          careerDescription={experienceRow.role}
                          careerStart={experienceRow.location}
                          careerEnd={experienceRow.totalExp}
                        />
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
                      <span className="info-container-headers">
                        {' '}
                        Education Details
                      </span>
                    </div>
                  </div>
                  <div className="divOutside">
                    <div className="mt-3 ml-2 mb-3">
                      {data.educationList.map((educationRow, index) => (
                        <CareerInfo
                          key={educationRow.id || index}
                          careerType="Education"
                          careerName={educationRow.universityName}
                          careerDescription={educationRow.degree}
                          careerStart={educationRow.gradMonth}
                          careerEnd={educationRow.gradYear}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            {data.userStatus === Constants.userStatus.ACTIVE &&
              data.userRole !== Constants.userTypes.SUPERADMIN &&
              globalState.globalState.profile.userRole ===
                Constants.userTypes.SUPERADMIN && (
                <Row>
                  <div className="info-container mt-1 rounded mb-3">
                    <div className="divOutside">
                      <div className="mt-3 ml-2 mb-3">
                        <img src={AdminIcon} alt="Info" />
                        <span className="info-container-headers">
                          Assign Admin Role
                        </span>
                        <input
                          type="checkbox"
                          checked={isAdmin}
                          className="admin-checkbox"
                          onChange={e => setIsAdmin(e.target.checked)}
                        />{' '}
                      </div>
                    </div>
                  </div>
                </Row>
              )}
            {(data.userRole === 'ADMIN') !== isAdmin ? (
              <div className="row info-container confirmation_popup">
                <span className="info-container-headers">
                  {' '}
                  Are you sure you want to continue?{' '}
                </span>
                <button
                  type="button"
                  className="yes-button"
                  onClick={() => updateUserRole('yes')}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="no-button"
                  onClick={() => updateUserRole('no')}
                >
                  No
                </button>
              </div>
            ) : (
              ''
            )}
            {data.userStatus === Constants.userStatus.ACTIVE &&
              (globalState.globalState.profile.userRole ===
                Constants.userTypes.SUPERADMIN ||
                globalState.globalState.profile.userRole ===
                  Constants.userTypes.ADMIN) && (
                <Row>
                  <div className="info-container mt-1 rounded mb-3">
                    <div className="divOutside">
                      <div className="mt-3 ml-2 mb-3">
                        <img src={AdminIcon} alt="Info" />
                        <span className="info-container-headers">
                          Assign Regional Contact
                        </span>
                        <input
                          type="checkbox"
                          checked={regionalContact}
                          className="admin-checkbox"
                          onChange={e => setRegionalContact(e.target.checked)}
                        />{' '}
                      </div>
                    </div>
                  </div>
                </Row>
              )}
            {data.isRegionalContact !== regionalContact ? (
              <div className="row info-container confirmation_popup">
                <span className="info-container-headers">
                  {' '}
                  Are you sure you want to continue?{' '}
                </span>
                <button
                  type="button"
                  className="yes-button"
                  onClick={() => updateRegionalContact('yes')}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="no-button"
                  onClick={() => updateRegionalContact('no')}
                >
                  No
                </button>
              </div>
            ) : (
              ''
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default UserModal;
