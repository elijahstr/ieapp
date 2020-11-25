import React from 'react'
import {Container, Image, Card, Carousel} from 'react-bootstrap'
import '../../styles/Carousel.css'

function HomeCarousel() {
    return (
        <div>
          <Container className='d-flex justify-content-center' style={{paddingBottom: '70px'}}>
            <Card id='card-style'>
            <Card.Body as='a' href='/about' style={{color: "black"}}>
                    <Card.Title className='d-flex justify-content-center'>About Me</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis...</Card.Text>
                  </Card.Body>
            </Card>
           <Carousel className='carousel slide' indicators='false' id='carousel' pause='hover'  slide='true'>
              <Carousel.Item interval={5000}>
                <Container id='container-style' className='justify-content-center'>
                <Card id='card-style'>
                  <Card.Body as='a' href='/coursework/290' style={{color: "black"}}>
                    <Card.Title>I&E 290</Card.Title>
                    <Card.Text>Founder’s Workshop is a class that helps students learn the necessary skills to take their ideas and turn them into real life startups...</Card.Text>
                  </Card.Body>
                </Card>
                </Container>
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <Container id='container-style'>
                <Card id='card-style'>
                  <Card.Body as='a' href='/coursework/352' style={{color: "black"}}>
                    <Card.Title>I&E 352</Card.Title>
                    <Card.Text>Strategies for Innovation and Entrepreneurship is the Keystone class in the I&E Certificate...</Card.Text>
                  </Card.Body>
                </Card>
                </Container>
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <Container id='container-style'>
                <Card id='card-style'>
                  <Card.Body as='a' href='/experiences/fahr' style={{color: "black"}}>
                    <Card.Title>FAHR</Card.Title>
                    <Card.Text>FAHR is a nonprofit organization aiming to raise student and parent engagement...</Card.Text>
                  </Card.Body>
                </Card>
                </Container>
              </Carousel.Item>
            </Carousel> 
            </Container>
        </div>
    )
}

export default HomeCarousel
