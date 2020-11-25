import React from 'react'
import {Container} from 'react-bootstrap'
import HomeCarousel from './HomeCarousel';
import HeaderVideo from './HeaderVideo';
import '../../../styles/Home.css'

function Home() {
    return (
      <div className='home-class'>
        <HeaderVideo/>
        <HomeCarousel/>
        <Container>
          <footer className='d-flex justify-content-sm-center'>
            <a style={{color:'grey'}}href='/contact'>Contact Me   |   </a>
            <a style={{color:'grey'}}href=''>I&E Certificate</a>
          </footer>
        </Container>     
      </div>
    )
}

export default Home