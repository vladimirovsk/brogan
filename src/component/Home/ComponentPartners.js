import {Container, Row, Col, Image} from 'react-bootstrap';


import partner1 from '../../img/home/partner/budimex-logo.jpg'
import partner2 from '../../img/home/partner/acar-developer-logo.jpg'
import partner3 from '../../img/home/partner/ekopark-logo.jpg'
import partner4 from '../../img/home/partner/mostostal-logo.jpg'
import partner5 from '../../img/home/partner/budimex-dromex-logo.jpg'
import partner6 from '../../img/home/partner/zasada-logo.jpg'

import ScrollAnimation from 'react-animate-on-scroll';
//import crane from '../../img/background-crane-1.jpg';


import './Home.css'
function ComponentPartners() {
  return (
    <Container fluid={true}>
      <Container fluid={'md'}>
      <Row>
        <Col sm={12} className={'text-center'} style={{ fontSize:'2rem', backgroundColor:'transparent', color:'black'}}>
          Współpracujemy z najlepszymi
        </Col>  
        
        <Col sm={12} md={6}>
            <ScrollAnimation animateIn="animate__fadeInTopLeft" animateOut="animate__fadeOutTopLeft" animatePreScroll={false} delay={1}>
            <Col><img className='MyImage' src={partner1} alt=''/></Col>
            </ScrollAnimation>   
            <ScrollAnimation animateIn="animate__fadeInTopLeft" animateOut="animate__fadeOutTopLeft" animatePreScroll={false} delay={2}>
            <Col><img className='MyImage' src={partner2} alt=''/></Col>
            </ScrollAnimation>   
            <ScrollAnimation animateIn="animate__fadeInTopLeft" animateOut="animate__fadeOutTopLeft" animatePreScroll={false} delay={3}>
            <Col><img className='MyImage' src={partner3} alt=''/></Col>
            </ScrollAnimation>   
        </Col>
       
        <Col sm={12} md={6}>
          <ScrollAnimation animateIn="animate__fadeInTopRight" animateOut="animate__fadeOutTopRight" animatePreScroll={false}>
            <Col><Image className='MyImage' src={partner4} alt=''/></Col>
          </ScrollAnimation> 
          <ScrollAnimation animateIn="animate__fadeInTopRight" animateOut="animate__fadeOutTopRight" animatePreScroll={false}>
            <Col><Image className='MyImage' src={partner5} alt=''/></Col>
          </ScrollAnimation>   
          <ScrollAnimation animateIn="animate__fadeInTopRight" animateOut="animate__fadeOutTopRight" animatePreScroll={false}>
            <Col><Image className='MyImage' src={partner6} alt=''/></Col>
          </ScrollAnimation>   
         
        </Col>
      </Row>
      </Container>  
     </Container>
  )
}

export default ComponentPartners;