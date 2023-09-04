import React from 'react'
import "./PastEventsModal.scss"
function PastEventsModal(event_information) {
    console.log(event_information)
    const img_base = "/events/"
    const img_src = img_base + event_information.img
    console.log(img_src)

    return (

        <div className="events_modal">
            <div className="conatainer-fluid">

                <div>
                    <div className='d-flex justify-content-start'>
                        <p className='date'>Date: {event_information.date}</p>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <h4 className='e_title'>{event_information.title}</h4>

                    </div>
                </div>
                <img className="img-fluid" src={img_src} />
                <div className="content">
                    <p>{event_information.description}</p>
                    <div>
                        {event_information.video && <span><h6 style={{ display: 'inline' }}>Video:</h6> <a href={event_information.material} target="_blank">{event_information.material}</a></span>}

                    </div>
                    <div>
                        {event_information.material && <span><h6 style={{ display: 'inline' }}>material:</h6> <a target="_blank" href={event_information.material}>{event_information.material}</a></span>}

                    </div>
                    <div>
                        {event_information.qa && <span><h6 style={{ display: 'inline' }}>Q&A:</h6> <a target="_blank" href={event_information.qa}> {event_information.qa}</a></span>}

                    </div>
                </div>


            </div>
        </div>
    )
}

export default PastEventsModal