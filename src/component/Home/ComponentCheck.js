import {Row, Col, Container} from 'react-bootstrap';
import backgr from '../../img/footer-bg-1.jpg'

//     background: url(../images/footer-bg-1.jpg) no-repeat fixed center;
//     background-image: url(../images/footer-bg-1.jpg);
//     background-position-x: center;
//     background-position-y: center;
//     background-size: initial;
//     background-repeat-x: no-repeat;
//     background-repeat-y: no-repeat;
//     background-attachment: fixed;
//     background-origin: initial;
//     background-clip: initial;
//     background-color: initial;
function ComponentCheck(){
  return(
  <Container fluid = {true} style={{
    backgroundImage: `url(${backgr})`, 
    backgroundPosition: "center",
    backgroundSize: "initial",
    backgroundRepeat:"no-repeat",
    backgroundAttachment: "fixed",
    backgroundOrigin: "initial",
    backgroundClip: "initial",
    backgroundColor: "initial",
    color: 'black',
    paddingTop: '5em',
    paddingBottom: '5em'
}}>
  <Container fluid={'md'}>  
  <Row >
    <Col sm={12} className='mb-4' style={{
        fontSize:'2rem',
        color: 'black'
      }}>
      Zakres usług
    </Col>

    <Col sm={12} md={6} style={{color: 'black'}}>
      <ul className='text-left homeCheckBox'>
        <li>generalne wykonawstwo inwestycji budowlanych</li>
        <li>budowa obiektów mieszkaniowych</li>
        <li>wynajem żurawi wieżowych dolno i górno obrotowych</li>
      </ul>
    </Col>

    <Col sm={12} md={6}>
    <ul className='text-left homeCheckBox'>
        <li>budowa obiektów przemysłowych</li>
        <li>obsługa formalna inwestycji</li>
        <li>doradztwo budowlane</li>
      </ul>
    </Col>
  </Row> 
  </Container>
  </Container>
  )
}

export default ComponentCheck;