import React from 'react';
import './JjcEvents.scss';
import PastEventsCard from '../../../../components/events/PastEventsCard';

function JjcEvents() {
  return (
    <div className="events">
      <div className="container-fluid">
        <div className="ongoing_events">
          <div className="horizontal-rule">
            <hr />
            <div className="centered-text ongoing_title">ONGOING EVENTS</div>
            <hr />
          </div>
          <p className="event-message">
            Currently, there are no ongoing events. Please check back later for
            updates.
          </p>
        </div>
        <div className="upcoming_events">
          <div className="horizontal-rule">
            <hr />
            <div className="centered-text upcoming_title">UPCOMING EVENTS</div>
            <hr />
          </div>
          <p className="event-message">
            Currently, there are no upcoming events. Please check back later for
            updates.
          </p>
        </div>
        <div className="past_events">
          <div className="horizontal-rule">
            <hr />
            <div className="centered-text past_title">PAST EVENTS</div>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-4">
              <PastEventsCard
                title="Demystifying USA's Health Insuarnce"
                description="Different types of health insurance plans (e.g., HMO, PPO, EPO, HDHP).HMO plans typically require members to select a primary care physician (PCP).PCPs act as gatekeepers, coordinating and authorizing all necessary medical care.PPO plans offer a broader network of healthcare providers.Members can see specialists without referrals and usually have more flexibility in choosing doctors.EPO plans are a hybrid between HMOs and PPOs.Like HMOs, EPOs often do not require referrals to see specialists.HDHPs have higher deductibles and lower premiums compared to traditional plans.  They are often paired with Health Savings Accounts (HSAs) that allow pre-tax contributions for medical expenses."
                video=" https://youtu.be/CSc1qB4kMOQ?si=v988fEdgGoO-upJy "
                slides="https://docs.google.com/presentation/d/1ABZRhc89_bkW4huH1X7BEqD4i9vU3pw8/edit?usp=sharing&ouid=111879486191854926715&rtpof=true&sd=true"
                img="health.png"
                date="7th October 2023"
                speaker="Mr Paresh Shah"
                speakerDetails1="Independent Insurance Agent"
                speakerDetails2="He has more than 20 years plus experience in the field. Licenses for Life, Health, Property, Casualty & Life in the state New York, New Jersey & Ohio.
                He worked with insurance companies like United Health Care AARP, Farmers and many more"
              />
            </div>

            <div className="col-md-4">
              <PastEventsCard
                title="JJC Connect Con'2023"
                description="JJC USA Connect-Con '23 is not just a gathering of like-minded individuals; it is a platform for collaboration,
                                innovation and exchange of new ideas. It is a space where boundaries are broken, and new frontiers are
                                explored. It is an opportunity to connect with industry leaders, thought pioneers, and fellow enthusiasts. It
                                is a change to forge lasting partnerships, to uncover hidden synergies, and to cultivate relations that will
                                propel us forward."
                img="JJC_ConnectCon.jpg"
                date="28th-30th July 2023"
                speaker="JJC USA"
              />
            </div>
            <div className="col-md-4">
              <PastEventsCard
                title="First Time Home Buyers Seminar"
                description="Beginners guide to learn more about how to purchase your first home in the United States.Beginners guide to learn more about how to purchase your first home in the United States."
                video="https://youtu.be/MxbweHDmrcs"
                material="https://drive.google.com/file/d/1daJqJZR6oEcU9JZ_RcLv8M5Ixitd6cWh/view"
                qa="https://drive.google.com/file/d/1Dc5Dh5PVAbro5qoEng2q9zfO9DWNY030/view"
                img="home_buyers.png"
                date="25th March 2023"
                speaker="Mr Ketan T Kenia"
                speakerDetails1="Broker Associate at Keller Williams Elite, Realty"
                speakerDetails2="Experienced Associate Broker with a wma demonstrated history of working in the real estate industry"
              />
            </div>
            <div className="col-md-4">
              <PastEventsCard
                title="Immigrant Entrepreneur"
                description="A spotlight on inspirational journey of an Immigrant student to an Entrepreneur in USA. Join us for an inspiring event as we shine a spotlight on their path to success, navigating challenges, embracing opportunities, and building a thriving business. Witness a tale of resilience, determination, and the American dream realized."
                video="https://drive.google.com/file/d/1nDVSOpwDl1UKvFqH5stQMpOyvhRHUZZW/view"
                note="Download the video and play on your device."
                material="https://drive.google.com/file/d/1U0o544k-xJVwS5Ya_p---sVRzepEcGtU/view"
                img="Entrepreneur.jpg"
                date="18th Feb 2023"
                speaker="Aditya Sharma"
                speakerDetails1="CEO and Co-Founder of HiCounselor, Ex-Deloitte &amp; PwC"
                speakerDetails2="HiCounselor is a unique career accelerator providing coaching and resources for job seekers and professionals
                to land their next job"
              />
            </div>
            <div className="col-md-4">
              <PastEventsCard
                title="Tips To Ace Your Interview"
                description="Unlock the secrets to interview success at our event: 'Tips To Ace Your Interview.' Gain invaluable insights, advice, and proven strategies to excel in your next interview. From detailed presentations to insider tips and tricks, equip yourself with the tools you need to impress employers and secure your dream job."
                video="https://youtu.be/d0-em6Do_Js"
                img="ace_interview.jpg"
                date="16th January 2021"
                speaker="Darshita Shah"
              />
            </div>
            <div className="col-md-4">
              <PastEventsCard
                title="LinkedIn Guidance (Piloting Your Career)"
                description="Embark on a career journey with 'LinkedIn Guidance: Piloting Your Career.' Elevate your professional presence with valuable tips and insights into crafting a robust, job-oriented profile on LinkedIn. Learn to showcase your skills effectively, network strategically, and unlock new opportunities on this essential platform for career advancement."
                video="https://youtu.be/aeotaL7onRc"
                img="LinkedinPost.png"
                date="5th Novermber 2020"
                speaker="Darshita Shah"
              />
            </div>
            <div className="col-md-4">
              <PastEventsCard
                title="Resume Guidance (Piloting your Career)"
                description="Join us for 'Resume Guidance: Piloting Your Career' to gain detailed insights into crafting an impactful resume. Discover the essential elements of an effective resume, learn proven strategies for highlighting your skills and experiences, and set sail towards your career goals with confidence and clarity."
                video="https://youtu.be/jNeorWi8ync"
                img="ResumePoster.png"
                date="24th October 2020"
                speaker="Darshita Shah"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JjcEvents;
