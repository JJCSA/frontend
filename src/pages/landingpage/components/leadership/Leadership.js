import React from 'react';
import './Leadership.scss';
import {
  President,
  VicePresident,
  avater,
} from '../../../../assets/images/images-index';

const Leadership = () => {
  const leadership = [
    {
      Name: 'Bhavin Shanghvi',
      Role: 'President',
      Image: avater,
    },
    {
      Name: 'Chintan Shah',
      Role: 'Vice President',
      Image: VicePresident,
    },
    {
      Name: 'Vikas Luthia',
      Role: 'Alumni Welfare Lead',
      Image: avater,
    },
    {
      Name: 'Ishit Shah',
      Role: 'Student Welfare Lead',
      Image: avater,
    },
    {
      Name: 'Manan Mathukia',
      Role: 'Event Lead',
      Image: avater,
    },
    {
      Name: 'Riya Shah',
      Role: 'Marketing Lead',
      Image: avater,
    },
    {
      Name: 'Nishit Gopani',
      Role: 'Website Lead',
      Image: avater,
    },
    {
      Name: 'Hemal Tolia',
      Role: 'Admin Lead',
      Image: avater,
    },
    {
      Name: 'Harshil Shah',
      Role: 'Consultant',
      Image: avater,
    },
    {
      Name: 'Darshita Shah',
      Role: 'Chief of Staff',
      Image: avater,
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
    </div>
  );
};

export default Leadership;
