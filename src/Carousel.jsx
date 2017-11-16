import React from 'react';
import {Carousel} from 'react-bootstrap';

const AboutCarousel = (props) => {
  return (
    <Carousel style={carouselStyle}>
      <Carousel.Item>
          <h3>Different approach to data...</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Item>
      <Carousel.Item>
          <h3>Surch engine! Parallel Surch!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Item>
      <Carousel.Item>
          <h3>Play around with settings</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Item>
    </Carousel>
  )
};

const carouselStyle = {
  height: '30vh',
  width: '50vw'
}

export default AboutCarousel;
