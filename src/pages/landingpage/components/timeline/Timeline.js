// // import React from 'react';
// // import './AboutUsContent.scss';

// // const AboutUsContent = () => {
// //     return (

// //         <section class="cd-h-timeline js-cd-h-timeline margin-bottom-md">
// //             <div class="cd-h-timeline__container container">
// //                 <div class="cd-h-timeline__dates">
// //                     <div class="cd-h-timeline__line">
// //                         <ol>
// //                             <li><a href="#0" data-date="16/01/2014" class="cd-h-timeline__date cd-h-timeline__date--selected">16 Jan</a></li>
// //                             <li><a href="#0" data-date="28/02/2014" class="cd-h-timeline__date">28 Feb</a></li>
// //                             {/* <!-- other dates here --> */}
// //                         </ol>

// //                         <span class="cd-h-timeline__filling-line" aria-hidden="true"></span>
// //                     </div>
// //                     {/* <!-- .cd-h-timeline__line --> */}
// //                 </div>
// //                 {/* <!-- .cd-h-timeline__dates --> */}

// //                 <ul>
// //                     <li><a href="#0" class="text-replace cd-h-timeline__navigation cd-h-timeline__navigation--prev cd-h-timeline__navigation--inactive">Prev</a></li>
// //                     <li><a href="#0" class="text-replace cd-h-timeline__navigation cd-h-timeline__navigation--next">Next</a></li>
// //                 </ul>
// //             </div>
// //             {/* <!-- .cd-h-timeline__container --> */}

// //             <div class="cd-h-timeline__events">
// //                 <ol>
// //                     <li class="cd-h-timeline__event cd-h-timeline__event--selected text-component">
// //                         <div class="cd-h-timeline__event-content container">
// //                             <h2 class="cd-h-timeline__event-title">Horizontal Timeline</h2>
// //                             <em class="cd-h-timeline__event-date">January 16th, 2014</em>
// //                             <p class="cd-h-timeline__event-description color-contrast-medium">
// //                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
// //                             </p>
// //                         </div>
// //                     </li>

// //                     <li class="cd-h-timeline__event text-component">
// //                         {/* <!-- event description here --> */}
// //                     </li>

// //                     {/* <!-- other descriptions here --> */}
// //                 </ol>
// //             </div>
// //             {/* <!-- .cd-h-timeline__events --> */}
// //         </section>

// //     );
// // }
// // export default AboutUsContent;











// // Working part1

// // import React, {useState} from 'react';
// // import HorizontalTimeline from "react-horizontal-timeline";

// // import './AboutUsContent.scss';

// // const AboutUsContent = () => {

// //     const [value, setValue] = useState(0);
// //     const [previous, setPrevious] = useState(0);

// //     // Values should be only date
// //     const VALUES = ["2021-01-01", "2021-01-15", "2021-03-22"];

// //     // Description array corresponding to values
// //     const description = [
// //         "The event of 1 Jan 2021 : Happy New Year",
// //         "The event of 15 Jan 2021 : Festival",
// //         "The event of 22 March 2021 : Board Exam",
// //     ];

// //     return (
// //         <div className="root-div">
// //             <div style={{
// //                 width: "60%",
// //                 height: "100px",
// //                 margin: "0 auto",
// //                 display: "flex"


// //             }}>
// //                 <HorizontalTimeline
// //                     styles={{ outline: "#DFA867", foreground: "#19295C" }}
// //                     index={value}
// //                     indexClick={(index) => {
// //                         setValue(index);
// //                         setPrevious(value);
// //                     }}
// //                     values={VALUES}
// //                 />
// //             </div>
// //             <div className="text-center">{description[value]}</div>
// //         </div>
// //     );
// // }

// // export default AboutUsContent;


// // Working part 2


// // import React, {useState} from 'react';
// // import './AboutUsContent.scss';
// // import { Chrono } from "react-chrono";
// // import { auto } from '@popperjs/core';
// // import { left } from '@popperjs/core';

// // const AboutUsContent = () =>{
// //   const [activeItem, setActiveItem] = useState(0);

// //   const items = [{
// //     title: "May 1940",
// //     cardTitle: "Dunkirk",
// //     url: "http://www.history.com",
// //     cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
// //     cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
// //     media: {
// //       type: "IMAGE",
// //       source: {
// //         url: "http://someurl/image.jpg"
// //       }
// //     }
// //   },
// //   {
// //     title: "May 1941",
// //     cardTitle: "Dunkirk",
// //     url: "http://www.history.com",
// //     cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
// //     cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
// //     media: {
// //       type: "IMAGE",
// //       source: {
// //         url: "http://someurl/image.jpg"
// //       }
// //     }
// //   },
// //   {
// //     title: "May 1942",
// //     cardTitle: "Dunkirk",
// //     url: "http://www.history.com",
// //     cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
// //     cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
// //     media: {
// //       type: "IMAGE",
// //       source: {
// //         url: "http://someurl/image.jpg"
// //       }
// //     }
// //   },
// //   {
// //     title: "May 1943",
// //     cardTitle: "Dunkirk",
// //     url: "http://www.history.com",
// //     cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
// //     cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
// //     media: {
// //       type: "IMAGE",
// //       source: {
// //         url: "http://someurl/image.jpg"
// //       }
// //     }
// //   },
// //   {
// //     title: "May 1945",
// //     cardTitle: "Dunkirk",
// //     url: "http://www.history.com",
// //     cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
// //     cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
// //     media: {
// //       type: "IMAGE",
// //       source: {
// //         url: "http://someurl/image.jpg"
// //       }
// //     }
// //   },
// //   {
// //     title: "May 1946",
// //     cardTitle: "Dunkirk",
// //     url: "http://www.history.com",
// //     cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
// //     cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
// //     media: {
// //       type: "IMAGE",
// //       source: {
// //         url: "http://someurl/image.jpg"
// //       }
// //     }
// //   },
// //   {
// //     title: "May 1947",
// //     cardTitle: "Dunkirk",
// //     url: "http://www.history.com",
// //     cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
// //     cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
// //     media: {
// //       type: "IMAGE",
// //       source: {
// //         url: "http://someurl/image.jpg"
// //       }
// //     }
// //   },
// // ];



// //   const handleClick = (item) => {
// //     setActiveItem(item.id);
// //   };

// //   return (
// //     <div className='horizontal'>
// //         <Chrono items={items} mode="HORIZONTAL" />
// //       </div>
// //   );
// // };

// // export default AboutUsContent;

// // Working part3

// // import React, {useState} from 'react';
// // import './AboutUsContent.scss' 

// // const AboutUsContent = () => [
// //   {
// //     date: '2019',
// //     heading: 'JJC USA Inception ',
// //     content: 'Started with 70 Members',
// //   },
// //   {
// //     date: '2020-APRIL',
// //     heading: 'Covid-19 Assistance Program',
// //     content: 'Provided food assistance to 84 beneficiaries worth $4,450. Provided rental assistance to 26 beneficiaries worth $11,250 in association with JAINA. Helped professionals with JJCs professional network to find jobs in the US by mentoring on some of the best practices.',
// //   },
// //   {
// //     date: '2020-MAY',
// //     heading: 'Virtual Games Event',
// //     content: 'Conducted first zoom event due to covid-19 with 70 participants. Distributed cash prize to those won games played during the event',
// //   },
// //   {
// //     date: '2020-MAY',
// //     heading: 'Virtual Games Event',
// //     content: 'Conducted first zoom event due to covid-19 with 70 participants. Distributed cash prize to those won games played during the event',
// //   },
// //   {
// //     date: '2020-MAY',
// //     heading: 'Virtual Graduation Ceremony',
// //     content: 'Convocation ceremony for the class of 2020 graduates. Event included 30 graduate students and their family',
// //   },
// //   {
// //     date: '2020-JUNE',
// //     heading: 'Job Assistance Program',
// //     content: 'In light of covid-19 and the economic downturn, conducted a job assistance program to help 110 participants in their job searh process',
// //   },
// //   {
// //     date: '2020-AUGUST',
// //     heading: 'Reached 500 Members',
// //     content: 'DATA NEEDED',
// //   },
// //   {
// //     date: '2021-JANUARY',
// //     heading: 'Kicked Off Buddy Project',
// //     content: 'DATA NEECED',
// //   },
// //   {
// //     date: '2021-JULY',
// //     heading: 'Conducted Alumni Symposium',
// //     content: 'DATA NEEDED',
// //   },
// //   {
// //     date: '2021-AUGUST',
// //     heading: 'Reached 850 Members',
// //     content: 'DATA NEEDED',
// //   },
// //   {
// //     date: '2022-AUGUST',
// //     heading: 'Crossed 1000 Members',
// //     content: 'DATA NEEDED',
// //   },

// // ];

// // const Timeline = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   const handleTimelineItemClick = (index) => {
// //     setActiveIndex(index);
// //   };

// //   return (
// //     <div className="timeline-container">
// //       {timelineData.map((item, index) => (
// //         <div
// //           key={index}
// //           className={`timeline-item ${index === activeIndex ? 'active' : ''}`}
// //           onClick={() => handleTimelineItemClick(index)}
// //         >
// //           <div className="timeline-dot" />
// //           <div className="timeline-date">{item.date}</div>
// //           <div className="timeline-heading">{item.heading}</div>
// //           {index === activeIndex && (
// //             <div className="timeline-content">{item.content}</div>
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Timeline;


// //working part4

// // import React from 'react';
// // import HorizontalTimeline from 'react-horizontal-timeline';
// // import './Timeline.scss'; // Import the custom CSS file

// // const Timeline = () => {
// //   const values = ['2009', '2012', '2015']; // Example timeline values

// //   return (
// //     <div className='container'>
// //       <div className='row'>
// //       <h1>My Timeline</h1>

// //       </div>

// //       <div className='row'>
// //       <div className="col-md-12">
// //       <div className="timeline">
// //         <HorizontalTimeline index={0} indexClick={(index) => console.log(index)} values={values} />
// //         <div className="timeline-labels">
// //           {values.map((value, index) => (
// //             <div key={index} className="timeline-label">
// //               <span>{value}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Timeline;


// import React, { useState } from 'react';
// import HorizontalTimeline from 'react-horizontal-timeline';
// import './Timeline.scss'; // Import the custom CSS file

// const Timeline = () => {
//   const [activeIndex, setActiveIndex] = useState(0); // State to track the active timeline event

//   const values = ['2009', '2012', '2015']; // Example timeline values

//   const handleTimelineClick = (index) => {
//     setActiveIndex(index);
//     // Perform additional actions on timeline event click
//   };

//   return (
//     <div>
//       <h1>My Timeline</h1>
//       <div className="timeline">
//         <HorizontalTimeline
//           index={activeIndex}
//           indexClick={handleTimelineClick}
//           values={values}
//         />
//         <div className="timeline-labels">
//           {values.map((value, index) => (
//             <div key={index} className={`timeline-label ${index === activeIndex ? 'active' : ''}`}>
//               <span>{value}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;


//working part 5

// import React, { useState, useRef } from 'react';
// import HorizontalTimeline from 'react-horizontal-timeline';
// import './Timeline.scss'; // Import the custom CSS file

// const Timeline = () => {
//   const [activeIndex, setActiveIndex] = useState(0); // State to track the active timeline event
//   const timelineRef = useRef(null); // Ref to timeline container

//   const values = ['2009', '2012', '2015']; // Example timeline values
//   const content = [
//     'Content for 2009',
//     'Content for 2012',
//     'Content for 2015'
//   ]; // Example content for each timeline event

//   const handleTimelineClick = (index) => {
//     setActiveIndex(index);
//     // Perform additional actions on timeline event click
//   };

//   const scrollToIndex = (index) => {
//     setActiveIndex(index);
//     timelineRef.current.scrollTo({
//       left: index * timelineRef.current.offsetWidth,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <div>
//       <h1>My Timeline</h1>
//       <div className="timeline" ref={timelineRef}>
//         <div className="timeline-arrows">
//           <div
//             className="timeline-arrow"
//             onClick={() => scrollToIndex(activeIndex - 1)}
//             style={{ visibility: activeIndex === 0 ? 'hidden' : 'visible' }}
//           >
//             &lt;
//           </div>
//           <div
//             className="timeline-arrow"
//             onClick={() => scrollToIndex(activeIndex + 1)}
//             style={{ visibility: activeIndex === values.length - 1 ? 'hidden' : 'visible' }}
//           >
//             &gt;
//           </div>
//         </div>
//         <div className="timeline-labels">
//           {values.map((value, index) => (
//             <div key={index} className={`timeline-label ${index === activeIndex ? 'active' : ''}`}>
//               <span>{value}</span>
//             </div>
//           ))}
//         </div>
//         <div className="timeline-content">
//           {content.map((item, index) => (
//             <div
//               key={index}
//               className={`timeline-event ${index === activeIndex ? 'active' : ''}`}
//               onClick={() => handleTimelineClick(index)}
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;

//part 6

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
