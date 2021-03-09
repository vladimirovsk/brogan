import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import Footer from '../footer/Footer';
import './Firma.css';
//import logo from '../../img/brogan-logo.png';
import crane from '../../img/banner-crane.jpg';
import {translate} from 'react-switch-lang';

function Firma(props) {
  const [{t}] = React.useState(props);

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
              {t("about.text1")}
            </div>  
            <div className="textFirma">
              {t("about.text2")}
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


export default translate(Firma);