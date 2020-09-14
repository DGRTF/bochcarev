import React, { Component } from 'react'
import './Home.scss';
import CardsBox from '../../components/CardsBox/CardsBox';
import NavBar from '../../components/NavBar/NavBar';
import { Carousel } from 'react-bootstrap';
import qualityImg from '../../assets/pexels-tirachard-kumtanom-733854.jpg';
import priceImg from '../../assets/pexels-jonathan-borba-3689188.jpg';
import bestTeamImg from '../../assets/pexels-jeshootscom-834892.jpg';
import welcomeImage from '../../assets/welcomeImage.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <NavBar />
        <div className='home__content'>
          <Carousel
            className='home__present'
            controls={false}
            indicators={false}
            interval={null}
          >
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={welcomeImage}
                alt='First slide'
              />
              {/* <Carousel.Caption className='home__caption'>
                <h4>Лучшее качество</h4>
              </Carousel.Caption> */}
            </Carousel.Item>
            {/* <Carousel.Item>
              <img
                className='d-block w-100'
                src={priceImg}
                alt='First slide'
              />
              <Carousel.Caption className='home__caption'>
                <h4>Низкие цены</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={bestTeamImg}
                alt='First slide'
              />
              <Carousel.Caption className='home__caption'>
                <h4>Команда профессионалов</h4>
              </Carousel.Caption>
            </Carousel.Item> */}
          </Carousel>
        </div>
        <CardsBox />
        <div className='home__welcome'>
          <div className='home__welcome-text'>
            Сделай заказ сегодня и получи баню уже через 7 дней! Доставка в подарок!
          </div>
        </div>
        <div className='home__footer'>
          <div className='home__text-container'>
            <span>
              Контакты: Гатчинский район, п. Куровицы, Вырицкое шоссе, строение 21
            </span>
          </div>
        </div>
      </div>
    )
  }
}
