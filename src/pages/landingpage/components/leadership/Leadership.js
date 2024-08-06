import React from 'react';
import './Leadership.css';
import { Link } from 'react-router-dom';

import {
  President,
  VicePresident,
  AlumniWelfare,
  Events,
  Marketing,
  Consultant,
  Website,
  Student,
  chiefofstaff,
  admin,
} from '../../../../assets/images/images-index';

const Leadership = () => {
  const leadership = [
    {
      Name: 'Bhavin Shanghvi',
      Role: 'President',
      Image: President,
    },
    {
      Name: 'Chintan Shah',
      Role: 'Vice President',
      Image: VicePresident,
    },
    {
      Name: 'Darshita Shah',
      Role: 'Chief of Staff',
      Image: chiefofstaff,
    },
    {
      Name: 'Hemal Tolia',
      Role: 'Admin Lead',
      Image: admin,
    },
    {
      Name: 'Ishit Shah',
      Role: 'Student Welfare Lead',
      Image: Student,
    },
    {
      Name: 'Janvi Shah',
      Role: 'Event Lead',
      Image: Events,
    },
    {
      Name: 'Jash Shah',
      Role: 'Alumni Welfare Lead',
      Image: AlumniWelfare,
    },
    {
      Name: 'Nishit Gopani',
      Role: 'Website Lead',
      Image: Website,
    },
    {
      Name: 'Riya Shah',
      Role: 'Marketing Lead',
      Image: Marketing,
    },
    {
      Name: 'Priyal Chheda',
      Role: 'Consultant',
      Image: Consultant,
    },
  ];

  return (
    <div id="leadership" className="LEADERSHIP">
      <div className="text-center mt-5">
        <h4>OUR LEADERSHIP</h4>
        <hr className="leadership" />
      </div>
      <div className="container mt-5">
        <div className="row">
          {leadership.map((list, index) => (
            <div className="col-md-3" key={list.Name}>
              <div className="card mb-4 leadership-card">
                <img
                  src={list.Image}
                  className="card-img-top"
                  alt={`Leader-${index}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{list.Name}</h5>
                  <p className="card-subtitle">
                    <strong>{list.Role}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="knowMoreBox" id="volunteers">
        <Link to="/volunteers" className="text-decor">
          <button
            type="button"
            className="btn btn-light mx-auto mb-3 d-flex justify-content-center know-more-button"
          >
            Our Volunteers
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Leadership;
