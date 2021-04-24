import React from 'react';
import {Container, Carousel} from 'react-bootstrap';
import './Home.css'
import './animate.css'

import Footer from '../footer/Footer'
import ComponetFirst from './ComponetFirst'
import ComponentCard from './ComponentCard'
import ComponentCheck from './ComponentCheck'
import ComponentPartners from './ComponentPartners'
//import {Parallax, Background} from "react-parallax";

import image1 from '../../img/home/slide6.jpg'
import image2 from '../../img/home/slide2.jpg'
import image3 from '../../img/home/slide3.jpg'
import crane from '../../img/background-crane-1.jpg';
import {translate} from 'react-switch-lang';

function Home(props) {
  const [{t}] = React.useState(props);
  return (
  <Container fluid={true} className='Home' style={{
        backgroundImage: `url(${crane})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: "fixed",
        backgroundOrigin: "initial",
        backgroundClip: "initial",
        backgroundColor: "white"
    }}>
       <div style={{backgroundColor:'white'}}> 
       <Carousel  fade={true} controls={false} indicators={false} pause={false} wrap={true} interval={6000} >
        <Carousel.Item style={{transition: 'transform 2s ease, opacity 3s ease-out'}} >
          <img
            className="d-block"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className='captionCarusel'>
            <div>{t("home.slider.text1")}</div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{transition: 'transform 2s ease, opacity 3s ease-out'}}> 
          <img
            className="d-block"
            src={image2}
            alt="Third slide"
          />
          <Carousel.Caption className='captionCarusel'>
            <div>{t("home.slider.text2")}</div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{transition: 'transform 2s ease, opacity 3s ease-out'}}>
          <img
            className="d-block"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption className='captionCarusel'>
            <div>{t("home.slider.text3")}</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      {/* <Parallax strength={500} bgImage={crane}> */}
      
      {/* <Background className="custom-bg" style={{widows: '100vh'}}>
        <img src = {crane} alt='' />
      </Background>  */}

          <ComponetFirst />
          <ComponentCard />
          <ComponentCheck />
          <ComponentPartners />
          <Footer /> 
      {/* </Parallax> */}
  </Container>


  )
}

export default translate(Home);