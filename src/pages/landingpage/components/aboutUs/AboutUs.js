import React from 'react';
import './AboutUs.scss';


const AboutUs = () => {
  return (
    <div className='AboutUsPage'> 
    <div id="about-us" className="AboutUS">
        <p className='content'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan risus et porta sagittis.
        Duis at tortor vulputate nunc posuere luctus. Curabitur massa neque, dignissim nec turpis et, tincidunt
        mollis dolor. Sed aliquam velit ac elit commodo tincidunt. Suspendisse egestas erat quam, id
        </p>
        <div className='aboutUsImage'>

        </div>
        <div className='knowMoreBox'>
          <button type="button" className='knowMore'>Know More</button> 
        </div>
        <div className='content1'>
          <p>
          “Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s”
          </p> 
        </div>
        <div className='aboutUsHeading'>
          <h4>About Us</h4>
          <hr className="about-us" />
        </div>

    </div>
    </div>

     );

}

export default AboutUs;