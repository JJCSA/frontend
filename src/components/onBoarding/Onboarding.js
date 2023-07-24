import React, { useContext, useState } from 'react';
import { Country, State, City } from 'country-state-city';
import { useAuthUser, useAuthHeader } from 'react-auth-kit';
import comm from '../../helpers/communication';
import GlobalContext from '../../store/GlobalContext';
import './Onboarding.scss';
import {
  StudentLogo,
  GraduateLogo,
  ProfessionalLogo,
  EducationLogo,
} from '../../assets/index';

function Onboarding() {
  const { globalState, setGlobalState } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    ...useAuthUser()(),
    userStudent: true,
    street: '',
    linkedinUrl: '',
    volunteeringInterest: '',
    aboutMe: '',
    dateOfBirth: '',
    gender: '',
    state: '',
    city: '',
    zip: '',
    country: 'US',
    education: [
      {
        universityName: '',
        gradMonth: 0,
        gradYear: '',
        specialization: '',
        degree: '',
      },
    ],
    workExperience: [
      {
        companyName: '',
        role: '',
        location: '',
        totalExp: '',
      },
    ],
  });
  const [volunteeringInterest, setVolunteeringInterest] = useState([]);
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);
  const token = useAuthHeader()();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const handleInputChange = (...events) => {
    const newState = { ...formData };
    events.forEach(ev => {
      const attributes = ev.target.name.split('.');
      let newStateProperty = newState;
      attributes.forEach((attribute, index) => {
        if (index < attributes.length - 1) {
          newStateProperty = newStateProperty[attribute];
        } else {
          newStateProperty[attribute] = ev.target.value;
        }
      });
    });
    setFormData(newState);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (step === 1) {
      setStep(2);
      setProgress(100);
    } else {
      const reqBody = {
        ...formData,
      };
      if (reqBody.userStudent) {
        reqBody.workExperience = [];
      }
      comm.sendPut('/user/profile', token, reqBody).then(newProfile => {
        setGlobalState({
          ...globalState,
          profile: newProfile.data,
        });
      });
    }
  };
  const handleBack = () => {
    setStep(step - 1);
    setProgress(50);
  };
  const handleVolOnChange = ev => {
    let updatedInterests;
    if (ev.target.checked) {
      updatedInterests = volunteeringInterest.concat([ev.target.value]);
    } else {
      updatedInterests = volunteeringInterest.filter(
        interest => interest !== ev.target.value
      );
    }
    setVolunteeringInterest(updatedInterests);
    setFormData({
      ...formData,
      volunteeringInterest: updatedInterests.join(','),
    });
  };

  const part1Html = (
    <div className="card-body">
      <div className="row">
        <div className="col-md-3 text-center">
          <img
            className="profile-image mb-2"
            src={formData.profilePicture}
            alt="Profile"
          />
          <input
            name="linkedinUrl"
            type="text"
            className="form-control mt-2 mb-2"
            placeholder="Linkedin URL *"
            value={formData.linkedinUrl}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="aboutMe"
            type="text"
            className="form-control mt-2 mb-2"
            placeholder="About Me *"
            value={formData.aboutMe}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md">
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name *"
                value={formData.firstName}
                required
                disabled
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name *"
                value={formData.lastName}
                required
                disabled
              />
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Email Address *"
                value={formData.email}
                required
                disabled
              />
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="col">
              <input
                name="dateOfBirth"
                type="text"
                className="form-control"
                placeholder="DOB *"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                onFocus={ev => {
                  ev.currentTarget.type = 'date';
                }}
                required
              />
            </div>
            <div className="col">
              <select
                name="gender"
                className="custom-select"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Gender *
                </option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
                <option value="PREFER_NOT_TO_SAY">Prefer not to say</option>
              </select>
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="col">
              <input
                name="street"
                type="text"
                className="form-control"
                placeholder="Street *"
                value={formData.street}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="col">
              <select
                name="country"
                className="custom-select"
                value={formData.country}
                required
              >
                <option value={formData.country} disabled>
                  United States
                </option>
              </select>
            </div>
            <div className="col">
              <select
                name="state"
                className="custom-select"
                value={formData.state}
                onChange={event => {
                  handleInputChange(event, {
                    target: { name: 'city', value: '' },
                  });
                }}
                required
              >
                <option value="" disabled>
                  State *
                </option>
                {State.getStatesOfCountry(formData.country).map(state => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="col">
              <select
                name="city"
                className="custom-select"
                value={formData.city}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  City *
                </option>
                {City.getCitiesOfState(formData.country, formData.state).map(
                  stateCity => (
                    <option key={stateCity.isoCode} value={stateCity.name}>
                      {stateCity.name}
                    </option>
                  )
                )}
              </select>
            </div>
            <div className="col">
              <input
                name="zip"
                type="number"
                className="form-control"
                placeholder="Zipcode *"
                value={formData.zip}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="col-md">
          <div>Select your current status *</div>
          <div className="row">
            <div
              className={`col-md p-3 m-2 type-container text-center${
                formData.userStudent ? ' active' : ''
              }`}
              role="button"
              tabIndex="0"
              onClick={() =>
                handleInputChange({
                  target: { name: 'userStudent', value: true },
                })
              }
            >
              <img src={StudentLogo} className="type-logo" alt="student-logo" />
              <div>STUDENT</div>
            </div>
            <div
              className={`col-md p-3 m-2 type-container text-center${
                formData.userStudent ? '' : ' active'
              }`}
              role="button"
              tabIndex="0"
              onClick={() =>
                handleInputChange({
                  target: { name: 'userStudent', value: false },
                })
              }
            >
              <img src={GraduateLogo} className="type-logo" alt="grad-logo" />
              <div>PROFESSIONAL</div>
            </div>
          </div>
          <div> Volunteering Interests</div>
          <div className="row">
            <div className="form-check form-check-inline">
              <input
                name="vol-check"
                className="form-check-input"
                type="checkbox"
                value="ADMIN"
                checked={volunteeringInterest.includes('ADMIN')}
                id="admin-vol"
                onChange={handleVolOnChange}
              />
              <label className="form-check-label" htmlFor="admin-vol">
                Admin
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                name="vol-check"
                className="form-check-input"
                type="checkbox"
                value="ALUMNIWELFARE"
                checked={volunteeringInterest.includes('ALUMNIWELFARE')}
                id="alumni-vol"
                onChange={handleVolOnChange}
              />
              <label className="form-check-label" htmlFor="alumni-vol">
                Alumni welfare
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                name="vol-check"
                className="form-check-input"
                type="checkbox"
                value="EVENTS"
                checked={volunteeringInterest.includes('EVENTS')}
                id="event-vol"
                onChange={handleVolOnChange}
              />
              <label className="form-check-label" htmlFor="events-vol">
                Events
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                name="vol-check"
                className="form-check-input"
                type="checkbox"
                value="MARKETING"
                checked={volunteeringInterest.includes('MARKETING')}
                id="marketing-vol"
                onChange={handleVolOnChange}
              />
              <label className="form-check-label" htmlFor="marketing-vol">
                Marketing
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                name="vol-check"
                className="form-check-input"
                type="checkbox"
                value="STUDENTWELFARE"
                checked={volunteeringInterest.includes('STUDENTWELFARE')}
                id="student-vol"
                onChange={handleVolOnChange}
              />
              <label className="form-check-label" htmlFor="student-vol">
                Student welfare
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                name="vol-check"
                className="form-check-input"
                type="checkbox"
                value="WEBSITE"
                checked={volunteeringInterest.includes('WEBSITE')}
                id="website-vol"
                onChange={handleVolOnChange}
              />
              <label className="form-check-label" htmlFor="website-vol">
                Website
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const part2Html = (
    <div className="card-body">
      <div className="row">
        <div className="col-md text-center education-container">
          <h4>Educational details</h4>
          <img
            src={EducationLogo}
            className="type-logo mt-2"
            alt="Education-logo"
          />
          <input
            name="education.0.universityName"
            type="text"
            className="form-control mt-2"
            placeholder="School/University *"
            value={formData.education[0].universityName}
            onChange={handleInputChange}
            required
          />
          <input
            name="education.0.specialization"
            type="text"
            className="form-control mt-2"
            placeholder="Specialization *"
            value={formData.education[0].specialization}
            onChange={handleInputChange}
            required
          />
          <input
            name="education.0.degree"
            type="text"
            className="form-control mt-2"
            placeholder="Degree *"
            value={formData.education[0].degree}
            onChange={handleInputChange}
            required
          />
          <select
            name="education.0.gradMonth"
            className="custom-select mt-2"
            value={formData.education[0].gradMonth}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Grad Month *
            </option>
            {months.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </select>
          <input
            name="education.0.gradYear"
            type="number"
            className="form-control mt-2"
            placeholder="Grad Year *"
            value={formData.education[0].gradYear}
            onChange={handleInputChange}
            min="1900"
            max="2100"
            required
          />
        </div>
        <div className="col-md text-center profession-container">
          <h4>Professional details</h4>
          <img
            src={ProfessionalLogo}
            className="type-logo mt-2"
            alt="professional-logo"
          />
          <input
            name="workExperience.0.companyName"
            type="text"
            className="form-control mt-2"
            placeholder={`Company Name${formData.userStudent ? '' : ' *'}`}
            value={formData.workExperience[0].companyName}
            onChange={handleInputChange}
            required={!formData.userStudent}
          />
          <input
            name="workExperience.0.role"
            type="text"
            className="form-control mt-2"
            placeholder={`Role${formData.userStudent ? '' : ' *'}`}
            value={formData.workExperience[0].role}
            onChange={handleInputChange}
            required={!formData.userStudent}
          />
          <input
            name="workExperience.0.location"
            type="text"
            className="form-control mt-2"
            placeholder={`Location${formData.userStudent ? '' : ' *'}`}
            value={formData.workExperience[0].location}
            onChange={handleInputChange}
            required={!formData.userStudent}
          />
          <input
            name="workExperience.0.totalExp"
            type="text"
            className="form-control mt-2"
            placeholder={`Experience (years)${
              formData.userStudent ? '' : ' *'
            }`}
            value={formData.workExperience[0].totalExp}
            onChange={handleInputChange}
            required={!formData.userStudent}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="ONBOARDING card mt-3">
      <div className="card-header">
        <div className="d-inline-block align-middle">
          <small className="text-muted">{`Step ${step} of 2`}</small>
          <div>
            {step === 1
              ? 'Enter your personal information'
              : 'Enter your educational and professional information'}
          </div>
        </div>
        <div className="d-inline-block w-25 align-middle float-right">
          <div className="progress">
            <div
              className="progress-bar bg-success"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {`${progress}%`}
            </div>
          </div>
          <small className="progress-label text-muted">Profile Progress</small>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {step === 1 ? part1Html : part2Html}
        <div className="card-footer">
          <div className="buttons">
            {step !== 1 && (
              <button
                className="back-button"
                type="button"
                onClick={handleBack}
              >
                BACK
              </button>
            )}
            <button className="submit-button" type="submit">
              {step === 1 ? 'PROCEED' : 'SUBMIT'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Onboarding;
