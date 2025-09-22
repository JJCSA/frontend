import React, { useState } from 'react';
import './EventsCard.css';
import { Button, Modal } from 'react-bootstrap';
import PastEventsModal from './EventsModal';

function EventsCard({
  img,
  title,
  date,
  description,
  speaker,
  ...eventInformation
}) {
  const [show, setShow] = useState(false);
  const imgBase = '/events/';
  const imgSrc = imgBase + img;
  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };
  const ModalContent = () => (
    <div className="row">
      <Modal
        // size="lg"
        show={show}
        onHide={handleClose}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <PastEventsModal
            {...eventInformation}
            img={img}
            title={title}
            date={date}
            description={description}
            speaker={speaker}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {' '}
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

  return (
    <div>
      {show ? <ModalContent /> : null}
      <div className="card">
        <img className="card-img-top img-fluid" src={imgSrc} alt="Card cap" />
        <div className="card-body">
          <h6 className="card-title">{eventInformation.title}</h6>
          <p className="card-date-text">{eventInformation.date}</p>
          <p className="card-description-text">
            {eventInformation.description}
          </p>
          <p className="card-speaker-text">By: {eventInformation.speaker}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleShow}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
