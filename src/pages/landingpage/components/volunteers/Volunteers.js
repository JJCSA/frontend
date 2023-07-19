import React from 'react';
import './Volunteers.scss';

const Volunteers = props => {
  return (
    <div id="volunteers" className="VOLUNTEERS">
      <div className="text-center mt-5">
        <h4>OUR COMMITEE</h4>
        <hr className="volunteers" />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="http://www.shadowsphotography.co/wp-content/uploads/2017/12/photography-01-800x400.jpg"
                className="card-img-top"
                alt="Volunteer 1"
              />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
