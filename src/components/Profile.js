import React, { useState, useContext } from 'react';
import { Country, State, City } from 'country-state-city';
import GlobalContext from '../store/GlobalContext';
import { useAuthHeader } from 'react-auth-kit';
import comm from '../helpers/communication';
import './Profile.scss';

function Profile() {
  const { globalState, setGlobalState } = useContext(GlobalContext);
  const [profile, setProfile] = useState({...globalState.profile});
  const token = useAuthHeader()();

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const formatDatePickerInput = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().substr(0, 10);
  };

  const handleInputChange = (...events) => {
    console.log(profile);
    const newState = { ...profile };
    events.forEach((ev) => {
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
    setProfile(newState);
  };
  const handleSubmit = (event) => {
    console.log(profile);
    event.preventDefault();
    const reqBody = {
      ...profile,
    };
    comm.sendPut('/user/profile', token, reqBody).then((newProfile) => {
      console.log(newProfile);
      setGlobalState({
        ...globalState,
        profile: newProfile.data,
      });
    });
  };
  const handleReset = () => {
    setProfile({...globalState.profile});
  };

  return (
    <div className="PROFILE container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="profile-image-container col">
            <img className="profile-image" src={profile.profilePicture} alt="Profile" />
          </div>
        </div>
        <h6>Personal Info</h6>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="First name *" value={profile.firstName} required disabled />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Last name *" value={profile.lastName} required disabled />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Email Address *" value={profile.email} required disabled />
          </div>
          <div className="col">
            <input type="date" className="form-control" placeholder="DOB *" value={formatDatePickerInput(profile.dateOfBirth)} required disabled />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input name="street" type="text" className="form-control" placeholder="Street *" value={profile.street} onChange={handleInputChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <select name="country" className="custom-select" value={profile.country} onChange={(event) => { handleInputChange(event, { target: { name: 'state', value: '' } }, { target: { name: 'city', value: '' } }); }} required>
              <option value="" disabled>Country *</option>
              {Country.getAllCountries().map((country) => (
                <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
              ))}
            </select>
          </div>
          <div className="col">
            <select name="state" className="custom-select" value={profile.state} onChange={(event) => { handleInputChange(event, { target: { name: 'city', value: '' } }); }} required>
              <option value="" disabled>State *</option>
              {State.getStatesOfCountry(profile.country).map((state) => (
                <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <select name="city" className="custom-select" value={profile.city} onChange={handleInputChange} required>
              <option value="" disabled>City *</option>
              {City.getCitiesOfState(profile.country, profile.state).map((stateCity) => (
                <option key={stateCity.isoCode} value={stateCity.name}>{stateCity.name}</option>
              ))}
            </select>
          </div>
          <div className="col">
            <input name="zip" type="number" className="form-control" placeholder="Zipcode *" value={profile.zip} onChange={handleInputChange} required />
          </div>
        </div>
        <h6>Education details</h6>
        <div className="form-row">
          <div className="col">
            <input name="education.0.universityName" type="text" className="form-control" placeholder="School/University *" value={profile.education[0].universityName} onChange={handleInputChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input name="education.0.specialization" type="text" className="form-control" placeholder="Specialization *" value={profile.education[0].specialization} onChange={handleInputChange} required />
          </div>
          <div className="col">
            <input name="education.0.degree" type="text" className="form-control" placeholder="Degree *" value={profile.education[0].degree} onChange={handleInputChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <select name="education.0.gradMonth" className="custom-select" value={profile.education[0].gradMonth} onChange={handleInputChange} required>
              <option value="" disabled>Grad Month *</option>
              {months.map((month, index) => (
                <option key={month} value={index}>{month}</option>
              ))}
            </select>
          </div>
          <div className="col">
            <input name="education.0.gradYear" type="number" className="form-control" placeholder="Grad Year *" value={profile.education[0].gradYear} onChange={handleInputChange} required />
          </div>
        </div>
        {!profile.userStudent && (
          <>
            <h6>Experience details</h6>
            <div className="form-row">
              <div className="col">
                <input name="workExperience.0.companyName" type="text" className="form-control" placeholder="Company *" value={profile.workExperience[0].companyName} required disabled />
              </div>
              <div className="col">
                <input name="workExperience.0.role" type="text" className="form-control" placeholder="Role *" value={profile.workExperience[0].role} required disabled />
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <input name="workExperience.0.location" type="text" className="form-control" placeholder="Location *" value={profile.workExperience[0].location} required disabled />
              </div>
              <div className="col">
                <input name="workExperience.0.totalExp" type="text" className="form-control" placeholder="Total Experience *" value={profile.workExperience[0].totalExp} required disabled />
              </div>
            </div>
          </>
        )}
        <input type="submit" class="btn btn-primary save-button" value="Save Details" />
        <button type="button" class="btn btn-outline-secondary reset-button" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default Profile;
