import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import carousel_item_1 from '../../assets/carousel_item_1.jpg';

export default class CarouselBox extends Component {
  render() {
    return (
      <div>
        <Carousel 
        // fade={true} 
        // slide={false}
        // interval={3000}
        // indicators={false}
        // keyboard={false}
        // touch={false}
        // controls={false}
        // wrap={false}
        >
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={carousel_item_1}
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={carousel_item_1}
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={carousel_item_1}
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
