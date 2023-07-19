import React, { useContext, useState } from 'react';
import { useAuthUser, useAuthHeader } from 'react-auth-kit';
import comm from '../../helpers/communication';
import GlobalContext from '../../store/GlobalContext';
import './Onboarding.scss';
import {
  Form1,
  Form2,
  onBoardingValidationSchema1,
  onBoardingValidationSchema2,
} from './onBoardingConstans';
import { Formik, Form as FormikForm } from 'formik';

function Onboarding() {
  const { globalState, setGlobalState } = useContext(GlobalContext);

  const initialValues = {
    ...useAuthUser()(),
    linkedinUrl: '',
    aboutMe: '',
    dateOfBirth: '',
    gender: '',
    street: '',
    country: 'US',
    state: '',
    city: '',
    zip: '',
    userStudent: true,
    volunteeringInterest: [],
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
  };

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
  const handleSubmit = (values, { setSubmitting }) => {
    if (step === 1) {
      setStep(2);
      setProgress(100);
    } else {
      const reqBody = {
        ...values,
        volunteeringInterest: values.volunteeringInterest.join(','),
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
    setSubmitting(false);
  };

  const handleBack = () => {
    setStep(step - 1);
    setProgress(50);
  };

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
      <Formik
        initialValues={initialValues}
        validationSchema={
          step === 1 ? onBoardingValidationSchema1 : onBoardingValidationSchema2
        }
        onSubmit={handleSubmit}
      >
        {({ values, errors, setFieldValue }) => (
          <FormikForm>
            {step === 1 ? (
              <Form1
                values={values}
                errors={errors}
                setFieldValue={setFieldValue}
              />
            ) : (
              <Form2
                values={values}
                setFieldValue={setFieldValue}
                months={months}
              />
            )}
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
          </FormikForm>
        )}
      </Formik>
    </div>
  );
}

export default Onboarding;
