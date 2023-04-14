import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ToggleButton, ToggleButtonGroup, Button } from "react-bootstrap";
import {
  locationIcon,
  infoIcon,
  emailIcon,
  phoneIcon,
  caseIcon,
  bookIcon,
  tickIcon,
  communityIcon,
  attachmentIcon,
  AdminIcon,
} from "../../assets/index";
import ImageFormatter from "../imageFormatter/ImageFormatter";
import UserStatusFormatter from "../userStatusFormatter/UserStatusFormatter";
import CareerInfo from "../careerInfo/CareerInfo";
import * as Constants from "../../utils/constants";
import PhoneNumberFormatter from "../phoneNumberFormatter/PhoneNumberFormatter";
import "./UserModal.scss";
import comm from "../../helpers/communication";
import GlobalContext from "../../../src/store/GlobalContext";

const ACCEPT = "Accept";
const REJECT = "Reject";

const UserModal = (props) => {
  const [status, setStatus] = useState("");
  const [rejectReason, setRejectReason] = useState("");
  const [pendingAction, setPendingAction] = useState(false);
  const [isAdmin, setIsAdmin] = useState(props.data.userRole === "ADMIN");

  const globalState = useContext(GlobalContext);

  const changeStatus = (status) => {
    setStatus(status);
    setPendingAction(true);
    if (status === ACCEPT) {
      setStatus(Constants.userStatus.NEWUSER);
      setRejectReason("");
    } else {
      setStatus(Constants.userStatus.REJECTED);
    }
  };

  const submitStatusUpdate = async (e) => {
    e.preventDefault();
    const params = {
      userId: props.data.id,
      status,
    };
    const response = await comm.sendPut(
      "/admin/users/status",
      props.token,
      params
    );
    props.onsubmitUpdate({ ...props.data, userStatus: status });
  };

  const getCommunityProof = async (e) => {
    e.preventDefault();
    const response = await comm.get(
      `/admin/users/${props.data.id}/communityProof`,
      props.token,
      null
    );
    window.open(response.data, "_blank");
  };

  const updateUserRole = async (e) => {
    if (e === "no") {
      setIsAdmin(props.data.userRole === "ADMIN");
    } else if (e === "yes") {
      if (props.data.userRole === "ADMIN") {
        await comm
          .sendDelete(
            `/super-admin/user/${props.data.id}/role/ADMIN`,
            props.token,
            ""
          )
          .then(() => {
            props.onsubmitUpdate({ ...props.data, userRole: "USER" });
          });
      } else {
        const params = {
          role: "ADMIN",
        };
        await comm
          .sendPost(
            `/super-admin/user/${props.data.id}/role`,
            props.token,
            params
          )
          .then(() => {
            props.onsubmitUpdate({ ...props.data, userRole: "ADMIN" });
          });
      }
    }
  };

  return (
    <div className="modal-user">
      <Container fluid>
        <Row>
          <Col md={2} className="pl-0 pr-0 pt-1">
            <ImageFormatter
              cell={props.data.profilePicture}
              avatarSize="large"
            />
          </Col>
          <Col md={6} className="ml-2">
            <Container fluid>
              <Row>
                <span className="name-container">{props.data.name}</span>
              </Row>
              <Row>
                {props.data.city && props.data.state ? (
                  <div>
                    <img src={locationIcon} alt="Location" />
                    <span className="info-container-info">
                      {props.data.city},{props.data.state}
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </Row>
              <Row>
                <div className="mt-1">
                  {UserStatusFormatter(props.data.userStatus)}
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
                <span className="info-container-info"> {props.data.email}</span>
                <img src={phoneIcon} alt="Phone" className="ml-5" />
                <span className="info-container-info">
                  {" "}
                  {PhoneNumberFormatter(props.data.mobileNumber)}
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
                  {" "}
                  Preferred Method of Contact
                </span>
              </div>
            </div>
            <div className="divOutside last">
              <div className="mt-3 ml-2 mb-3">
                <>
                  <img src={tickIcon} alt="Tick" />
                  <span className="info-container-info">
                    {" "}
                    {props.data.contactMethod}
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
                  {" "}
                  {props.data.communityName}
                </span>
                {process.env.SHOW_COMMUNITY_PROOF ? (
                  <Button
                    variant="outline-secondary"
                    className="ml-4"
                    onClick={getCommunityProof}
                  >
                    <span className="info-container-info">
                      <img src={attachmentIcon} alt="attachment" />
                      Certificate proof
                    </span>
                  </Button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </Row>
        {props.data.userStatus === Constants.userStatus.PENDING ? (
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
                      onChange={(e) => setRejectReason(e.target.value)}
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
              <Col md={6} style={{ paddingLeft: "0px" }}>
                <div className="info-container rounded mb-3">
                  <div id="Content1" className="divOutside">
                    <div className="ml-2 mb-3" style={{ paddingTop: "10px" }}>
                      <img src={caseIcon} alt="Experience" />
                      <span className="info-container-headers">
                        {" "}
                        Experience Details
                      </span>
                    </div>
                  </div>
                  <div className="divOutside">
                    <div className="mt-3 ml-2 mb-3">
                      {props.data.workExperience.map(
                        (experience_row, index) => (
                          <CareerInfo
                            key={index}
                            careerType="Experience"
                            careerName={experience_row.company_name}
                            careerDescription={experience_row.role}
                            careerStart={experience_row.start_date}
                            careerEnd={experience_row.end_date}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} style={{ paddingRight: "0px" }}>
                <div className="info-container rounded mb-3">
                  <div className="divOutside">
                    <div className="ml-2 mb-3" style={{ paddingTop: "10px" }}>
                      <img src={bookIcon} alt="Education" />
                      <span className="info-container-headers">
                        {" "}
                        Education Details
                      </span>
                    </div>
                  </div>
                  <div className="divOutside">
                    <div className="mt-3 ml-2 mb-3">
                      {props.data.educationList.map((education_row, index) => (
                        <CareerInfo
                          key={index}
                          careerType="Education"
                          careerName={education_row.universityName}
                          careerDescription={education_row.degree}
                          careerStart={education_row.start_date}
                          careerEnd={education_row.end_date}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            {props.data.userStatus === Constants.userStatus.ACTIVE &&
              props.data.userRole !== Constants.userTypes.SUPERADMIN &&
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
                          onChange={(e) => setIsAdmin(e.target.checked)}
                        />{" "}
                      </div>
                    </div>
                  </div>
                </Row>
              )}
            {(props.data.userRole === "ADMIN") !== isAdmin ? (
              <div
                className="row info-container confirmation_popup"
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "10px",
                  backgroundColor: "#f7f7f7",
                }}
              >
                <span className="info-container-headers">
                  {" "}
                  Are you sure you want to continue?{" "}
                </span>
                <button
                  className="yes-button"
                  onClick={() => updateUserRole("yes")}
                >
                  Yes
                </button>
                <button
                  className="no-button"
                  onClick={() => updateUserRole("no")}
                >
                  No
                </button>
              </div>
            ) : (
              ""
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default UserModal;
