import React from 'react';
import {Row, Col, Container, Card} from 'react-bootstrap';

import Footer from '../footer/Footer';
import './Contact.css';
import logo from '../../img/brogan-logo.png';
import crane from '../../img/banner-crane.jpg';

//import plan from '../../img/plan3.jpg'



function Contact() {


  return(
    <React.Fragment>
      <Container fluid={true} className='Contact'>
      <Row style={{
        height:'30vh',  
        backgroundImage: `url(${crane})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
       
      </Row>  
      <Row>  
      {/* <Row style={{
                backgroundImage: `url(${plan})`,
                backgroundPosition: 'center',
               backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
      }}> */}
        <Col sm={6} md={4} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
            margin: '0',
            paddingTop: '1em'
        }}
        >
          <img src={logo} alt='logo' /></Col>
        <Col sm={0} md={2} >
       
        </Col>
        <Col sm={12} md={6}>
        <Card bg='white' className='addressCard'>
          <Card.Header>Brogan Group Sp. z o.o.</Card.Header>
          <Card.Body>
            <Card.Title>Adres biura:</Card.Title>
            <Card.Text style={{
              textAlign: 'left'
              }}>
              ul. Kobierzyńska 211 lok. nr 3<br />
              30-383 kraków<br />
             tel. kontaktowy <a href="tel: +48600347050">+48 600 347 050</a><br />
              email: <a href="mailto: jakub.smulski@brogan.pl">jakub.smulski@brogan.pl,</a><br />
              email: <a href="mailto: biuro@brogan.pl">biuro@brogan.pl</a>
            </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row>
          <Col sm={12} md={12}>
          
              <iframe title="BROGAN" src="https://www.google.pl/maps/embed?pb=!1m18!1m12!1m3!1d1282.0354722990157!2d19.895862063477338!3d50.010025471376494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165cfa81a3ffff%3A0x3f80456edafdcba!2sKobierzynska%20211!5e0!3m2!1sru!2spl!4v1611910526186!5m2!1sru!2spl" 
              width="100%" height="300" style={{border:0}}
              aria-hidden="false"></iframe>

          </Col>
        </Row>  
        <Footer />
        </Container>
    </React.Fragment>  
  )
}


export default Contact;