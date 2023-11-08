import React from 'react';
import { State, City } from 'country-state-city';
import { Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DefaultProfile from '../../assets/images/avatar-default.webp';
import {
  StudentLogo,
  GraduateLogo,
  ProfessionalLogo,
  EducationLogo,
} from '../../assets/index';

export const Form1 = props => {
  return (
    <div className="card-body">
      <div className="row">
        <div className="col-md-3 text-center">
          <img
            className="profile-image mb-2"
            src={
              props.values.profilePicture !== 'localUrl'
                ? props.values.profilePicture
                : DefaultProfile
            }
            alt="Profile"
          />
          <Field
            name="linkedinUrl"
            type="text"
            className="form-control mt-2 mb-2"
            placeholder="Linkedin URL *"
            value={props.values.linkedinUrl}
          />
          <ErrorMessage name="linkedinUrl" component="div" className="error" />

          <Field
            name="aboutMe"
            as="textarea"
            className="form-control mt-2 mb-2"
            placeholder="About Me *"
            value={props.values.aboutMe}
          />
          <ErrorMessage name="aboutMe" component="div" className="error" />
        </div>
        <div className="col-md">
          <div className="form-row mt-2">
            <div className="col">
              {/* text-center */}
              {/* className="faq-text" */}
              {/* class="col-md p-3 m-2 type-container text-center active" */}
              <div class="note">Note: If you are incoming students from India please use your <b><i>university address</i></b> until you have your address in USA. 
              Please do not forget to update your <b><i>apartment address</i></b> once you are here</div>
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="col">
              <Field
                name="firstName"
                type="text"
                className="form-control"
                placeholder="First name *"
                value={props.values.firstName}
                disabled
              />
            </div>
            <div className="col">
              <Field
                name="lastName"
                type="text"
                className="form-control"
                placeholder="Last name *"
                value={props.values.lastName}
                disabled
              />
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="col">
              <Field
                name="email"
                type="text"
                className="form-control mt-2"
                placeholder="Email Address *"
                value={props.values.email}
                disabled
              />
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="col">
              <Field
                name="dateOfBirth"
                type="date"
                className="form-control"
                placeholder="DOB *"
                value={props.values.dateOfBirth}
              />
              <ErrorMessage
                name="dateOfBirth"
                component="div"
                className="error"
              />
            </div>
            <div className="col">
              <Field name="gender" as="select" className="custom-select">
                <option value="" disabled>
                  Gender *
                </option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
                <option value="PREFER_NOT_TO_SAY">Prefer not to say</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="error" />
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="col">
              <Field
                name="street"
                type="text"
                className="form-control mt-2"
                placeholder="Street *"
              />
              <ErrorMessage name="street" component="div" className="error" />
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="col">
              <Field name="country" as="select" className="custom-select">
                <option value="US">United States</option>
              </Field>
              <ErrorMessage name="country" component="div" className="error" />
            </div>
            <div className="col">
              <Field name="state" as="select" className="custom-select">
                <option value="" disabled>
                  State *
                </option>
                {State.getStatesOfCountry(props.values.country).map(state => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="state" component="div" className="error" />
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="col">
              <Field name="city" as="select" className="custom-select">
                <option value="" disabled>
                  City *
                </option>
                {City.getCitiesOfState(
                  props.values.country,
                  props.values.state
                ).map(stateCity => {
                  return (
                    <option key={stateCity.name} value={stateCity.name}>
                      {stateCity.name}
                    </option>
                  );
                })}
              </Field>
              <ErrorMessage name="city" component="div" className="error" />
            </div>
            <div className="col">
              <Field
                name="zip"
                type="text"
                className="form-control"
                placeholder="Zipcode *"
              />
              <ErrorMessage name="zip" component="div" className="error" />
            </div>
          </div>
        </div>
        <div className="col-md">
          <div>Select your current status *</div>
          <div className="row">
            <div
              className={`col-md p-3 m-2 type-container text-center${
                props.values.userStudent ? ' active' : ''
              }`}
              role="button"
              tabIndex="0"
              onClick={() => props.setFieldValue('userStudent', true)}
            >
              <img alt="student-logo" src={StudentLogo} className="type-logo" />
              <div>STUDENT</div>
            </div>
            <div
              className={`col-md p-3 m-2 type-container text-center${
                props.values.userStudent ? '' : ' active'
              }`}
              role="button"
              tabIndex="0"
              onClick={() => props.setFieldValue('userStudent', false)}
            >
              <img alt="prof-logo" src={GraduateLogo} className="type-logo" />
              <div>PROFESSIONAL</div>
            </div>
          </div>
          <div> Volunteering Interests *</div>
          <div className="row">
            <div className="form-check form-check-inline">
              <Field
                type="checkbox"
                name="volunteeringInterest"
                value="ADMIN"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="admin-vol">
                Admin
              </label>
            </div>
            <div className="form-check form-check-inline">
              <Field
                type="checkbox"
                name="volunteeringInterest"
                value="ALUMNIWELFARE"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="alumni-vol">
                Alumni welfare
              </label>
            </div>
            <div className="form-check form-check-inline">
              <Field
                type="checkbox"
                name="volunteeringInterest"
                value="EVENTS"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="events-vol">
                Events
              </label>
            </div>
            <div className="form-check form-check-inline">
              <Field
                type="checkbox"
                name="volunteeringInterest"
                value="MARKETING"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="marketing-vol">
                Marketing
              </label>
            </div>
            <div className="form-check form-check-inline">
              <Field
                type="checkbox"
                name="volunteeringInterest"
                value="STUDENTWELFARE"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="student-vol">
                Student welfare
              </label>
            </div>
            <div className="form-check form-check-inline">
              <Field
                type="checkbox"
                name="volunteeringInterest"
                value="WEBSITE"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="website-vol">
                Website
              </label>
            </div>
          </div>
          <ErrorMessage
            name="volunteeringInterest"
            component="div"
            className="error"
          />
        </div>
      </div>
    </div>
  );
};

export const Form2 = props => {
  return (
    <div className="card-body">
      <div className="row">
        <div className="col-md text-center education-container">
          <h4>Educational details</h4>
          <img alt="edu-logo" src={EducationLogo} className="type-logo mt-2" />

          <Field
            name="education[0].universityName"
            type="text"
            className="form-control mt-2"
            placeholder="School/University *"
          />
          <ErrorMessage
            name="education[0].universityName"
            component="div"
            className="error"
          />

          <Field
            name="education[0].specialization"
            type="text"
            className="form-control mt-2"
            placeholder="Specialization *"
          />
          <ErrorMessage
            name="education[0].specialization"
            component="div"
            className="error"
          />

          <Field
            name="education[0].degree"
            type="text"
            className="form-control mt-2"
            placeholder="Degree *"
          />
          <ErrorMessage
            name="education[0].degree"
            component="div"
            className="error"
          />

          <Field
            as="select"
            name="education[0].gradMonth"
            className="custom-select mt-2"
          >
            <option value="" disabled>
              Grad Month *
            </option>
            {props.months.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="education[0].gradMonth"
            component="div"
            className="error"
          />

          <Field
            name="education[0].gradYear"
            type="number"
            className="form-control mt-2"
            placeholder="Grad Year *"
            min="1900"
            max="2100"
          />
          <ErrorMessage
            name="education[0].gradYear"
            component="div"
            className="error"
          />
        </div>
        <div className="col-md text-center profession-container">
          <h4>Professional details</h4>
          <img
            alt="professional-logo"
            src={ProfessionalLogo}
            className="type-logo mt-2"
          />

          <Field
            name="workExperience[0].companyName"
            type="text"
            className="form-control mt-2"
            placeholder={`Company Name${props.values.userStudent ? '' : ' *'}`}
          />

          <ErrorMessage
            name="workExperience[0].companyName"
            component="div"
            className="error"
          />

          <Field
            name="workExperience[0].role"
            type="text"
            className="form-control mt-2"
            placeholder={`Role${props.values.userStudent ? '' : ' *'}`}
          />
          <ErrorMessage
            name="workExperience[0].role"
            component="div"
            className="error"
          />

          <Field
            name="workExperience[0].location"
            type="text"
            className="form-control mt-2"
            placeholder={`Location${props.values.userStudent ? '' : ' *'}`}
          />
          <ErrorMessage
            name="workExperience[0].location"
            component="div"
            className="error"
          />

          <Field
            name="workExperience[0].totalExp"
            type="number"
            className="form-control mt-2"
            placeholder={`Experience (years)${
              props.values.userStudent ? '' : ' *'
            }`}
          />
          <ErrorMessage
            name="workExperience[0].totalExp"
            component="div"
            className="error"
          />
        </div>
      </div>
    </div>
  );
};

export const onBoardingValidationSchema1 = Yup.object().shape({
  linkedinUrl: Yup.string()
    .matches(
      /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
      'Must be a valid LinkedIn URL'
    )
    .required('Linkedin URL is required'),
  aboutMe: Yup.string().required('About Me is required'),
  dateOfBirth: Yup.date()
    .typeError('Invalid date format')
    .max(new Date(), 'DOB cannot be after the current date')
    .nullable()
    .required('DOB is required'),
  gender: Yup.string().required('Gender is required'),
  street: Yup.string().required('Street is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string().required('City is required'),
  zip: Yup.string()
    .required('Zipcode is required')
    .matches(/^[0-9]{5}$/, 'Zip code must be 5 digits'),
  userStudent: Yup.boolean().required('User type is required'),
  volunteeringInterest: Yup.array()
    .min(1, 'Select at least one volunteering interest')
    .required('Select at least one volunteering interest'),
});

export const studentSchema = Yup.object().shape({
  education: Yup.array().of(
    Yup.object().shape({
      universityName: Yup.string().required('University Name is required'),
      gradMonth: Yup.number().required('Grad Month is required'),
      gradYear: Yup.number()
        .required('Graduation Year is required')
        .typeError('Invalid year format. Please enter a valid year.')
        .integer('Invalid year format. Please enter a whole number (year).')
        .min(1900, 'Graduation year cannot be before 1900')
        .max(2100, 'Graduation year cannot be after 2100')
        .nullable(),
      specialization: Yup.string().required('Specialization is required'),
      degree: Yup.string().required('Degree is required'),
    })
  ),
});

export const professionalSchema = Yup.object().shape({
  education: Yup.array().of(
    Yup.object().shape({
      universityName: Yup.string().required('University Name is required'),
      gradMonth: Yup.number().required('Grad Month is required'),
      gradYear: Yup.number()
        .required('Graduation Year is required')
        .typeError('Invalid year format. Please enter a valid year.')
        .integer('Invalid year format. Please enter a whole number (year).')
        .min(1900, 'Graduation year cannot be before 1900')
        .max(2100, 'Graduation year cannot be after 2100')
        .nullable(),
      specialization: Yup.string().required('Specialization is required'),
      degree: Yup.string().required('Degree is required'),
    })
  ),
  workExperience: Yup.array().of(
    Yup.object().shape({
      companyName: Yup.string().required('Company Name is required'),
      role: Yup.string().required('Role is required'),
      location: Yup.string().required('Location is required'),
      totalExp: Yup.number()
        .typeError('Experience (years) must be a number')
        .required('Experience (years) is required')
        .integer('Experience (years) must be an integer')
        .min(0, 'Experience (years) must be greater than or equal to 0'),
    })
  ),
});
