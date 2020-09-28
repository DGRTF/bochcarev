import React, { Component } from 'react'
import './Home.scss';
import CardsBox from '../../components/CardsBox/CardsBox';
import NavBar from '../../components/NavBar/NavBar';
import welcomeImage from '../../assets/welcomeImage.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <NavBar />
        <img
          className='d-block w-100'
          src={welcomeImage}
          alt='First slide'
        />
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
