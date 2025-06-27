import React from 'react';
import {
  Trustee1,
  Trustee2,
  Trustee3,
  Trustee4,
  Trustee5,
  Trustee6,
  Trustee7,
} from '../../../../assets/images/images-index';
import './Trustees.css';

const Trustees = () => {
  const trustees = [
    {
      Name: 'Shri Sanjay B. Shah',
      Role: 'Chairman & Permanent Trustee',
      Image: Trustee1,
    },
    {
      Name: 'Shri Jitendra S. Kothari',
      Role: 'I.P. Chairman & Permanent Trustee',
      Image: Trustee2,
    },
    {
      Name: 'Shri Praful V. Kamdar',
      Role: 'Vice Chairman & Permanent Trustee',
      Image: Trustee3,
    },
    {
      Name: 'Shri Rajesh C. Gandhi',
      Role: 'Vice Chairman & Permanent Trustee',
      Image: Trustee4,
    },
    {
      Name: 'Shri Amit D. Kothari',
      Role: 'Secretary & Holding Trustee',
      Image: Trustee5,
    },
    {
      Name: 'Shri Anil G. Doshi',
      Role: 'Treasurer & Permanent Trustee',
      Image: Trustee6,
    },
    {
      Name: 'Shri Rajesh R. Bhansali',
      Role: 'Treasurer & Permanent Trustee',
      Image: Trustee7,
    },
  ];
  return (
    <div id="trustees" className="TRUSTEES">
      <div className="text-center mt-5">
        <h4>
          JJC CENTRAL BOARD CHARITABLE TRUST COMMITTEE MEMBERS (2022-2024)
        </h4>
        <hr className="trustees" />
      </div>
      <div className="container mt-5">
        <div className="row">
          {trustees.map((list, index) => (
            <div className="col-md-3" key={list.Name}>
              <div className="card mb-4 trustees-card">
                <img
                  src={list.Image}
                  className="card-img-top"
                  alt={`trustees-${index}`}
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

export default Trustees;
