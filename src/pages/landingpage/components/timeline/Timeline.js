import React, { useState } from 'react';
import { Chrono } from 'react-chrono';
import './Timeline.scss'; // Import the custom CSS file

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active timeline event

  const items = [
    {
      title: '2019-AUGUST',
      cardTitle: 'JJC USA Inception',
      cardSubtitle: 'Card Subtitle for 2019',
      cardDetailedText: 'Started with 70 Members',
    },

    {
      title: '2020-APRIL',
      cardTitle: 'Covid-19 Assistance Program',
      cardSubtitle: 'Card Subtitle for 2019',
      cardDetailedText: 'Provided food assistance to 84 beneficiaries worth $4,450. Provided rental assistance to 26 beneficiaries worth $11,250 in association with JAINA. Helped professionals with JJCs professional network to find jobs in the US by mentoring on some of the best practices.',
    },

    {
      title: '2020-MAY',
      cardTitle: 'Virtual Games Event',
      cardSubtitle: 'Card Subtitle for 2020-MAY',
      cardDetailedText: 'Conducted first zoom event due to covid-19 with 70 participants. Distributed cash prize to those won games played during the event',
    },

    {
      title: '2020-MAY',
      cardTitle: 'Virtual Graduation Ceremony',
      cardSubtitle: 'Card Subtitle for 2020-MAY',
      cardDetailedText: 'Convocation ceremony for the class of 2020 graduates. Event included 30 graduate students and their family',
    },
    {
      title: '2020-JUNE',
      cardTitle: 'Job Assistance Program',
      cardSubtitle: 'Card Subtitle for 2020-JUNE',
      cardDetailedText: 'In light of covid-19 and the economic downturn, conducted a job assistance program to help 110 participants in their job searh process',
    },
    {
      title: '2020-AUGUST',
      cardTitle: 'Reached 500 Members',
      cardSubtitle: 'Card Subtitle for 2020-AUGUST',
      cardDetailedText: 'DATA NEEDED',
    },
    {
      title: '2021-JANUARY',
      cardTitle: 'Kicked Off Buddy Project',
      cardSubtitle: 'Card Subtitle for 2021-JANUARY',
      cardDetailedText: 'DATA NEEDED- Get details from Ishit',
    },
    {
      title: '2021-JULY',
      cardTitle: 'Conducted Alumni Symposium',
      cardSubtitle: 'Card Subtitle for 2021-JULY',
      cardDetailedText: 'DATA NEEDED- Get details from NISHIT',
    },
    {
      title: '2021-AUGUST',
      cardTitle: 'Reached 850 Members',
      cardSubtitle: 'Card Subtitle for 2021-AUGUST',
      cardDetailedText: 'DATA NEEDED',
    },
    {
      title: '2022-AUGUST',
      cardTitle: 'Crossed 1000 Members',
      cardSubtitle: 'Card Subtitle for 2022-AUGUST',
      cardDetailedText: 'DATA NEEDED',
    },






  ];

  const handleTimelineClick = (timelineItem, index) => {
    setActiveIndex(index);
    // Perform additional actions on timeline event click
  };

  return (
    <div className="container">
      <div className='timelineHeading'>
        <h4>OUR HISTORY</h4>
        <hr className="time-line" />
      </div>
      <div className="timeline">
        <Chrono
          items={items}
          mode="HORIZONTAL"
          slideShow
          slideItemDuration={3000}
          slideShowCycle
          slideShowInterval={5000}
          onTimelineItemClick={handleTimelineClick}
          activeTimelineItemStyle={{ backgroundColor: '#1890ff', color: '#fff' }}
          disableNavOnKey
          slideItemClassName="timeline-slide-item"
          className="centered"
        />
      </div>
    </div>
  );
};

export default Timeline;
