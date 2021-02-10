import React from 'react';
import {Container, Carousel} from 'react-bootstrap';
import './Home.css'
import './animate.css'

import Footer from '../footer/Footer'
import Componet1 from './ComponetFirst'
import ComponentCard from './ComponentCard'
import ComponentCheck from './ComponentCheck'
import ComponentPartners from './ComponentPartners'
//import {Parallax, Background} from "react-parallax";

import image1 from '../../img/home/slide6.jpg'
import image2 from '../../img/home/slide2.jpg'
import image3 from '../../img/home/slide3.jpg'
import crane from '../../img/background-crane-1.jpg';



function Home() {
  return (
  <Container fluid={true} className='Home' style={{
        backgroundImage: `url(${crane})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: "fixed",
        backgroundOrigin: "initial",
        backgroundClip: "initial",
        backgroundColor: "initial",

        // position: 'fixed',
        // display: 'block',
        // top: '0',
        // left: '0',
        //  width: '100%',
        //  height: '100%',
        // backgroundSize: "cover",
        // backgroundPosition: 'center center',
        // backgroundImage: `url(${crane})`,
        // transform: 'translateZ(0)',
        // willChange: 'transform',
        // backgroundRepeat: 'no-repeat',

        // backgroundOrigin: "initial",
        // backgroundClip: "initial",
    }}>
    
       <Carousel  fade={true} controls={false} indicators={false} pause={false} wrap={true} interval={6000}>
        <Carousel.Item >
          <img
            className="d-block"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className='captionCarusel'>
            <div>Budownictwo mieszkaniowe</div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={image2}
            alt="Third slide"
          />
          <Carousel.Caption className='captionCarusel'>
            <div>Budownictwo przemysłowe</div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption className='captionCarusel'>
            <div>Usługi ogólnobudowlane</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <Parallax strength={500} bgImage={crane}> */}
      
      {/* <Background className="custom-bg" style={{widows: '100vh'}}>
        <img src = {crane} alt='' />
      </Background>  */}
   
     
          <Componet1 />
          <ComponentCard />
          <ComponentCheck />
          <ComponentPartners />
          <Footer /> 
      {/* </Parallax> */}
  </Container>


  )
}

export default Home;