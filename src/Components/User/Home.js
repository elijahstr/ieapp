import React, {useState, useEffect} from 'react'
import {Container, Image, Card} from 'react-bootstrap'
import header from '../../Images/spaceHeader.jpg'
import HomeCarousel from './HomeCarousel';
import HeaderVideo from './HeaderVideo';
import '../../styles/Home.css'
import axios from 'axios';

function Home() {
    // const [courseArray, setCourseArray] = useState({}),
    const [exp, setExp] = useState([]),
    [course, setCourse] = useState([]);

  //   useEffect(() => {
  //       let stopCall = false;
  //       if(!stopCall){
  //           axios.get('/api/experiences')
  //           .then(res => {
  //               setExp(res.data)
  //           });
  //       }

  //       return () => stopCall = true;
  //   });

  //   useEffect(() => {
  //     let stopCall = false;
  //     if(!stopCall){
  //         axios.get('/api/coursework')
  //         .then(res => {
  //             setCourse(res.data)
  //         });
  //     }

  //     return () => stopCall = true;
  // });

    const mappedExp = exp.map((data, i) => (
        <div key={i}>
            <Container>
              <Card>
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.description}</Card.Text>
                </Card.Body>
              </Card>
            </Container>
        </div>
    ))

    const mappedCourse = course.map((data, i) => (
      <div key={i}>
          <Container>
            <Card>
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
              </Card.Body>
            </Card>
          </Container>
      </div>
  ))


    return (
        <div className='home-class'>
            {/* <Image className='header-image' src={header} fluid/> */}
            <HeaderVideo/>
            {/* <Container>
              {mappedExp}
              {mappedCourse}
            </Container> */}
              <HomeCarousel/>
            <Container>
              <footer className='text-center'>
                <a style={{color:'grey'}}href='/contact'>Contact Me</a>
              </footer>
            </Container>     
        </div>
    )
}

export default Home