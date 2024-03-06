import React from 'react';
import './PastEventsModal.scss';

function PastEventsModal(eventInformation) {
  const img_base = '/events/';
  const img_src = img_base + eventInformation.img;

  return (
    <div className="events_modal">
      <div className="container-fluid">
        <div className="modal-header">
          <div className="img-container">
            <img className="img_fluid" src={img_src} alt="Event Image" />
          </div>
        </div>
        <div className="modal-body">
          <div className="event-details">
            <h5 className="event_title">{eventInformation.title}</h5>
            <p className="date">{eventInformation.date}</p>
          </div>
          <div className="description">
            <p>{eventInformation.description}</p>
          </div>
          <div className="speaker-host">
            {eventInformation.title === "JJC Connect Con'2023" ? (
              <h5>Hosted by</h5>
            ) : (
              <h5>Speaker</h5>
            )}
            <div className="speaker-details">
              <p className="speaker-name">{eventInformation.speaker}</p>
              <p className="speaker-details1">
                {eventInformation.speakerDetails1}
              </p>
              <p className="speaker-details2">
                {eventInformation.speakerDetails2}
              </p>
            </div>
          </div>
          <div className="event_resources">
            <h5>Resources</h5>
            <div className="resources-section">
              {eventInformation.video && (
                <div className="resource-link">
                  <span className="icon">▶</span>
                  Video:
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={eventInformation.video}
                  >
                    {eventInformation.video}
                  </a>
                </div>
              )}
              {eventInformation.material && (
                <div className="resource-link">
                  <span className="icon">📄</span>
                  Material:
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={eventInformation.material}
                  >
                    {eventInformation.material}
                  </a>
                </div>
              )}
              {eventInformation.qa && (
                <div className="resource-link">
                  <span className="icon">❓</span>
                  QA:
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={eventInformation.qa}
                  >
                    {eventInformation.qa}
                  </a>
                </div>
              )}
              {eventInformation.slides && (
                <div className="resource-link">
                  <span className="icon">🖥️</span>
                  Slides:
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={eventInformation.slides}
                  >
                    {eventInformation.slides}
                  </a>
                </div>
              )}
              {eventInformation.note && (
                <div className="resource-link">
                  <b>Note:{eventInformation.note}</b>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastEventsModal;
