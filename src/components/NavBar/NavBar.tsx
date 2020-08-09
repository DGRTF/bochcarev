import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './NavBar.scss';
import label from '../../assets/logotype.png';

export default class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <Navbar collapseOnSelect fixed='top' expand="sm" bg="dark" variant='dark'>
          {/* <NavLink onClickCapture={this.scrollUp.bind(this)} className='navbar__links' to={`${process.env.PUBLIC_URL}/`}>Label</NavLink> */}
          <Navbar.Brand href="#home">
            {/* <NavLink onClickCapture={this.scrollUp.bind(this)} className='navbar__links' to={`${process.env.PUBLIC_URL}/`}> */}
              <img
                src={label}
                width="30"
                height="30"
                className="d-inline-block align-top navbar__logo"
                alt="logo"
              />
            {/* </NavLink> */}
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <NavLink onClickCapture={this.scrollUp.bind(this)} className='navbar__links' activeClassName='navbar__links_active' to={`${process.env.PUBLIC_URL}/`}>Главная</NavLink> */}
              {/* <NavLink onClickCapture={this.scrollUp.bind(this)} className='navbar__links' activeClassName='navbar__links_active' to={`${process.env.PUBLIC_URL}/price`}>Каталог</NavLink>
              <NavLink onClickCapture={this.scrollUp.bind(this)} className='navbar__links' activeClassName='navbar__links_active' to={`${process.env.PUBLIC_URL}/gallery`}>Галерея</NavLink> */}
            </Nav>
          </Navbar.Collapse>
          {/* <Navbar.Collapse className="justify-content-end"> */}
          <Navbar.Text>
            Номер телефона
            </Navbar.Text>
          {/* </Navbar.Collapse> */}
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        </Navbar>
      </div>
    )
  }

  private scrollUp() {
    window.scrollTo(null, 0);
  }
}
