import React from 'react'
import { Container, Image } from 'react-bootstrap'
import '../../styles/About.css';
import image from '../../Images/utahImage.jpg'

function About() {
    return (
        <div>
            <Container style={{marginTop: '5px'}}>
                <Image src={image} alt='utah' fluid/>
            </Container>
            <Container fluid id='big-container'>
            <Container className='text-center' id='title-container'>
                <h1>My Story</h1>
            </Container>
            <Container id='smaller-container'>
            <p>Coming soon!</p>
            </Container>
            </Container>
        </div>
    )
}

export default About
