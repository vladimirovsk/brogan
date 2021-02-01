import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import logo from '../../img/brogan-logo.png'

import './Footer.css';

function Footer() {

  return (
    <Container fluid={true} className='Footer'>
    <Row style={{paddingTop: '1em', paddingBottom: '5em'}}>
      <Col sm={6} md={2}><img src={logo} height='140px'  alt='logo' /></Col>
      <Col sm={6} md={5}>
        <Row className='RowTitle'>Brogan Group Sp. z o.o.</Row>
        <Row><Col className='RowText'>adres biura: ul. Kobierzyńska 211 lok. nr 3, 30-383 Kraków</Col></Row>
        <Row><Col className='RowText'>adres siedziby: ul. Adama Doboszyńskiego 9, 32-031 Chorowice gm. Mogilany</Col></Row>
        
      </Col>
      <Col sm={12} md={5}>
        <Row className='RowTitle'>Kontact:</Row>
        <Row><Col className='RowText'>
        tel.<a href="tel:+48600347050">+48 600 347 050</a></Col></Row>
        <Row><Col className='RowText'>
          <a href="mailto:jakub.smulski@brogan.pl">jakub.smulski@brogan.pl, </a>
          <a href="mailto:biuro@brogan.pl"> biuro@brogan.pl</a>
          </Col></Row>  
      </Col>

    </Row>  
    </Container>
  )
}

export default Footer;