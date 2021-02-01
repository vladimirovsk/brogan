import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import Footer from '../footer/Footer';
import './Firma.css';
//import logo from '../../img/brogan-logo.png';
import crane from '../../img/banner-crane.jpg';
function Firma() {


  return(
    <React.Fragment>
      <Container fluid={true} className='Firma'>
      <Row style={{
        height:'30vh',  
        backgroundImage: `url(${crane})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
       
      </Row>  
        <Container fluid={'md'}>
        <Row className='cardFirma'>  
          <Col sm={12}>
            <div className='titleFirma'>Brogan Group Sp. z o.o. jest prężnie rowijącą się firmą sektora budowlanego. </div>
            <div className='textFirma'>
              Profil działalności spółki obejmuje generalne wykonawstwo inwestycji budowlanych oraz 
              kompleksową realizację projektów. Firma powstała w odpowiedzi na potrzeby rynku, 
              aby świadczyć usługi na najwyższym poziomie. Dużą wagę przywiązujemy do stałego 
              rozwoju przedsiębiorstwa. Nasze usługi realizujemy z najwyższą starannością, zgodnie z 
              technologią i sztuką budowlaną, wykorzystując materiały, których jakość potwierdzona jest 
              świadectwami certyfikacji. Cechuje nas indywidualne podejście do realizowanych projektów, 
              a każde zlecenie traktujemy jako nowe wyzwanie.
            </div>  
            <div style={{height: '10vh'}}>
              
            </div>
          </Col>
        </Row>
        </Container>
      </Container>
      
      <Footer />

    </React.Fragment>  
  )
}


export default Firma;