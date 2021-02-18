import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {Paper} from '@material-ui/core';
import Footer from '../footer/Footer';
import './Oferta.css';
//import logo from '../../img/brogan-logo.png';
import crane from '../../img/banner-crane.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

import oferta1 from './oferta-1.jpg';
import oferta2 from './oferta-2.jpg';
import oferta3 from './oferta-3.jpg';

import {translate} from 'react-switch-lang';

function Oferta(props) {
  const [{t}] = React.useState(props);


  return(
    <React.Fragment>
      <Container fluid={true} className='Contact' style={{backgroundColor:'white'}}>
      <Row style={{
        height:'30vh',  
        backgroundImage: `url(${crane})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
       
      </Row>  
      <Container fluid={'md'}>
      <Row>  
        <Col sm={12}>
        <h3>{t("oferta.title")}</h3>
        </Col>
      </Row>
      <ScrollAnimation animateIn='animate__slideInUp' animatePreScroll={true} initiallyVisible={false} >
      <Paper className='ofertaPaper'>
      <Row>
      
        <Col sm={12} md={4}>
        <img src={oferta1} alt='oferta1' className='ofertaImage'/>
        </Col >
        <Col sm={12} md={8}>
        <h3>{t("oferta.card1.title")}</h3>
        <div className='ofertaText' >
          {t("oferta.card1.text")}
        </div>
        </Col>
      </Row> 
      </Paper>
      </ScrollAnimation>

      <ScrollAnimation animateIn='animate__slideInUp' animatePreScroll={false} initiallyVisible={false} >
      <Paper className='ofertaPaper'>
      <Row>
        <Col sm={12} md={4}>
        <img src={oferta2} alt='oferta2' className='ofertaImage'/>
        </Col>
        <Col sm={12} md={8}>
        <h3>{t("oferta.card2.title")}</h3>
        <div className='ofertaText'>
        {t("oferta.card2.text")}
        </div>
        </Col>
      </Row> 
      </Paper>
      </ScrollAnimation>

      <ScrollAnimation animateIn='animate__slideInUp' animatePreScroll={false} initiallyVisible={false} >
      <Paper className='ofertaPaper'>
      <Row>
        <Col sm={12} md={4}>
        <img src={oferta3} alt='oferta3' className='ofertaImage' />
        </Col>
        <Col sm={12} md={8}>
        <h3>{t("oferta.card3.title")}</h3>
        <div className='ofertaText'>
        {t("oferta.card3.text")}
        </div>
        </Col>
      </Row> 
      </Paper>
      </ScrollAnimation>

      </Container> 
      <Footer />
      </Container>
    </React.Fragment>  
  )
}


export default translate(Oferta);