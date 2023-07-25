import React, { useContext, useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Country, State, City } from 'country-state-city';
import { toast } from 'react-toastify';
import { useAuthHeader } from 'react-auth-kit';
import GlobalContext from '../store/GlobalContext';
import comm from '../helpers/communication';
import './Profile.scss';

function Profile() {
  const { globalState, setGlobalState } = useContext(GlobalContext);
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

  const volunteeringInterestOptions = [
    { value: 'ADMIN', label: 'Admin' },
    { value: 'ALUMNIWELFARE', label: 'Alumni Welfare' },
    { value: 'EVENTS', label: 'Events ' },
    { value: 'MARKETING', label: 'Marketing ' },
    { value: 'STUDENTWELFARE', label: 'Student Welfare ' },
    { value: 'WEBSITE', label: 'Website ' },
    // Add more options as needed
  ];

  const formatDatePickerInput = dateString => {
    const date = new Date(dateString);
    return date.toISOString().substr(0, 10);
  };

  const validationSchemaWithStudent = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().required('Email Address is required'),
    dateOfBirth: Yup.date().required('Date of Birth is required'),
    street: Yup.string().required('Street is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    zip: Yup.number().required('Zipcode is required'),
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
    linkedinUrl: Yup.string().url('Invalid LinkedIn URL'),
    aboutMe: Yup.string().required('About Me is required'),
    userStudent: Yup.string().required('User Status is required'),
  });

  const validationSchemaWithProfessional = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().required('Email Address is required'),
    dateOfBirth: Yup.date().required('Date of Birth is required'),
    street: Yup.string().required('Street is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    zip: Yup.number().required('Zipcode is required'),
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
    linkedinUrl: Yup.string().url('Invalid LinkedIn URL'),
    aboutMe: Yup.string().required('About Me is required'),
    userStudent: Yup.string().required('User Status is required'),
  });

  const [validationSchema, setValidationSchema] = useState(
    globalState.profile.userStudent
      ? validationSchemaWithStudent
      : validationSchemaWithProfessional
  );

  const handleSubmit = values => {
    if (JSON.stringify(globalState.profile) !== JSON.stringify(values)) {
      const reqBody = {
        ...values,
        // volunteeringInterest: values.volunteeringInterest.join(','),
      };
      comm
        .sendPut('/user/profile', token, reqBody)
        .then(newProfile => {
          console.log(newProfile);
          setGlobalState({
            ...globalState,
            profile: newProfile.data,
          });
          toast.success('Profile Update successful!');
        })
        .catch(() => {
          toast.error('Profile Update Failed!');
        });
    } else {
      toast.error('Please make some changes before saving!');
    }
  };

  return (
    <div className="PROFILE container">
      <Formik
        initialValues={{
          ...globalState.profile,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, setFieldValue }) => (
          <Form>
            <div className="form-row">
              <div className="profile-image-container col">
                <img
                  className="profile-image"
                  src={values.profilePicture}
                  alt="Profile"
                />
              </div>
            </div>
            <h6>Personal Info</h6>
            <div className="form-row">
              <div className="col">
                <label htmlFor="firstName">First Name</label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  id="firstName"
                  name="firstName"
                  disabled
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error"
                />
              </div>
              <div className="col">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  id="lastName"
                  name="lastName"
                  disabled
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            {/* Rest of the form fields */}
            <div className="form-row">
              <div className="col">
                <label htmlFor="email">Email Address</label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                  id="email"
                  name="email"
                  disabled
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="col">
                <label htmlFor="gender">Gender</label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Gender"
                  id="gender"
                  name="gender"
                  disabled
                />
                <ErrorMessage name="gender" component="div" className="error" />
              </div>
              <div className="col">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <Field
                  type="date"
                  className="form-control"
                  placeholder="DOB"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formatDatePickerInput(values.dateOfBirth)}
                  disabled
                />
                <ErrorMessage
                  name="dateOfBirth"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <label htmlFor="street">Street *</label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Street"
                  id="street"
                  name="street"
                  required
                />
                <ErrorMessage name="street" component="div" className="error" />
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <label htmlFor="country">Country *</label>
                <Field
                  as="select"
                  className="custom-select"
                  id="country"
                  name="country"
                  required
                >
                  <option value="" disabled>
                    Country *
                  </option>
                  <option value="US">United States</option>
                  {/* Add more country options as needed */}
                </Field>
                <ErrorMessage
                  name="country"
                  component="div"
                  className="error"
                />
              </div>
              <div className="col">
                <label htmlFor="state">State *</label>
                <Field
                  as="select"
                  className="custom-select"
                  id="state"
                  name="state"
                  required
                >
                  <option value="" disabled>
                    State *
                  </option>
                  {State.getStatesOfCountry(values.country).map(state => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="state" component="div" className="error" />
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <label htmlFor="city">City *</label>
                <Field
                  as="select"
                  className="custom-select"
                  id="city"
                  name="city"
                  required
                >
                  <option value="" disabled>
                    City *
                  </option>
                  {City.getCitiesOfState(values.country, values.state).map(
                    stateCity => (
                      <option key={stateCity.isoCode} value={stateCity.name}>
                        {stateCity.name}
                      </option>
                    )
                  )}
                </Field>
                <ErrorMessage name="city" component="div" className="error" />
              </div>
              <div className="col">
                <label htmlFor="zip">Zipcode *</label>
                <Field
                  type="number"
                  className="form-control"
                  placeholder="Zipcode"
                  id="zip"
                  name="zip"
                  required
                />
                <ErrorMessage name="zip" component="div" className="error" />
              </div>
            </div>
            {/* New fields */}
            <h6>Additional Details</h6>
            <div className="form-row">
              <div className="col">
                <label htmlFor="linkedinUrl">LinkedIn URL</label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="LinkedIn URL"
                  id="linkedinUrl"
                  name="linkedinUrl"
                />
                <ErrorMessage
                  name="linkedinUrl"
                  component="div"
                  className="error"
                />
              </div>
              <div className="col">
                <label htmlFor="userStudent">User Status *</label>
                <Field
                  as="select"
                  className="custom-select"
                  name="userStudent"
                  value={values.userStudent ? 'STUDENT' : 'PROFESSIONAL'}
                  onChange={e => {
                    setFieldValue(
                      'userStudent',
                      e.target.value === 'STUDENT' ? true : false
                    );
                    if (e.target.value === 'STUDENT') {
                      setValidationSchema(validationSchemaWithStudent);
                    } else {
                      setValidationSchema(validationSchemaWithProfessional);
                    }
                  }}
                  required
                >
                  <option value="" disabled>
                    Select your current status(Student/Working Professional) *
                  </option>
                  <option selected={values.userStudent} value="STUDENT">
                    Student
                  </option>
                  <option selected={!values.userStudent} value="PROFESSIONAL">
                    Professional
                  </option>
                </Field>
                <ErrorMessage
                  name="userStudent"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <label htmlFor="aboutMe">About Me</label>
                <Field
                  as="textarea"
                  className="form-control"
                  placeholder="Tell something about yourself..."
                  id="aboutMe"
                  name="aboutMe"
                />
                <ErrorMessage
                  name="aboutMe"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            {/* <div className="form-row">
              <div className="col">
                <label>Volunteering Interest</label>
                <div>
                  {volunteeringInterestOptions.map(option => (
                    <label key={option.value}>
                      <Field
                        type="radio" // Change from "checkbox" to "radio"
                        name="volunteeringInterest"
                        value={option.value}
                        checked={values.volunteeringInterest === option.value}
                        onChange={() =>
                          setFieldValue('volunteeringInterest', option.value)
                        }
                      />
                      {option.label} &nbsp;
                    </label>
                  ))}
                </div>
                <ErrorMessage
                  name="volunteeringInterest"
                  component="div"
                  className="error"
                />
              </div>
            </div> */}

            <h6>Education details</h6>
            <div className="form-row">
              <div className="col">
                <label htmlFor="universityName">School/University *</label>
                <Field
                  name="education.0.universityName"
                  type="text"
                  className="form-control"
                  placeholder="School/University"
                  id="universityName"
                  required
                />
                <ErrorMessage
                  name="education.0.universityName"
                  component="div"
                  className="error"
                />
              </div>
              <div className="col">
                <label htmlFor="specialization">Specialization *</label>
                <Field
                  name="education.0.specialization"
                  type="text"
                  className="form-control"
                  placeholder="Specialization"
                  required
                />
                <ErrorMessage
                  name="education.0.specialization"
                  component="div"
                  className="error"
                />
              </div>
              <div className="col">
                <label htmlFor="degree">Degree *</label>
                <Field
                  name="education.0.degree"
                  type="text"
                  className="form-control"
                  placeholder="Degree"
                  required
                />
                <ErrorMessage
                  name="education.0.degree"
                  component="div"
                  className="error"
                />
              </div>
              <div className="col">
                <label htmlFor="gradMonth">Grad Month *</label>
                <Field
                  as="select"
                  name="education.0.gradMonth"
                  className="custom-select"
                  required
                >
                  <option value="" disabled>
                    Grad Month
                  </option>
                  {months.map((month, idx) => (
                    <option key={idx} value={idx}>
                      {month}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="education.0.gradMonth"
                  component="div"
                  className="error"
                />
              </div>
              <div className="col">
                <label htmlFor="gradYear">Grad Year *</label>
                <Field
                  name="education.0.gradYear"
                  type="number"
                  className="form-control"
                  placeholder="Grad Year"
                  required
                />
                <ErrorMessage
                  name="education.0.gradYear"
                  component="div"
                  className="error"
                />
              </div>
            </div>

            {/* Professional details */}
            <h6>Experience details</h6>
            {values.workExperience.map((exp, index) => (
              <div key={index} className="form-row">
                <div className="col">
                  <label htmlFor={`workExperience.${index}.companyName`}>
                    {`Company Name${values.userStudent ? '' : ' *'}`}
                  </label>
                  <Field
                    name={`workExperience.${index}.companyName`}
                    type="text"
                    className="form-control"
                    placeholder="Company"
                  />
                  <ErrorMessage
                    name={`workExperience.${index}.companyName`}
                    component="div"
                    className="error"
                  />
                </div>
                <div className="col">
                  <label htmlFor={`workExperience.${index}.role`}>{`Role${
                    values.userStudent ? '' : ' *'
                  }`}</label>
                  <Field
                    name={`workExperience.${index}.role`}
                    type="text"
                    className="form-control"
                    placeholder="Role"
                  />
                  <ErrorMessage
                    name={`workExperience.${index}.role`}
                    component="div"
                    className="error"
                  />
                </div>
                <div className="col">
                  <label htmlFor={`workExperience.${index}.location`}>
                    {`Location${values.userStudent ? '' : ' *'}`}
                  </label>
                  <Field
                    name={`workExperience.${index}.location`}
                    type="text"
                    className="form-control"
                    placeholder="Location"
                  />
                  <ErrorMessage
                    name={`workExperience.${index}.location`}
                    component="div"
                    className="error"
                  />
                </div>
                <div className="col">
                  <label htmlFor={`workExperience.${index}.totalExp`}>
                    {`Total Experience (years)${
                      values.userStudent ? '' : ' *'
                    }`}
                  </label>
                  <Field
                    name={`workExperience.${index}.totalExp`}
                    type="text"
                    className="form-control"
                    placeholder="Total Experience"
                  />
                  <ErrorMessage
                    name={`workExperience.${index}.totalExp`}
                    component="div"
                    className="error"
                  />
                </div>
              </div>
            ))}

            <div className="form-row mt-3">
              <div className="col">
                <button
                  type="submit"
                  className="form-control btn btn-light btn-block mr-sm-3 save-button"
                >
                  Save
                </button>
              </div>
            </div>
            <p>
              <strong>
                Note: If you want to update uneditable field please email us at
                jjcsausa@gmail.com
              </strong>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Profile;
