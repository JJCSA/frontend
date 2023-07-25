import React, { useContext, useState, useEffect } from 'react';
import { useFormik } from 'formik';
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
    userStatus: Yup.string().required('User Status is required'),
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
    userStatus: Yup.string().required('User Status is required'),
  });

  const handleVolunteeringInterestChange = value => {
    const currentValue =
      formik.values.volunteeringInterest.length > 0
        ? formik.values.volunteeringInterest
        : formik.values.volunteeringInterest.split(',');
    const updatedValue = currentValue.includes(value)
      ? currentValue.filter(item => item !== value)
      : [...currentValue, value];

    formik.setFieldValue('volunteeringInterest', updatedValue); // Use join() to convert the array to a string
  };

  // Function to select the appropriate validation schema based on userStatus
  const getValidationSchema = userStatus => {
    if (userStatus === 'STUDENT') {
      return validationSchemaWithStudent;
    } else if (userStatus === 'PROFESSIONAL') {
      return validationSchemaWithProfessional;
    }
    return Yup.object(); // Return a default empty schema if userStatus is not selected yet
  };

  const [validationSchema, setValidationSchema] = useState(
    getValidationSchema(globalState.profile.userStatus)
  );

  const formik = useFormik({
    initialValues: {
      ...globalState.profile,
    },
    validationSchemaWithStudent,
    onSubmit: values => {
      if (JSON.stringify(globalState.profile) !== JSON.stringify(values)) {
        const reqBody = {
          ...values,
          volunteeringInterest:
            values.volunteeringInterest.length > 0
              ? values.volunteeringInterest.join(',')
              : values.volunteeringInterest,
        };
        comm
          .sendPut('/user/profile', token, reqBody)
          .then(newProfile => {
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
    },
  });

  useEffect(() => {
    setValidationSchema(getValidationSchema(formik.values.userStatus));
  }, [formik.values.userStatus]);

  return (
    <div className="PROFILE container">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-row">
          <div className="profile-image-container col">
            <img
              className="profile-image"
              src={formik.values.profilePicture}
              alt="Profile"
            />
          </div>
        </div>
        <h6>Personal Info</h6>
        <div className="form-row">
          <div className="col">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              id="firstName"
              {...formik.getFieldProps('firstName')}
              disabled
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="error">{formik.errors.firstName}</div>
            )}
          </div>
          <div className="col">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              id="lastName"
              {...formik.getFieldProps('lastName')}
              disabled
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="error">{formik.errors.lastName}</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
              id="email"
              {...formik.getFieldProps('email')}
              disabled
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>
          <div className="col">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              className="form-control"
              placeholder="Gender"
              id="gender"
              {...formik.getFieldProps('gender')}
              disabled
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>
          <div className="col">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              placeholder="DOB"
              id="dateOfBirth"
              value={formatDatePickerInput(formik.values.dateOfBirth)}
              {...formik.getFieldProps('dateOfBirth')}
              disabled
            />
            {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
              <div className="error">{formik.errors.dateOfBirth}</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label htmlFor="street">Street *</label>
            <input
              name="street"
              type="text"
              className="form-control"
              placeholder="Street"
              id="street"
              {...formik.getFieldProps('street')}
              required
            />
            {formik.touched.street && formik.errors.street && (
              <div className="error">{formik.errors.street}</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label htmlFor="country">Country *</label>
            <select
              name="country"
              className="custom-select"
              id="country"
              {...formik.getFieldProps('country')}
              required
            >
              <option value="" disabled>
                Country *
              </option>
              <option value="US">United States</option>
              {/* Add more country options as needed */}
            </select>
            {formik.touched.country && formik.errors.country && (
              <div className="error">{formik.errors.country}</div>
            )}
          </div>
          <div className="col">
            <label htmlFor="state">State *</label>
            <select
              name="state"
              className="custom-select"
              id="state"
              {...formik.getFieldProps('state')}
              required
            >
              <option value="" disabled>
                State *
              </option>
              {State.getStatesOfCountry(formik.values.country).map(state => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>
            {formik.touched.state && formik.errors.state && (
              <div className="error">{formik.errors.state}</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label htmlFor="city">City *</label>
            <select
              name="city"
              className="custom-select"
              id="city"
              {...formik.getFieldProps('city')}
              required
            >
              <option value="" disabled>
                City *
              </option>
              {City.getCitiesOfState(
                formik.values.country,
                formik.values.state
              ).map(stateCity => (
                <option key={stateCity.isoCode} value={stateCity.name}>
                  {stateCity.name}
                </option>
              ))}
            </select>
            {formik.touched.city && formik.errors.city && (
              <div className="error">{formik.errors.city}</div>
            )}
          </div>
          <div className="col">
            <label htmlFor="zip">Zipcode *</label>
            <input
              name="zip"
              type="number"
              className="form-control"
              placeholder="Zipcode"
              id="zip"
              {...formik.getFieldProps('zip')}
              required
            />
            {formik.touched.zip && formik.errors.zip && (
              <div className="error">{formik.errors.zip}</div>
            )}
          </div>
        </div>
        {/* New fields */}
        <h6>Additional Details</h6>
        <div className="form-row">
          <div className="col">
            <label htmlFor="linkedinUrl">LinkedIn URL</label>
            <input
              name="linkedinUrl"
              type="text"
              className="form-control"
              placeholder="LinkedIn URL"
              {...formik.getFieldProps('linkedinUrl')}
            />
            {formik.touched.linkedinUrl && formik.errors.linkedinUrl && (
              <div className="error">{formik.errors.linkedinUrl}</div>
            )}
          </div>
          <div className="col">
            <label htmlFor="userStatus">User Status *</label>
            <select
              name="userStatus"
              className="custom-select"
              {...formik.getFieldProps('userStatus')}
              required
            >
              <option value="" disabled>
                Select your current status(Student/Working Professional) *
              </option>
              <option value="STUDENT">Student</option>
              <option value="PROFESSIONAL">Professional</option>
            </select>
            {formik.touched.userStatus && formik.errors.userStatus && (
              <div className="error">{formik.errors.userStatus}</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label htmlFor="aboutMe">About Me</label>
            <textarea
              name="aboutMe"
              className="form-control"
              placeholder="Tell something about yourself..."
              {...formik.getFieldProps('aboutMe')}
            />
            {formik.touched.aboutMe && formik.errors.aboutMe && (
              <div className="error">{formik.errors.aboutMe}</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label>Volunteering Interest</label>
            <div>
              {volunteeringInterestOptions.map(option => (
                <label key={option.value}>
                  <input
                    type="checkbox"
                    name="volunteeringInterest"
                    value={option.value}
                    onChange={() =>
                      handleVolunteeringInterestChange(option.value)
                    }
                    checked={formik.values.volunteeringInterest?.includes(
                      option.value
                    )}
                  />
                  {option.label} &nbsp;
                </label>
              ))}
            </div>
            {formik.touched.volunteeringInterest &&
              formik.errors.volunteeringInterest && (
                <div className="error">
                  {formik.errors.volunteeringInterest}
                </div>
              )}
          </div>
        </div>
        <h6>Education details</h6>
        {formik.values.userStudent ? (
          <div className="form-row">
            <div className="col">
              <label htmlFor="universityName">School/University *</label>
              <input
                name="education.0.universityName"
                type="text"
                className="form-control"
                placeholder="School/University"
                id="universityName"
                {...formik.getFieldProps('education.0.universityName')}
                required
              />
              {formik.touched.education?.[0]?.universityName &&
                formik.errors.education?.[0]?.universityName && (
                  <div className="error">
                    {formik.errors.education?.[0]?.universityName}
                  </div>
                )}
            </div>
            <div className="col">
              <label htmlFor="specialization">Specialization *</label>
              <input
                name={`education.0.specialization`}
                type="text"
                className="form-control"
                placeholder="Specialization"
                {...formik.getFieldProps(`education.0.specialization`)}
                required
              />
              {formik.touched.education?.[0]?.specialization &&
                formik.errors.education?.[0]?.specialization && (
                  <div className="error">
                    {formik.errors.education?.[0]?.specialization}
                  </div>
                )}
            </div>
            <div className="col">
              <label htmlFor={`education.0.degree`}>Degree *</label>
              <input
                name={`education.0.degree`}
                type="text"
                className="form-control"
                placeholder="Degree"
                {...formik.getFieldProps(`education.0.degree`)}
                required
              />
              {formik.touched.education?.[0]?.degree &&
                formik.errors.education?.[0]?.degree && (
                  <div className="error">
                    {formik.errors.education?.[0]?.degree}
                  </div>
                )}
            </div>
            <div className="col">
              <label htmlFor={`education.0.gradMonth`}>Grad Month *</label>
              <select
                name={`education.0.gradMonth`}
                className="custom-select"
                {...formik.getFieldProps(`education.0.gradMonth`)}
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
              </select>
              {formik.touched.education?.[0]?.gradMonth &&
                formik.errors.education?.[0]?.gradMonth && (
                  <div className="error">
                    {formik.errors.education?.[0]?.gradMonth}
                  </div>
                )}
            </div>
            <div className="col">
              <label htmlFor={`education.0.gradYear`}>Grad Year *</label>
              <input
                name={`education.0.gradYear`}
                type="number"
                className="form-control"
                placeholder="Grad Year"
                {...formik.getFieldProps(`education.0.gradYear`)}
                required
              />
              {formik.touched.education?.[0]?.gradYear &&
                formik.errors.education?.[0]?.gradYear && (
                  <div className="error">
                    {formik.errors.education?.[0]?.gradYear}
                  </div>
                )}
            </div>
          </div>
        ) : null}
        {/* Professional details */}
        <h6>Experience details</h6>
        {formik.values.workExperience.map((exp, index) => (
          <div key={index} className="form-row">
            <div className="col">
              <label htmlFor={`workExperience.${index}.companyName`}>
                Company *
              </label>
              <input
                name={`workExperience.${index}.companyName`}
                type="text"
                className="form-control"
                placeholder="Company"
                {...formik.getFieldProps(`workExperience.${index}.companyName`)}
              />
              {formik.touched.workExperience?.[index]?.companyName &&
                formik.errors.workExperience?.[index]?.companyName && (
                  <div className="error">
                    {formik.errors.workExperience?.[index]?.companyName}
                  </div>
                )}
            </div>
            <div className="col">
              <label htmlFor={`workExperience.${index}.role`}>Role *</label>
              <input
                name={`workExperience.${index}.role`}
                type="text"
                className="form-control"
                placeholder="Role"
                {...formik.getFieldProps(`workExperience.${index}.role`)}
              />
              {formik.touched.workExperience?.[index]?.role &&
                formik.errors.workExperience?.[index]?.role && (
                  <div className="error">
                    {formik.errors.workExperience?.[index]?.role}
                  </div>
                )}
            </div>
            <div className="col">
              <label htmlFor={`workExperience.${index}.location`}>
                Location *
              </label>
              <input
                name={`workExperience.${index}.location`}
                type="text"
                className="form-control"
                placeholder="Location"
                {...formik.getFieldProps(`workExperience.${index}.location`)}
              />
              {formik.touched.workExperience?.[index]?.location &&
                formik.errors.workExperience?.[index]?.location && (
                  <div className="error">
                    {formik.errors.workExperience?.[index]?.location}
                  </div>
                )}
            </div>
            <div className="col">
              <label htmlFor={`workExperience.${index}.totalExp`}>
                Total Experience (Years) *
              </label>
              <input
                name={`workExperience.${index}.totalExp`}
                type="text"
                className="form-control"
                placeholder="Total Experience"
                {...formik.getFieldProps(`workExperience.${index}.totalExp`)}
              />
              {formik.touched.workExperience?.[index]?.totalExp &&
                formik.errors.workExperience?.[index]?.totalExp && (
                  <div className="error">
                    {formik.errors.workExperience?.[index]?.totalExp}
                  </div>
                )}
            </div>
          </div>
        ))}
        <div className="form-row mt-3">
          <div className="col">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;
