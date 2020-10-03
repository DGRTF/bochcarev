import React, { Component } from 'react'
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer__text-container'>
          <span>
            Контакты: Гатчинский р-н д. Воскресенское ул. Центральная 122
          </span>
        </div>
      </footer>
    )
  }
}
