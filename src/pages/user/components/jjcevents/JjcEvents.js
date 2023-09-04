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
                                title="First Time Home Buyers Seminar"
                                description="Beginners guide to learn more about how to purchase your first home in the United States."
                                video="https://youtu.be/MxbweHDmrcs"
                                material="https://drive.google.com/file/d/1eQAY6fFLcJ_aYZDzQnzl6GwA1hjsjOtl/view"
                                qa="https://drive.google.com/file/d/1WP0ywGXX9qKP_IvSxhmlY6r5rQGSDL6O/view"
                                img="home_buyers.png"
                                date="03/25/23"

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
                                date="02/18/23"



                            />
                        </div>
                        <div className="col-md-4">
                            <PastEventsCard
                                title="Tips To Ace Your Interview"
                                description="Detailed presentation and tips and tricks to ace your interview."
                                video="https://www.youtube.com/watch?v=d0-em6Do_Js&feature=youtu.be"
                                img="ace_interview.jpg"
                                date="01/16/21"

                            />
                        </div>
                        <div className="col-md-4">
                            <PastEventsCard
                                title="How to make your LinkedIn Profile Stronger (Piloting Your Career)"
                                description="Valuable tips and insight into creating a strong, detailed and job-oriented profile on LinkedIn."
                                video="https://www.youtube.com/watch?v=aeotaL7onRc&feature=youtu.be"
                                img="home_buyers.png"
                                date="11/5/20"

                            />
                        </div>
                        <div className="col-md-4">
                            <PastEventsCard
                                title="Resume Guidance (Piloting your Career)"
                                description="Detailed insights on how to build an effective resume."
                                video="https://www.youtube.com/watch?v=jNeorWi8ync&feature=youtu.be"
                                img="home_buyers.png"
                                date="10/24/20"

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default JjcEvents