import React, { Component } from 'react'
import './Price.scss';
import CardsBox from '../../components/CardsBox/CardsBox';
import CarouselBackground from '../../components/CarouselBackground/CarouselBackground';
import FormCall from '../../components/FormCall/FormCall';

export default class Price extends Component {
  render() {
    return (
      <div className='price'>
        <CarouselBackground />
        <div className='price__content'>
          <CardsBox />
          <div className='price__form-call'>
            <FormCall />
          </div>
        </div>
      </div>
    )
  }
}
