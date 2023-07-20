import React from 'react';
import './Volunteers.scss';
import { FaHeart } from 'react-icons/fa';
import {
  volunteer1,
  volunteer2,
  volunteer3,
  volunteer4,
  volunteer5,
  volunteer6,
  volunteer7,
  volunteer8,
  volunteer9,
  volunteer10,
  volunteer11,
  avater,
} from '../../../../assets/images/images-index';

const Volunteers = () => {
  const volunteers = [
    {
      Name: 'Aayushi Shah',
      Image: volunteer1,
    },
    {
      Name: 'Bhavna Seth',
      Image: avater,
    },
    {
      Name: 'Deshna Shah',
      Image: volunteer2,
    },
    {
      Name: 'Darshit Gandhi',
      Image: volunteer3,
    },
    {
      Name: 'Harshil Shah',
      Image: volunteer4,
    },
    {
      Name: 'Jay Shah',
      Image: volunteer5,
    },
    {
      Name: 'Kinjal Gala',
      Image: volunteer6,
    },
    {
      Name: 'Parth Parekh',
      Image: volunteer7,
    },
    {
      Name: 'Rishi Bharbhaya',
      Image: volunteer8,
    },
    {
      Name: 'Tarak Mehta',
      Image: volunteer9,
    },
    {
      Name: 'Urja Dagha',
      Image: volunteer10,
    },
    {
      Name: 'Visesh Jain',
      Image: volunteer11,
    },
  ];
  return (
    <div id="volunteers" className="VOLUNTEERS">
      <div className="text-center mt-5">
        <h4>VOLUNTEERS</h4>
        <hr className="volunteer" />
      </div>
      <div className="container mt-5">
        <div className="row">
          <h6 className="volunteer-text mt-2 mb-5">
            Thank you to all our incredible volunteers! Your unwavering
            dedication and passion have made a significant impact on our
            organization. We are grateful for the countless hours you've
            devoted. Thank you for being the driving force behind our success.
            We are blessed to have you as part of our volunteer family. Your
            compassion and willingness to help inspire us every day <FaHeart />
            <p className="float-right mt-4"> - JJC USA</p>
          </h6>
          {volunteers.map((list, index) => (
            <div className="col-md-3" key={list.Name}>
              <div className="card mb-4 volunteer-card">
                <img
                  src={list.Image}
                  className="card-img-top"
                  alt={`volunteer-${index}`}
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

export default Volunteers;
