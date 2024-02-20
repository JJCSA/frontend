import React from 'react'
import "./JjcEvents.scss"
import PastEventsCard from '../../../../components/events/PastEventsCard'
function JjcEvents() {

    return (
        <div className="events">
            <div className="banner d-flex align-items-center justify-content-center">
                <div className="row">
                    <h2>ALL EVENTS</h2>
                </div>
            </div>
            <div className="container-fluid">
                <div className="past_events">
                    <div className="horizontal-rule">
                        <hr />
                        <div className="centered-text">PAST EVENTS</div>
                        <hr />
                    </div>
                    <div className="past_title">
                        <h2>PAST EVENTS</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <PastEventsCard
                                title="Demystifying USA's Health Insuarnce"
                                description="Different types of health insurance plans (e.g., HMO, PPO, EPO, HDHP).HMO plans typically require members to select a primary care physician (PCP).PCPs act as gatekeepers, coordinating and authorizing all necessary medical care.PPO plans offer a broader network of healthcare providers.Members can see specialists without referrals and usually have more flexibility in choosing doctors.EPO plans are a hybrid between HMOs and PPOs.Like HMOs, EPOs often do not require referrals to see specialists.HDHPs have higher deductibles and lower premiums compared to traditional plans.  They are often paired with Health Savings Accounts (HSAs) that allow pre-tax contributions for medical expenses."
                                video=" https://youtu.be/CSc1qB4kMOQ?si=v988fEdgGoO-upJy "
                                material="https://drive.google.com/file/d/1eQAY6fFLcJ_aYZDzQnzl6GwA1hjsjOtl/view"
                                qa="https://drive.google.com/file/d/1WP0ywGXX9qKP_IvSxhmlY6r5rQGSDL6O/view"
                                slides="https://docs.google.com/presentation/d/1ABZRhc89_bkW4huH1X7BEqD4i9vU3pw8/edit?usp=sharing&ouid=111879486191854926715&rtpof=true&sd=true"
                                img="health.png"
                                date='7th October 2023'

                            />
                        </div>

                        <div className="col-md-4">
                            <PastEventsCard
                                title="JJC Connect Con'2023 "
                                description="JJC USA Connect-Con '23 is not just a gathering of like-minded individuals; it is a platform for collaboration,
                                innovation and exchange of new ideas. It is a space where boundaries are broken, and new frontiers are
                                explored. It is an opportunity to connect with industry leaders, thought pioneers, and fellow enthusiasts. It
                                is a change to forge lasting partnerships, to uncover hidden synergies, and to cultivate relations that will
                                propel us forward."
                                video=" https://youtu.be/CSc1qB4kMOQ?si=v988fEdgGoO-upJy "
                                material="https://drive.google.com/file/d/1eQAY6fFLcJ_aYZDzQnzl6GwA1hjsjOtl/view"
                                qa="https://drive.google.com/file/d/1WP0ywGXX9qKP_IvSxhmlY6r5rQGSDL6O/view"
                                slides="https://docs.google.com/presentation/d/1ABZRhc89_bkW4huH1X7BEqD4i9vU3pw8/edit?usp=sharing&ouid=111879486191854926715&rtpof=true&sd=true"
                                img="JJC_connect.jpg"
                                date='28th July 2023'

                            />
                        </div>
                        <div className="col-md-4">
                            <PastEventsCard
                                title="First Time Home Buyers Seminar"
                                description="Beginners guide to learn more about how to purchase your first home in the United States.Beginners guide to learn more about how to purchase your first home in the United States."
                                video="https://youtu.be/MxbweHDmrcs"
                                material="https://drive.google.com/file/d/1eQAY6fFLcJ_aYZDzQnzl6GwA1hjsjOtl/view"
                                qa="https://drive.google.com/file/d/1WP0ywGXX9qKP_IvSxhmlY6r5rQGSDL6O/view"
                                img="home_buyers.png"
                                date='25th March 2023'

                            />
                        </div>
                        <div className="col-md-4">
                            <PastEventsCard
                                title="Immigrant Entrepreneur"
                                description="A spotlight on inspirational journey of an Immigrant student to an Entrepreneur in USA."
                                video="https://drive.google.com/file/d/1NPUSuMZYyNO-UDLDjtbaG1sTuWDKHF-F/view"
                                note="Download the video and play on your device."
                                material="https://drive.google.com/file/d/1ItnYqo5XPglL3kZc87br48fvsyLA1p2S/view"
                                img="Entrepreneur.jpg"
                                date="18th Feb 2023"



                            />
                        </div>
                        <div className="col-md-4">
                            <PastEventsCard
                                title="Tips To Ace Your Interview"
                                description="Detailed presentation and tips and tricks to ace your interview."
                                video="https://www.youtube.com/watch?v=d0-em6Do_Js&feature=youtu.be"
                                img="ace_interview.jpg"
                                date="16th January 2021"

                            />
                        </div>
                        <div className="col-md-4">
                            <PastEventsCard
                                title="How to make your LinkedIn Profile Stronger (Piloting Your Career)"
                                description="Valuable tips and insight into creating a strong, detailed and job-oriented profile on LinkedIn."
                                video="https://www.youtube.com/watch?v=aeotaL7onRc&feature=youtu.be"
                                img="LinkedinPost.png"
                                date="5th Novermber 2020"

                            />
                        </div>
                        <div className="col-md-4">
                            <PastEventsCard
                                title="Resume Guidance (Piloting your Career)"
                                description="Detailed insights on how to build an effective resume."
                                video="https://www.youtube.com/watch?v=jNeorWi8ync&feature=youtu.be"
                                img="ResumePoster.png"
                                date="24th October 2020"

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default JjcEvents