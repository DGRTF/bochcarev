import React, { Component } from 'react'
import './Home.scss';
import CarouselBackground from '../../components/CarouselBackground/CarouselBackground';
import FormCall from '../../components/FormCall/FormCall';
import NavBar from '../../components/NavBar/NavBar';
import Text from '../../components/Text/Text';
import { Card } from 'react-bootstrap';
import price_card_1 from '../../assets/price_card_1.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <NavBar />
        <CarouselBackground />
        <div className='home__content'>
          <div className='home__text-container'>
            <span className='home__text'>У нас Вы можете заказать самые лучшие бани-бочки в регионе! Перейдите в раздел "Каталог" или заполните форму. Вам перезвонят в ближайщее время</span>
          </div>
          <Card style={{ minWidth: '18rem', width: '18rem', maxWidth: '18rem' }}>
            <Card.Header>Закажите звонок прямо сейчас и мы ответим на все ваши вопросы!</Card.Header>
            <Card.Img variant="top" src={price_card_1} />
            <Card.Body>
              <FormCall />
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}
