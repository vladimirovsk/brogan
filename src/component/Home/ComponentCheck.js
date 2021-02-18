import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import backgr from '../../img/footer-bg-1.jpg';
import {translate} from 'react-switch-lang';

function ComponentCheck(props){
  const [{t}] = React.useState(props);

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
      {t("home.ComponentCheck.title")}
    </Col>

    <Col sm={12} md={6} style={{color: 'black'}}>
      <ul className='text-left homeCheckBox'>
        <li>{t("home.ComponentCheck.check1")}</li>
        <li>{t("home.ComponentCheck.check2")}</li>
        <li>{t("home.ComponentCheck.check3")}</li>
      </ul>
    </Col>

    <Col sm={12} md={6}>
    <ul className='text-left homeCheckBox'>
        <li>{t("home.ComponentCheck.check4")}</li>
        <li>{t("home.ComponentCheck.check5")}</li>
        <li>{t("home.ComponentCheck.check6")}</li>
      </ul>
    </Col>
  </Row> 
  </Container>
  </Container>
  )
}

export default translate(ComponentCheck);