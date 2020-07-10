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
          <FormCall />
          <div className='home__text-container'>
            <span className='home__text'>У нас Вы можете заказать самые лучшие бани-бочки в регионе! Перейдите в раздел "Каталог" или заполните форму. Вам перезвонят в ближайщее время</span>
          </div>
        </div>
      </div>
    )
  }
}
