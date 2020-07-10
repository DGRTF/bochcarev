import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.scss';

export default class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant='dark'>
          <Link className='navbar__links' to={`${process.env.PUBLIC_URL}/`}>Label</Link>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className='navbar__links' to={`${process.env.PUBLIC_URL}/`}>Главная</NavLink>
              <NavLink className='navbar__links' to={`${process.env.PUBLIC_URL}/price`}>Каталог</NavLink>
              <NavLink className='navbar__links' to={`${process.env.PUBLIC_URL}/gallery`}>Галерея</NavLink>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Номер телефона
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Navbar>
      </div>

    )
  }
}
