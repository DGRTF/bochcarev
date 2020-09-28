import React, { Component } from 'react'
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer__text-container'>
          <span>
            Контакты: Гатчинский район, п. Куровицы, Вырицкое шоссе, строение 21
          </span>
        </div>
      </footer>
    )
  }
}
