import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import carousel_item_1 from '../../assets/carousel_item_1.jpg';
import './CarouselBackground.scss';

export default class CarouselBackground extends Component {
  render() {
    return (
      <div className='carousel-background'>
        <Carousel
          // fade={true} 
          slide={false}
          interval={1000}
          // indicators={false}
          keyboard={false}
          touch={false}
          controls={false}
        // wrap={false}
        >
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-background__img'
              alt='First slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-background__img'
              alt='First slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-background__img'
              alt='First slide'
            />
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
