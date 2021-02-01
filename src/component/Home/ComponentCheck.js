import {Row, Col, Container} from 'react-bootstrap';


function ComponentCheck(){
  return(
  <Container fluid={'md'}>  
  <Row>
    <Col sm={12} className='mb-4' style={{
        fontSize:'2rem'
      }}>
      Zakres usług
    </Col>

    <Col sm={12} md={6} >
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
  )
}

export default ComponentCheck;