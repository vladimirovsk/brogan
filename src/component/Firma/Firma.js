import React from 'react';
import {Row, Col, Container, Image} from 'react-bootstrap';

import Footer from '../footer/Footer';
import './Firma.css';
//import logo from '../../img/brogan-logo.png';
import crane from '../../img/banner-crane.jpg';
import {translate} from 'react-switch-lang';
import SBrogan  from '../../img/SBrogan.png';

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
        <Container fluid={'md'} style={{borderWidth: '1px', borderRadius: '10px', boxShadow: '2px 2px 5px #545454', marginTop: '2em', marginBottom: '2em'}}>
        <Row className='cardFirma'>  
          <Col sm={12}>
            <div className='titleFirma'>
            {t("about.title")}
            </div>
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
          <Row>
            <Col>
              <Image src={SBrogan} alt={'Sertificat'}/>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />

    </React.Fragment>  
  )
}


export default translate(Firma);