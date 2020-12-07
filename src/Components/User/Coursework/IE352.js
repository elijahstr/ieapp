import React from 'react'
import image from '../../../Images/keyImage.jpg'
import { Container, Image } from 'react-bootstrap'

function IE352() {
    return (
        <div>
            <Container style={{marginTop: '5px'}}>
                <Image src={image} alt='key' fluid/>
            </Container>
           <Container className='text-center'>
                <h1>Innovation & Entrepreneurship</h1>
                <h2>I&E 352</h2>
           </Container>
            <Container>
                <h3>Description:</h3>
                <p>Strategies for Innovation and Entrepreneurship is the Keystone class in the I&E Certificate...</p>
            </Container> 
            <Container>
                <h3>Reflection:</h3>
                <p></p>
            </Container> 
        </div>
    )
}

export default IE352
