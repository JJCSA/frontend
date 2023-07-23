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
  volunteer12,
  volunteer13,
  volunteer14,
  volunteer15,
  volunteer16,
  volunteer17,
  avater,
  volunteer18,
  volunteer20,
  volunteer19,
  volunteer21,
  volunteer22,
  volunteer23,
  volunteer24,
  volunteer25,
  volunteer26,
  volunteer27,
  volunteer28,
  volunteer29,
  volunteer30,
} from '../../../../assets/images/images-index';

const Volunteers = () => {
  const volunteers = [
    {
      Name: 'Aayushi Shah',
      Image: volunteer1,
    },
    {
      Name: 'Arpit Bagadia',
      Image: volunteer12,
    },
    {
      Name: 'Bhavna Seth',
      Image: volunteer13,
    },
    {
      Name: 'Darshit Gandhi',
      Image: volunteer3,
    },
    {
      Name: 'Deshna Shah',
      Image: volunteer2,
    },
    {
      Name: 'Dhairyav Shah',
      Image: volunteer30,
    },
    {
      Name: 'Dimpi Dedhia',
      Image: volunteer22,
    },
    {
      Name: 'Divita Vora',
      Image: volunteer23,
    },
    {
      Name: 'Dushyant Dubaria',
      Image: volunteer24,
    },
    {
      Name: 'Harshil Shah',
      Image: volunteer4,
    },
    {
      Name: 'Jash Shah',
      Image: volunteer25,
    },
    {
      Name: 'Jinali Shah',
      Image: volunteer26,
    },
    {
      Name: 'Jayshil Jain',
      Image: volunteer21,
    },
    {
      Name: 'Jay Shah',
      Image: volunteer5,
    },
    {
      Name: 'Krina Shah',
      Image: volunteer27,
    },
    {
      Name: 'Kinjal Gala',
      Image: volunteer6,
    },
    {
      Name: 'Labdhi Kapasi',
      Image: volunteer14,
    },
    {
      Name: 'Manan Meghani',
      Image: volunteer20,
    },
    {
      Name: 'Mayank Dedhia',
      Image: volunteer15,
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
      Name: 'Ronak Shah',
      Image: volunteer28,
    },
    {
      Name: 'Saumya Maniar',
      Image: volunteer17,
    },
    {
      Name: 'Sanket Shah',
      Image: volunteer16,
    },
    {
      Name: 'Pujan Seth',
      Image: volunteer18,
    },
    {
      Name: 'Tarak Mehta',
      Image: volunteer9,
    },
    {
      Name: 'Tejas Jain',
      Image: volunteer19,
    },
    {
      Name: 'Tejas Shah',
      Image: volunteer29,
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
