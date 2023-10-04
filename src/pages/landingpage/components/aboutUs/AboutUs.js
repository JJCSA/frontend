import React from 'react';
import './AboutUs.scss';

const AboutUs = () => {
  return (


    <div className="container">
      <div className='aboutUsHeading'>
        <h4>About Us</h4>
        <hr className="about-us" />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className='aboutUsImage'>

          </div>
        </div>
        <div className="col-md-6">
          <div>
            <p className='content'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan risus et porta sagittis.
              Duis at tortor vulputate nunc posuere luctus. Curabitur massa neque, dignissim nec turpis et, tincidunt
              mollis dolor. Sed aliquam velit ac elit commodo tincidunt. Suspendisse egestas erat quam, id
            </p>
            <div className='content1'>
              <p>
                “Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s”
              </p>
            </div>
            <div className='knowMoreBox'>
              <button type="button" href="/AboutUsContent" className='knowMore'>Know More</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default AboutUs;