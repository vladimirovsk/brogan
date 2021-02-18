import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import CardClip from '../CardClip/CardClip'

import bud1 from '../../img/home/bud1_new.jpg'
import bud2 from '../../img/home/slide5.jpg'
import bud3 from '../../img/home/bud2.jpg'  //paste crane
import bud4 from '../../img/home/bud_4.jpg'


import {translate} from 'react-switch-lang';
//import ScrollAnimation from 'react-animate-on-scroll';

function ComponentCard(props){

  const [{t}] = React.useState(props)
  const wz='230px';
  const hr='350px';

return(
<Container fluid={true} style={{backgroundColor:'transparent', color:'black', fontFamily:'Roboto Condensed'}}>
<Container fluid={'md'} style={{backgroundColor:'transparent', color:'black', fontFamily:'Roboto Condensed', marginBottom: '3em'}}>
  <Row className="justify-content-center mx-auto" style={{backgroundColor:'transparent'}}>
  <Col className='p-3 d-flex justify-content-center ' xs={12} sm={6} md={6} lg={3}>

          <CardClip img={bud1}
              width={wz}
              height={hr}
              name={t("home.ComponentCard.Card1.title")}
              prof1={t("home.ComponentCard.Card1.prof1")}
              prof2={t("home.ComponentCard.Card1.prof2")}
              body={t("home.ComponentCard.Card1.body")}
              backTitle={t("home.ComponentCard.Card1.backTitle")}
              fontBackText={"14px"}
              backText={t("home.ComponentCard.Card1.backText")}
            />
      </Col>

      <Col className='p-3 d-flex justify-content-center' xs={12} sm={6} md={6} lg={3}>
      <CardClip img={bud2}
              width={wz}
              height={hr}
              name={t("home.ComponentCard.Card2.title")}
              prof1={t("home.ComponentCard.Card2.prof1")}
              prof2={t("home.ComponentCard.Card2.prof2")}
              body={t("home.ComponentCard.Card2.body")}
              backTitle={t("home.ComponentCard.Card2.backTitle")}
              fontBackText={"14px"}
              backText={t("home.ComponentCard.Card2.backText")}
       />
      </Col>

      <Col className='p-3 d-flex justify-content-center' xs={12} sm={6} md={6} lg={3}>
      <CardClip img={bud3}
              width={wz}
              height={hr}
              name={t("home.ComponentCard.Card3.title")}
              prof1={t("home.ComponentCard.Card3.prof1")}
              prof2={t("home.ComponentCard.Card3.prof2")}
              body={t("home.ComponentCard.Card3.body")}
              backTitle={t("home.ComponentCard.Card3.backTitle")}
              fontBackText={"14px"}
              backText={t("home.ComponentCard.Card3.backText")}
            />
      </Col>

      <Col className='p-3 d-flex justify-content-center' xs={12} sm={6} md={6} lg={3}>
      <CardClip img={bud4}
              width={wz}
              height={hr}
              name={t("home.ComponentCard.Card4.title")}
              prof1={t("home.ComponentCard.Card4.prof1")}
              prof2={t("home.ComponentCard.Card4.prof2")}
              body={t("home.ComponentCard.Card4.body")}
              backTitle={t("home.ComponentCard.Card4.backTitle")}
              fontBackText={"13px"}
              backText={t("home.ComponentCard.Card4.backText")}
            />
      </Col>
    </Row>
  </Container>
  </Container>  
)

}

export default translate(ComponentCard);