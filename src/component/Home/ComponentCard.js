import {Container, Row, Col} from 'react-bootstrap';
import CardClip from '../CardClip/CardClip'

import bud1 from '../../img/home/bud1_new.jpg'
import bud2 from '../../img/home/slide5.jpg'
import bud3 from '../../img/home/bud2.jpg'  //paste crane
import bud4 from '../../img/home/bud_4.jpg'

//import ScrollAnimation from 'react-animate-on-scroll';

function ComponentCard(){

  const wz='230px';
  const hr='400px';

return(
<Container fluid={true} style={{backgroundColor:'transparent', color:'black', fontFamily:'Roboto Condensed'}}>
<Container fluid={'md'} style={{backgroundColor:'transparent', color:'black', fontFamily:'Roboto Condensed', marginBottom: '3em'}}>
  <Row className="justify-content-center mx-auto" style={{backgroundColor:'transparent'}}>
  <Col className='p-3 d-flex justify-content-center ' xs={12} sm={6} md={6} lg={3}>

          <CardClip img={bud1}
              width={wz}
              height={hr}
              name={"Budownictwo mieszkaniowe"}
              prof1={""}
              prof2={""}
              body='(inne zdjęcie)'
              backTitle={""}
              fontBackText={"14px"}
              backText=" inne zdjęcie z tyłu opis :opis i zdjęcie doślę w późniejszym terminie"
            />
      </Col>

      <Col className='p-3 d-flex justify-content-center' xs={12} sm={6} md={6} lg={3}>
      <CardClip img={bud2}
          width={wz}
          height={hr}
          name={"Budownictwo handlowo- usługowe i użyteczności publicznej"}
          prof1={""}
          prof2={""}
          body='( zdjęcie jakieś galerii lub biurowca)'
          backTitle={""}
          fontBackText={"14px"}
          backText="opis doślę w późniejszym terminie"
       />
      </Col>

      <Col className='p-3 d-flex justify-content-center' xs={12} sm={6} md={6} lg={3}>
      <CardClip img={bud3}
                width={wz}
                height={hr}
                name={"Hale przemysłowe"}
                prof1={""}
                prof2={""}
                body='zdjęcie hali'
                backTitle={""}
                fontBackText={"14px"}
                backText="opis doślę w późniejszym terminie"
            />
      </Col>

      <Col className='p-3 d-flex justify-content-center' xs={12} sm={6} md={6} lg={3}>
      <CardClip img={bud4}
                width={wz}
                height={hr}
                name={"Inwestycje deweloperskie"}
                prof1={""}
                prof2={""}
                body='zdjęcie Strumyka -uj_02c '
                backTitle={""}
                fontBackText={"14px"}
                backText="opis doślę w późniejszym terminie."
            />
      </Col>
    </Row>      
  </Container>
  </Container>  
)

}

export default ComponentCard;