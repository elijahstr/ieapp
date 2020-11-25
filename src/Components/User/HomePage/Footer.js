import React from 'react'
import {Container, Breadcrumb, Navbar, Nav} from 'react-bootstrap'
import '../../../styles/Footer.css'

function Footer() {
    return (
        <div>
            <Container>
                <footer className='d-flex justify-content-sm-center'>
                    <Navbar>
                        <Nav>
                            <Nav.Link id='item' href="/contact">Contact Me</Nav.Link>
                            <Nav.Link id='item' href="https://entrepreneurship.duke.edu/education/undergrad-certificate/" target='_blank'>
                        I&E Certificate</Nav.Link>
                        </Nav>
                    </Navbar>
                </footer>
            </Container>
        </div>
    )
}

export default Footer

//<footer className='d-flex justify-content-sm-center'>