import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {




  return (
   

    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Багануур ХК</Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"> */}
        <Nav className="me-auto">
          <Nav.Link href="/home">Нүүр хуудас</Nav.Link>
          <Nav.Link href="/add">Шинэ хүсэлт</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/view">View</Nav.Link>
          <Nav.Link href="/order">Order</Nav.Link>
          <Nav.Link href="/orderhome">OrderHome</Nav.Link>
          <NavDropdown title="Account" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Settings
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
      {/* </Navbar.Collapse> */}
    </Container>
  </Navbar>
  );
};
export default Header;
