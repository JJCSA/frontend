import React, { useState } from 'react';
import { Chrono } from 'react-chrono';
import { jjcIcon } from '../../../../assets/index';
import {
  buddyproject,
  covidassistance,
  games,
  graduation,
  job,
  milestone1000,
  milestone500,
  symposium,
} from '../../../../assets/images/images-index';
import './Timeline.scss'; // Import the custom CSS file

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active timeline event

  const itemsDetails = [
    {
      title: '2019-AUGUST',
      cardTitle: 'JJC USA Inception',
      cardDetailedText:
        'With a formidable start, the organization embarked on its journey with a strong force of 70 members, ready to conquer new frontiers together. The substantial initial members laid a solid foundation, ensuring a promising and impactful beginning for the organization.',
      image: jjcIcon,
    },

    {
      title: '2020-APRIL',
      cardTitle: 'Covid-19 Assistance Program',
      cardDetailedText:
        'Provided food assistance to 84 beneficiaries worth $4,450. Provided rental assistance to 26 beneficiaries worth $11,250 in association with JAINA. Helped professionals with JJCs professional network to find jobs in the US by mentoring on some of the best practices.',
      image: covidassistance,
    },

    {
      title: '2020-MAY',
      cardTitle: 'Virtual Games Event',
      cardDetailedText:
        'Conducted first zoom event due to covid-19 with 70 participants. Distributed cash prize to those won games played during the event',
      image: games,
    },

    {
      title: '2020-MAY',
      cardTitle: 'Virtual Graduation Ceremony',
      cardDetailedText:
        'Convocation ceremony for the class of 2020 graduates. Event included 30 graduate students and their family',
      image: graduation,
    },
    {
      title: '2020-JUNE',
      cardTitle: 'Job Assistance Program',
      cardDetailedText:
        'In light of covid-19 and the economic downturn, conducted a job assistance program to help 110 participants in their job searh process',
      image: job,
    },
    {
      title: '2020-AUGUST',
      cardTitle: 'Reached 500 Members',
      cardDetailedText: `The organization's growth soared to remarkable heights as it surpassed the milestone of 500 members, signifying a momentous achievement and a testament to its compelling vision. With an ever-expanding community, the group now possesses an even greater capacity to drive meaningful change and make a lasting impact in the community.`,
      image: milestone500,
    },
    {
      title: '2021-JANUARY',
      cardTitle: 'Kicked Off Buddy Project',
      cardDetailedText: 'DATA NEEDED- Get details from Ishit',
      image: buddyproject,
    },
    {
      title: '2021-JULY',
      cardTitle: 'Conducted Alumni Symposium',
      cardDetailedText: 'DATA NEEDED- Get details from NISHIT',
      image: symposium,
    },
    {
      title: '2022-AUGUST',
      cardTitle: 'Crossed 1000 Members',
      cardDetailedText:
        'The organization reached a momentous milestone by crossing the threshold of 1000 members, marking an extraordinary testament to its compelling mission and widespread influence. With a thriving community of over 1000 individuals.',
      image: milestone1000,
    },
  ];
  const items = [
    {
      title: '2019-AUGUST',
    },
    {
      title: '2020-APRIL',
    },
    {
      title: '2020-MAY',
    },
    {
      title: '2020-MAY',
    },
    {
      title: '2020-JUNE',
    },
    {
      title: '2020-AUGUST',
    },
    {
      title: '2021-JANUARY',
    },
    {
      title: '2021-JULY',
    },
    {
      title: '2022-AUGUST',
    },
  ];
  const handleTimelineClick = (timelineItem, index) => {
    setActiveIndex(index);
    // Perform additional actions on timeline event click
  };

  return (
    <div id="timeline" className="container mt-5">
      <div className="timelineHeading">
        <h4>OUR HISTORY</h4>
        <hr className="time-line" />
      </div>
      <div className="timeline">
        <Chrono
          items={items}
          mode="HORIZONTAL"
          scrollable
          slideShow
          slideItemDuration={3000}
          slideShowCycle
          slideShowInterval={5000}
          onTimelineItemClick={handleTimelineClick}
          theme={{
            primary: '#ff3c00',
            secondary: '#1e2350',
          }}
          disableNavOnKey
          slideItemClassName="timeline-slide-item"
          className="centered"
          cardHeight={100}
        >
          {itemsDetails.map((item, index) => (
            <div key={`${item.title - index}`}>
              <div className="content-container">
                <div className="left-content">
                  <div className="title">{item.cardTitle}</div>
                  <div className="description">{item.cardDetailedText}</div>
                </div>
                <div className="right-content">
                  <div className="image-container">
                    <img src={item.image} alt="Timeline" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Chrono>
      </div>
    </div>
  );
};

export default Timeline;
