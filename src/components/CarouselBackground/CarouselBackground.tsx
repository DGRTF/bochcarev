import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import carousel_item_1 from '../../assets/carousel_item_1.jpg';
import carousel_item_2 from '../../assets/carousel_item_2.jpg';
import './CarouselBackground.scss';

export default class CarouselBackground extends Component {
  render() {
    return (
      <div className='carousel-background'>
        <Carousel
          slide={false}
          interval={5000}
          indicators={false}
          keyboard={false}
          touch={false}
          controls={false}
        >
          <Carousel.Item>
            <img
              style={{ backgroundImage: `url(${carousel_item_1})` }}
              className='d-block w-100 carousel-background__img'
              alt='First slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ backgroundImage: `url(${carousel_item_2})` }}
              className='d-block w-100 carousel-background__img'
              alt='First slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ backgroundImage: `url(${carousel_item_1})` }}
              className='d-block w-100 carousel-background__img'
              alt='First slide'
            />
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
