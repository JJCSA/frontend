import React, { useState } from 'react'
import './PastEventsCard.scss'
import PastEventsModal from './PastEventsModal'
import { Button, Modal } from 'react-bootstrap';
function PastEventsCard(event_information) {
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const img_base = "/events/"
    const img_src = img_base + event_information.img
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
        <div className="card" >
            {show ? <ModalContent /> : null}
            {/* <div className='card'> */}
            <img className="card-img-top img-fluid" src={img_src} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{event_information.title}</h5>
                <p className="card-text">{event_information.description}</p>
                <button className="btn btn-primary" onClick={handleShow}>View More</button>
            </div>
        </div>
    )
}

export default PastEventsCard