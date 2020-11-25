import React from 'react'
import { Container } from 'react-bootstrap'
import EmailForm from './EmailForm'

function Contact() {
    return (
        <div>
            <Container className='text-center'>
                <h1>Contact Me</h1>
            </Container>
            <Container>
                <h5 className='text-center'>Interested in contacting me? Leave your name, email and a message below, and I'll get back to you as soon as possible.</h5>
            </Container>
            <EmailForm/>
        </div>
    )
}

export default Contact
