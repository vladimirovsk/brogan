import React from 'react';
import {Modal, Button, Col, Row, Container, Card} from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import {translate} from 'react-switch-lang';



function GaleriaDialog(props) {
  const [{t}] = React.useState(props);
  const {openDialog, setOpenDialog, project} = props

  let images = [];
  let notename = {};
  

  try{
  project.images.map((item, key) =>  
    images.push({
      original:item,
      thumbnail:item
    })
  )}
  catch (error) {
    console.log(error)
    images = [];
  }

  try{
    notename = project.notename.map((item, key)=>(
        //console.log("NOTENAME "+key, item)
        <div key={key}>
          <hr />
          <h6 >{Boolean(item.name) ? `${item.name}`:null}</h6>
          <div>{Boolean(item.PUM) ? `PUM: ${item.PUM}`:null}</div>
          <div>{Boolean(item.PC) ? `PLO: ${item.PC}`:null}</div>
          <div>{Boolean(item.KUB) ? `KUB: ${item.KUB}`:null}</div>
        </div>  
       
    ))
  }
    catch (error){
      console.log(error)
      notename = {};
    }
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
        centered={true}
      >
       <Modal.Header closeButton>
          <Modal.Title>
            {project.title}<br />
        </Modal.Title> 

        </Modal.Header>
        <Modal.Body className="modal-content">
        <Container>
          <Row style={{margin:0, padding:0 }}>
            <Col sm={12} lg={3}  style={{margin:'0px', padding:'0px'}}>
              <Card bg='white' className='imageCard' style={{ }} >
                <Card.Header>INWESTOR: {project.investor}</Card.Header>
                <Card.Body>
                <Card.Title>{project.firma}</Card.Title>
                  {/* <Card.Text 
                    style={{textAlign: 'left', fontFamily:'Roboto Condensed', fontSize:'1em'}}>
                  {/* <br />investor: {project.investor} 
                  <br />localization: {project.localization}
                  <hr /> */}
                   {/* {notename} 
                </Card.Text> */}
                {notename}
            </Card.Body>
          </Card>
            </Col>
            <Col sm={12} lg={9} style={{margin:0, padding:0}}>
              <ImageGallery style={{height: '100vh'}}
                lazyLoad={false} 
                items={images} />   
            </Col>
          </Row>
        </Container>


        </Modal.Body>
        <Modal.Footer>
          <div style={{alignItems:'left', margin:'auto'}}>
          {project.localization}
          </div>  
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default  translate(GaleriaDialog);