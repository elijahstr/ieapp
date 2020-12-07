import React from 'react'
import {Container, Card, Carousel} from 'react-bootstrap'
import '../../../styles/Carousel.css'

function HomeCarousel() {
    return (
      <div>
        <Container className='text-center'>
          <h3 id='car-title'>Experiences & Coursework</h3>
        </Container>
        <Container>
          <Carousel className='carousel slide' id='carousel' pause='hover'>
            <Carousel.Item>
              <Container id='container-style' className='justify-content-center'>
              <Card id='card-style'>
                <Card.Body as='a' href='/coursework/290' style={{color: "black"}}>
                  <Card.Title>I&E 290</Card.Title>
                  <Card.Text>Founder’s Workshop is a class that helps students learn the necessary skills to take their ideas and turn them into real life startups...</Card.Text>
                </Card.Body>
              </Card>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container id='container-style'>
              <Card id='card-style'>
                <Card.Body as='a' href='/coursework/352' style={{color: "black"}}>
                  <Card.Title>I&E 352</Card.Title>
                  <Card.Text>Strategies for Innovation and Entrepreneurship is the Keystone class in the I&E Certificate...</Card.Text>
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
