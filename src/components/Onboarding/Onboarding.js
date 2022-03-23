import React, { useState } from 'react';
import { Country, State, City } from 'country-state-city';
import './Onboarding.scss';
import { ReactComponent as StudentLogo } from './student.svg';
import { ReactComponent as GraduateLogo } from './graduate.svg';

function Onboarding() {
  const [status, setStatus] = useState('student');
  const [countryISO, setCountryISO] = useState('');
  const [stateISO, setStateISO] = useState('');
  const [city, setCity] = useState('');
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(30);
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleFileInputChange = (event) => {
    console.log(event);
  };
  return (
    <div className="ONBOARDING card mt-3">
      <div className="card-header">
        <div className="d-inline-block align-middle">
          <small className="text-muted">{`Step ${step} of 3`}</small>
          <div>Enter your personal information</div>
        </div>
        <div className="d-inline-block w-25 align-middle float-right">
          <div className="progress">
            <div className="progress-bar bg-success" style={{ width: `${progress}%` }} role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">{progress}%</div>
          </div>
          <small className="progress-label text-muted">Profile Progress</small>
        </div>
      </div>
      <div className="card-body">
        <form>
          <div className="row">
            <div className="col-md-3 text-center">
              <img className="profile-image mb-2" onClick={handleClick} src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" alt="Profile Image" />
              <input type="text" className="form-control" placeholder="Linkedin URL *" required />
              <input type="file" ref={hiddenFileInput} onChange={handleFileInputChange} className="d-none" required />
            </div>
            <div className="col-md">
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="First name *" required />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Last name *" required />
                </div>
              </div>
              <div className="form-row mt-2">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Email Address *" required />
                </div>
              </div>
              <div className="form-row mt-2">
                <div className="col">
                  <input type="text" className="form-control" placeholder="DOB(MM/DD/YYYY) *" required />
                </div>
              </div>
              <div className="form-row mt-2">
                <div className="col">
                  <select className="custom-select" value={countryISO} onChange={(event) => { setCountryISO(event.target.value); setStateISO(''); setCity(''); }} required>
                    <option value="" disabled>Country *</option>
                    {Country.getAllCountries().map((country) => (
                      <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col">
                  <select className="custom-select" value={stateISO} onChange={(event) => { setStateISO(event.target.value); setCity(''); }} required>
                    <option value="" disabled>State *</option>
                    {State.getStatesOfCountry(countryISO).map((state) => (
                      <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-row mt-2">
                <div className="col">
                  <select className="custom-select" value={city} onChange={(event) => setCity(event.target.value)} required>
                    <option value="" disabled>City *</option>
                    {City.getCitiesOfState(countryISO, stateISO).map((stateCity) => (
                      <option key={stateCity.isoCode} value={stateCity.name}>{stateCity.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col">
                  <input type="number" className="form-control" placeholder="Zipcode *" required />
                </div>
              </div>
              <div className="form-row mt-2">
                <div className="col">
                  <input type="text" className="form-control" placeholder="University *" required />
                </div>
              </div>
              <div className="form-row mt-2">
                <div className="col">
                  <input type="number" className="form-control" placeholder="Graduation Year or Expected *" required />
                </div>
              </div>
            </div>
            <div className="col-md">
              <input type="hidden" value={status} />
              <div>Select your current status *</div>
              <div className="row">
                <div className={`col-md p-3 m-2 type-container text-center${status === 'student' ? ' active' : ''}`} onClick={() => setStatus('student')}>
                  <StudentLogo className="type-logo" />
                  <div>STUDENT</div>
                </div>
                <div className={`col-md p-3 m-2 type-container text-center${status === 'graduate' ? ' active' : ''}`} onClick={() => setStatus('graduate')}>
                  <GraduateLogo className="type-logo" />
                  <div>GRADUATE</div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Onboarding;
