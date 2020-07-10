import React, { Component } from 'react'
import './Home.scss';
import CarouselBackground from '../../components/CarouselBackground/CarouselBackground';
import FormCall from '../../components/FormCall/FormCall';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <CarouselBackground />
        <div className='home__content'>
          <FormCall/>
        </div>
      </div>
    )
  }
}
