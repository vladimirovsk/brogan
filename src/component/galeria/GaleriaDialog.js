import React from 'react';
import {Modal, Button, Col, Row, Container} from 'react-bootstrap';

export default function GaleriaDialog(props) {
  const {openDialog, setOpenDialog, Project} = props
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Modal
        className='dialogGalery'
        show={openDialog}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
        animation={true}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {Project.title}<br />
            {Project.investor}
            
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
          <Row>
            <Col>
              Sorry, in development ...
            </Col>
          </Row>
        </Container>


        </Modal.Body>
        <Modal.Footer>
          <div>
          
          </div>  
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </div>
  );
}
