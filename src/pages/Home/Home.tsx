import React, { Component } from 'react'
import './Home.scss';
import CarouselBackground from '../../components/CarouselBackground/CarouselBackground';
import FormCall from '../../components/FormCall/FormCall';
import NavBar from '../../components/NavBar/NavBar';
import { Card, Carousel } from 'react-bootstrap';
import price_card_1 from '../../assets/price_card_1.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <NavBar />
        <CarouselBackground />
        <div className='home__content'>
          <Card style={{ minWidth: '18rem', width: '18rem', maxWidth: '18rem' }}>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={price_card_1}
                  alt='First slide'
                />
                <Carousel.Caption>
                  <h4>Лучшее качество</h4>
                  {/* <p>Контролькачества на каждом этапе производства.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={price_card_1}
                  alt='First slide'
                />
                <Carousel.Caption>
                  <h4>Низкие цены</h4>
                  {/* <p>Благодаря большим объёмам мы можем предложить самые низкие цены</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={price_card_1}
                  alt='First slide'
                />
                <Carousel.Caption>
                  <h4>Команда профессионалов</h4>
                  {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title>Добро пожаловать!</Card.Title>
              <Card.Text className='home__text'>
                У нас Вы можете заказать лучшие бани-бочки в регионе!
                Перейдите в раздел "Каталог" или заполните форму.
                Вам перезвонят в ближайшее время.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ minWidth: '18rem', width: '18rem', maxWidth: '18rem' }}>
            <Card.Header className='home__text'>Закажите звонок прямо сейчас и мы ответим на все ваши вопросы!</Card.Header>
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
