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
  volunteer31,
  volunteer32,
  volunteer33,
  volunteer34,
  volunteer40,
  volunteer39,
  volunteer38,
  volunteer37,
  volunteer36,
  volunteer35,
  volunteer41,
  volunteer42,
} from '../../../../assets/images/images-index';

const Volunteers = () => {
  const volunteers = [
    {
      Name: 'Aayushi Kapadia',
      Image: avater,
    },
    {
      Name: 'Aayushi Shah',
      Image: volunteer1,
    },
    {
      Name: 'Aayushi Vora',
      Image: volunteer35,
    },
    {
      Name: 'Abhijeet Runwal',
      Image: avater,
    },
    {
      Name: 'Aditya Shah',
      Image: avater,
    },
    {
      Name: 'Agrim',
      Image: avater,
    },
    {
      Name: 'Amee Gosar',
      Image: avater,
    },
    {
      Name: 'Archit Shah',
      Image: avater,
    },
    {
      Name: 'Arpit Bagadia',
      Image: volunteer12,
    },
    {
      Name: 'Arun Pokharna',
      Image: avater,
    },
    {
      Name: 'Bhakti Shah',
      Image: avater,
    },
    {
      Name: 'Bhaumik Jain',
      Image: avater,
    },
    {
      Name: 'Bhavishi Jhaveri',
      Image: volunteer36,
    },
    {
      Name: 'Bhavna Seth',
      Image: volunteer13,
    },
    {
      Name: 'Bhoomi Shah',
      Image: avater,
    },
    {
      Name: 'Chaitali Dagli',
      Image: volunteer37,
    },
    {
      Name: 'Darshan Dedhia',
      Image: avater,
    },
    {
      Name: 'Darshin Shah',
      Image: avater,
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
      Name: 'Devanshi Sanghvi',
      Image: volunteer31,
    },
    {
      Name: 'Dhairyav Shah',
      Image: volunteer30,
    },
    {
      Name: 'Dharmil Sanghvi',
      Image: avater,
    },
    {
      Name: 'Dhruvi Mathukia',
      Image: volunteer41,
    },
    {
      Name: 'Dimpi Dedhia',
      Image: volunteer22,
    },
    {
      Name: 'Disha Shah',
      Image: avater,
    },
    {
      Name: 'Dishank Shah',
      Image: avater,
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
      Name: 'Gaurav Shah',
      Image: volunteer38,
    },
    {
      Name: 'Harsh Mehta',
      Image: avater,
    },
    {
      Name: 'Harshil Shah',
      Image: volunteer4,
    },
    {
      Name: 'Heet Shah',
      Image: volunteer39,
    },
    {
      Name: 'Hima Doshi',
      Image: avater,
    },
    {
      Name: 'Hinal Doshi',
      Image: avater,
    },
    {
      Name: 'Hinal Fifadra',
      Image: volunteer40,
    },
    {
      Name: 'Jagruti Belani',
      Image: avater,
    },
    {
      Name: 'Jainam Mehta',
      Image: avater,
    },
    {
      Name: 'Jainam Shah',
      Image: avater,
    },
    {
      Name: 'Janvi Sakhala',
      Image: avater,
    },
    {
      Name: 'Jash Shah',
      Image: volunteer25,
    },
    {
      Name: 'Jay Shah',
      Image: volunteer5,
    },
    {
      Name: 'Jayshil Jain',
      Image: volunteer21,
    },
    {
      Name: 'Janvi Shah',
      Image: volunteer32,
    },
    {
      Name: 'Jinali Shah',
      Image: volunteer26,
    },
    {
      Name: 'Karan Doshi',
      Image: avater,
    },
    {
      Name: 'Karan Shah',
      Image: avater,
    },
    {
      Name: 'Karan Sheth',
      Image: avater,
    },
    {
      Name: 'Kinjal Gala',
      Image: volunteer6,
    },
    {
      Name: 'Krina Shah',
      Image: volunteer27,
    },
    {
      Name: 'Krishma Shah',
      Image: avater,
    },
    {
      Name: 'Kushal Shah',
      Image: avater,
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
      Name: 'Meet Sanghvi',
      Image: avater,
    },
    {
      Name: 'Milan Shah',
      Image: volunteer33,
    },
    {
      Name: 'Mit Morabia',
      Image: avater,
    },
    {
      Name: 'Nirav Mehta',
      Image: avater,
    },
    {
      Name: 'Nisarg Shah',
      Image: avater,
    },
    {
      Name: 'Parth Parekh',
      Image: volunteer7,
    },
    {
      Name: 'Pooja Shah',
      Image: avater,
    },
    {
      Name: 'Pujan Sheth',
      Image: volunteer18,
    },
    {
      Name: 'Richa Rajput',
      Image: volunteer42,
    },
    {
      Name: 'Rishi Bharbhaya',
      Image: volunteer8,
    },
    {
      Name: 'Riya Shah',
      Image: avater,
    },
    {
      Name: 'Romil Shah',
      Image: avater,
    },
    {
      Name: 'Ronak Shah',
      Image: volunteer28,
    },
    {
      Name: 'Rushabh Lakhani',
      Image: avater,
    },
    {
      Name: 'Sachi Shah',
      Image: avater,
    },
    {
      Name: 'Sagar Shah',
      Image: avater,
    },
    {
      Name: 'Shailee Shah',
      Image: avater,
    },
    {
      Name: 'Sankalp Sanghvi',
      Image: avater,
    },
    {
      Name: 'Sanket Shah',
      Image: volunteer16,
    },
    {
      Name: 'Saumya Maniar',
      Image: volunteer17,
    },
    {
      Name: 'Saurabh Shah',
      Image: avater,
    },
    {
      Name: 'Shrey Haria',
      Image: avater,
    },
    {
      Name: 'Sunny Shah',
      Image: avater,
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
      Name: 'Vatsal Shah',
      Image: volunteer34,
    },
    {
      Name: 'Vidhi Nagda',
      Image: avater,
    },
    {
      Name: 'Visesh Jain',
      Image: volunteer11,
    },
    {
      Name: 'Yash',
      Image: avater,
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
