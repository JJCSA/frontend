import React from 'react';
import './PastEventsModal.scss';

function PastEventsModal(event_information) {
  console.log(event_information);
  const img_base = '/events/';
  const img_src = img_base + event_information.img;

  return (
    <div className="events_modal">
      <div className="container-fluid">
        <img className="img_fluid" src={img_src} />
        <div>
          <p className="date mt-3 mb-0">{event_information.date}</p>
          <p className="event_title mb-0">{event_information.title}</p>
          <p className="event_desctiption">{event_information.description}</p>
          <p className="event_resources">Resources</p>
          <div>
            {event_information.video && (
              <span>
                Video{event_information.note && `(${event_information.note})`}:
                <a target="_blank" href={event_information.video}>{event_information.video}</a>
              </span>
            )}
          </div>
          <div>
            {event_information.material && (
              <span>
                Material:
                <a target="_blank" href={event_information.video}>
                  {event_information.material}
                </a>
              </span>
            )}         
          </div>
          <div>
            {event_information.qa && (
              <span>
                QA:<a target="_blank" href={event_information.qa}>{event_information.qa}</a>
              </span>
            )}
          </div>
          <div>
            {event_information.slides && (
              <span>
                Slides:
                <a target="_blank" href={event_information.slides}>
                  {event_information.slides}
                </a>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PastEventsModal;
