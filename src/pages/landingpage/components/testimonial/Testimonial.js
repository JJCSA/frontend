// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './Testimonial.scss';


// const Testimonial = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="testimonials">
//       <Slider {...settings}>
//         <div className="testimonial">
//           <p className="quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
//           <p className="author">- John Doe</p>
//         </div>
//         <div className="testimonial">
//           <p className="quote">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."</p>
//           <p className="author">- Jane Smith</p>
//         </div>
//         <div className="testimonial">
//           <p className="quote">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
//           <p className="author">- James Wilson</p>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Testimonial;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.scss';

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div id="testimonial" className="TESTIMONIAL">
      <div className="container">
        <div className="text-center mt-5">
          <h4>Testimonial</h4>
          <hr className="testimonial" />
        </div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
            <p className="quote">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <p className="author">- James Wilson</p>
          </div>
          <div>
            <h3>2</h3>
            <p className="quote">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <p className="author">- James Wilson</p>
          </div>
          <div>
            <h3>3</h3>
            <p className="quote">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <p className="author">- James Wilson</p>
          </div>
          <div>
            <h3>4</h3>
            <p className="quote">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <p className="author">- James Wilson</p>
          </div>
          <div>
            <h3>5</h3>
            <p className="quote">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <p className="author">- James Wilson</p>
          </div>
          <div>
            <h3>6</h3>
            <p className="quote">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <p className="author">- James Wilson</p>
          </div>
          <div>
            <h3>7</h3>
            <p className="quote">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <p className="author">- James Wilson</p>
          </div>
          <div>
            <h3>8</h3>
            <p className="quote">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <p className="author">- James Wilson</p>
          </div>
          <div>
            <h3>9</h3>
            <p className="quote">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <p className="author">- James Wilson</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default Testimonial;


