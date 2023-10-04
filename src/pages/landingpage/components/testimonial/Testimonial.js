import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css';

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="testimonial" className="TESTIMONIAL">
      <div className="container-fluid">
        <div className="text-center mt-5">
          <h4>TESTIMONIAL</h4>
          <hr className="testimonial" />
        </div>
        <Slider {...settings}>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                JJC has been a game changer for me as a Jain student in the USA.
                From job assistance to resume building and networking, they've
                been there every step of the way. Their events tackling various
                aspects of life in the USA have been invaluable. I'm immensely
                grateful to JJC for their guidance, which has played a vital
                role in my personal and professional growth within the Jain
                community.
              </p>
              <p className="author mt-3">- Harsh Mehta</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                I am extremely grateful to JJC for their invaluable assistance
                in finding a job and providing seminar support. When I graduated
                during the pandemic, It was hard finding a job. However,
                reaching out to JJC turned out to be a game-changer. Their team
                offered me guidance in creating a professional resume workshop,
                provided interview tips, and connected me with potential
                employers.Thanks to JJC's support, I secured a rewarding
                position.
              </p>
              <p className="author mt-3">- Karan Doshi</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                JJC-USA has been a catalyst for profound changes in my life, not
                only in terms of professional growth and community support but
                also in finding my life partner. Through their nationwide
                network and community events, I have had the privilege of
                meeting incredible people who I today consider my best friends
                in the US. These friendships have enriched my life, providing
                support, companionship, and a sense of belonging that extends
                beyond geographical boundaries.
              </p>
              <p className="author mt-3">- Pankti Mehta</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                My heartfelt gratitude to JJC-USA for their exceptional support
                during these challenging times of a sluggish job market. Their
                remarkable efforts in assisting us are truly appreciated. The
                team is doing an outstanding job in providing invaluable help
                when it is needed the most. Your unwavering support serves as a
                beacon of hope, empowering us to overcome obstacles and pursue
                our professional goals. Thank you for the tremendous work you
                are doing to make a difference in our lives.
              </p>
              <p className="author mt-3">- Manav Shah</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                Thank you JJC for the support shown by you to all the extended
                family of Jains during covid I got all the necessary items which
                kept me fine for months. I feel so proud to be a jain and feel
                so happy that there are people here away from home to look after
                me. I am very happy with the help and very touched by this kind
                gesture
              </p>
              <p className="author mt-3">- Rushabh Shah</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                I would like to thank you JJC from the bottom of my heart for
                coming up with such a nobel thought and for helping everyone in
                need. I had requested for Rental assistance during COVID and I
                received an amount which helped me to pay my rent during tough
                time. Again thank you from the bottom of my heart for this
                initiative.
              </p>
              <p className="author mt-3">- Dhawani Doshi</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                JJC USA has been a source of support and assistance for students
                who are far away from their home country, just like me. We
                understand that being far away from home can be a challenging
                experience, especially when it comes to navigating a new
                educational system and adjusting to a different culture. JJC
                USA, have made a top priority to ensure that you feel welcomed,
                supported, and connected throughout your academic journey. They
                have created a vibrant and inclusive community.
              </p>
              <p className="author mt-3">- Bhavna Seth</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                Being a part of JJC USA has been an enriching experience that I
                cherish deeply. The warmth and inclusivity of this community
                make it feel like a second family. Through engaging events and
                workshops, I've grown as a person, expanding my horizons and
                embracing diversity. The support and encouragement from fellow
                members and the committee have been incredible. Joining JJC USA
                has not only given me wonderful memories but also lifelong
                friendships.
              </p>
              <p className="author mt-3">- Aayushi Vora</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default Testimonial;
