import React from 'react';
import routes from './routes';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './styles/App.css'

function App() {
  return (
    <div>
      <Navbar expand="lg" className='justify-content-between' id='navbar'>
        <Navbar.Brand id='nav-link' href="/">Elijah Straight's I&E Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="mr-sm-2">
          <Nav className="ml-auto">
            <Nav.Link id='nav-link' href="/">Home</Nav.Link>
            <Nav.Link id='nav-link' href="/about">About Me</Nav.Link>
            <NavDropdown id='nav-link' title="Experiences">
              <NavDropdown.Item href="/experiences/fahr">FAHR</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown bsClass='dropdown' title="Coursework" id='nav-link'>
              <NavDropdown.Item id='dropdown-item' href="/coursework/290">I&E 290</NavDropdown.Item>
              <NavDropdown.Item href="/coursework/352">I&E 352</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      {routes}
    </div>
  );
}

export default App;