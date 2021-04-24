import React from 'react';
import {Row, Col, Container, Card} from 'react-bootstrap';
import {translate} from 'react-switch-lang';

import Footer from '../footer/Footer';
import './Contact.css';
import logo from '../../img/brogan-logo.png';
//import logo from '../../img/brogan-logo-top.png';
import crane from '../../img/banner-crane.jpg';


//import plan from '../../img/plan3.jpg'



function Contact(props) {
  const [{t}] = React.useState(props);

  const building = (
    <svg style={{marginRight: '0.5em', color: 'red'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-building" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
    <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
</svg>
  )

  const telephone = ( 
    <svg style={{marginRight: '0.5em', color: 'red'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
    </svg>    
  );
  const mail = ( 
    <svg style={{marginRight: '0.5em', color: 'red'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
  </svg>   
  );

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
        <Col sm={6} md={4} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
            margin: '0',
            paddingTop: '1em'
        }}
        >
          <img src={logo} alt='logo' width={'150px'}/>
          <div style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: '3em',
          color: 'red'
        }}> 
        {/* {t("header.title")} */}

          </div>
          </Col>
        <Col sm={0} md={2} >
       
        </Col>
        <Col sm={12} md={6}>
        <Card bg='white' className='addressCard'>
          <Card.Header>{t("contact.title")}</Card.Header>
          <Card.Body>
            <Card.Title>{t("contact.card.title")}</Card.Title>
            <Card.Text style={{
              textAlign: 'left', fontFamily:'Roboto Condensed', fontSize:'1em'
              }}>
              {building}{t("footer.addres1")}<br />
              {building}{t("footer.addres2")}<br />
              {telephone}<a href="tel: +48600347050">+48 600 347 050, </a><a href="tel:666182182" style={{color:'black'}}>666 182 182</a><br />
              {mail}<a href="mailto: jakub.smulski@brogan.pl">jakub.smulski@brogan.pl,</a><br />
              {mail}<a href="mailto: biuro@brogan.pl">biuro@brogan.pl</a>
              <br />NIP: 9442248440
              <br />REGON: 361471406
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


export default translate(Contact);