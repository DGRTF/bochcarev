import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant='dark'>
          <Navbar.Brand href="/">Navbar with text</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Главная</Nav.Link>
              <Nav.Link href="/price">Наши цены</Nav.Link>
              <Nav.Link href="/gallery">Галерея</Nav.Link>
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
