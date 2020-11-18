import React from 'react';
import routes from './routes';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

function App() {
  return (
    <div>
      <Navbar bg="dark" variant='dark' expand="lg" className='justify-content-between'>
        <Navbar.Brand href="/">Elijah Straight's I&E Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="mr-sm-2">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
            <NavDropdown title="Experiences" id="basic-nav-dropdown">
              <NavDropdown.Item href="/experiences/fahr">FAHR</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Coursework" id="basic-nav-dropdown">
              <NavDropdown.Item href="/coursework/290">I&E 290</NavDropdown.Item>
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