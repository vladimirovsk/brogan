import React from 'react';
import {Container, Carousel} from 'react-bootstrap';
import './Home.css'
import './animate.css'

import Footer from '../footer/Footer'
import Componet1 from './ComponetFirst'
import ComponentCard from './ComponentCard'
import ComponentCheck from './ComponentCheck'
import ComponentPartners from './ComponentPartners'

import image1 from '../../img/home/slide1.jpg'
import image2 from '../../img/home/slide2.jpg'
import image3 from '../../img/home/slide3.jpg'



function Home() {
  return (
  <Container fluid={true} className='Home'>
      
      <Carousel fade={true} controls={false} indicators={false} pause={false} wrap={true} interval={6000}>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className='captionCarusel'>
            <div>Budownictwo mieszkaniowe</div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Third slide"
          />
          <Carousel.Caption className='captionCarusel'>
            <div>Budownictwo przemysłowe</div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption className='captionCarusel'>
            <div>Usługi ogólnobudowlane</div>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

      <Componet1 />
      <ComponentCard />
      <ComponentCheck />
      <ComponentPartners />

      <Footer />      
  </Container>
  )
}

export default Home;