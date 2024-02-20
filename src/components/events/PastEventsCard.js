import React, { useState } from 'react';
import './PastEventsCard.scss';
import { Button, Modal } from 'react-bootstrap';
import PastEventsModal from './PastEventsModal';

function PastEventsCard(event_information) {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const img_base = '/events/';
  const img_src = img_base + event_information.img;
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
          <PastEventsModal {...event_information} />
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
        <img className="card-img-top img-fluid" src={img_src} alt="Card cap" />
        <div className="card-body">
          <h6 className="card-title">{event_information.title}</h6>
          <p className="card-date-text">{event_information.date}</p>
          <p className="card-description-text">
            {event_information.description}
          </p>
          <p className="card-speaker-text">By: {event_information.speaker}</p>
          <button className="btn btn-primary" onClick={handleShow}>
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default PastEventsCard;
