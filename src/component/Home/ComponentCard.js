import {Container, Card, Row, Col} from 'react-bootstrap';

import bud1 from '../../img/home/bud1.jpg'
import bud2 from '../../img/home/bud2.jpg'
import bud3 from '../../img/home/bud3.jpg'

import ScrollAnimation from 'react-animate-on-scroll';

function ComponentCard(){
return(
<Container fluid='sm'>
  <Row>
      <Col className='p-3' sm={12} md={4}>
      <ScrollAnimation animateIn='animate__slideInLeft' animateOut='animate__slideOutLeft' animatePreScroll={false} initiallyVisible={true} >
        <Card className='bg-transparent text-white'  >
        <Card.Body>
        <Card.Title style={{fontSize: '1.2rem'}}>
            Budownictwo <br/>mieszkaniowe
        </Card.Title>
        </Card.Body>
        <Card.Img variant="bottom" src={bud1} />
        </Card>
      </ScrollAnimation>  
      </Col>

      <Col className='p-3' sm={12} md={4}>
        <Card className='bg-transparent text-white'>
        <Card.Body>
        <Card.Title style={{fontSize: '1.2rem'}}>
          Budownictwo <br/>przemysłowe
        </Card.Title>
        </Card.Body>
        <ScrollAnimation animateIn='animate__rotateIn' animatePreScroll={true} initiallyVisible={false} delay={100}>  
        <Card.Img variant="bottom" src={bud2} />
        </ScrollAnimation>  
        </Card>
      </Col>

      <Col className='p-3' sm={12} md={4}>
      <ScrollAnimation animateIn='animate__slideInRight' animateOut='animate__slideOutRight' animatePreScroll={false} initiallyVisible={true} >
        <Card className='bg-transparent text-white'>
        <Card.Body>
        <Card.Title style={{fontSize: '1.2rem'}}>
          Obiekty użyteczności <br/>publicznej
        </Card.Title>
        </Card.Body>
        <Card.Img variant="bottom" src={bud3} />
      </Card>
      </ScrollAnimation>   
    </Col>
  </Row> 
</Container>
)

}

export default ComponentCard;