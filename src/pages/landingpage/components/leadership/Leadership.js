import React from 'react';
import './Leadership.css';
import { Link } from 'react-router-dom';

import {
  President,
  VicePresident,
  AlumniWelfare,
  Events,
  Marketing,
  admin,
} from '../../../../assets/images/images-index';

const Leadership = () => {
  const leadership = [
    {
      Name: 'Dhruv Shah',
      Role: 'President',
      Image: President,
    },
    {
      Name: 'Yash Dedhia',
      Role: 'Vice President',
      Image: VicePresident,
    },
    {
      Name: 'Hemal Tolia',
      Role: 'Admin Lead',
      Image: admin,
    },
    {
      Name: 'Purvansh Jain',
      Role: 'Social Event Lead',
      Image: Events,
    },
    {
      Name: 'Brinal Bheda',
      Role: 'Alumni Welfare Lead',
      Image: AlumniWelfare,
    },
    {
      Name: 'Deep Doshi',
      Role: 'Marketing Lead',
      Image: Marketing,
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
                  className="card-img-top leadership-image"
                  alt={`Leader-${index}`}
                  style={{ height: '200px', objectFit: 'cover' }}
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
