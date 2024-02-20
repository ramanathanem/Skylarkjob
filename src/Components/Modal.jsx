import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const  MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{fontSize:"55px", textAlign:"center"}}>
      <i class="bi bi-check-circle"></i>
      </div>
        <p className='text-center'>
        Great! Your data was send successfully. Thanks...
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default  MyVerticallyCenteredModal
