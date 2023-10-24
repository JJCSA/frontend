import React from 'react'
import "./PastEventsModal.scss"
function PastEventsModal(event_information) {
    console.log(event_information)
    const img_base = "/events/"
    const img_src = img_base + event_information.img
    console.log(img_src)

    return (

        <div className="events_modal">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img_fluid" src={img_src} />
                    </div>
                    <div className="col-md-6">
                        <h4 className='e_title'>{event_information.title}</h4>
                        <h5>Date:{event_information.date}</h5>
                        <p>{event_information.description}</p>
                        <div className="horizontal-rule">
                            <hr />
                            <div className="centered-text">Resources</div>
                            <hr />
                        </div>
                        <div className="content">
                            <div>
                                {event_information.note && <span><h6 style={{ display: 'inline' }}>Note:</h6>{event_information.note}</span>}
                            </div>
                            <div>
                                {event_information.video && <span><h6 style={{ display: 'inline' }}>Video:</h6> <a href={event_information.video} target="_blank">{event_information.video}</a></span>}
                            </div>
                            <div>
                                {event_information.material && <span><h6 style={{ display: 'inline' }}>Material:</h6> <a target="_blank" href={event_information.material}>{event_information.material}</a></span>}

                            </div>
                            <div>
                                {event_information.qa && <span><h6 style={{ display: 'inline' }}>Q&A:</h6> <a target="_blank" href={event_information.qa}> {event_information.qa}</a></span>}

                            </div>
                            <div>
                                {event_information.slides && <span><h6 style={{ display: 'inline' }}>Slides:</h6> <a target="_blank" href={event_information.slides}> {event_information.slides}</a></span>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PastEventsModal