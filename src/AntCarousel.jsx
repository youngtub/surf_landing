import React from 'react';
import {Carousel} from 'antd';

const AntCarousel = (props) => {
  return (
    <Carousel style={carouselStyle}>

    <div>
      <br/>
      <h3>Different approach to data...</h3>
    </div>

    <div>
      <br/>
      <h3>Surch engine! Parallel Surch!</h3>
    </div>

    <div>
      <br/>
      <h3>Play around with settings</h3>
    </div>

  </Carousel>
  )
};
const carouselStyle = {
  height: '50vh',
  width: '50vw'
}

export default AntCarousel;
