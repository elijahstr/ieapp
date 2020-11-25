import React from 'react'
import {Container} from 'react-bootstrap'
import HomeCarousel from './HomeCarousel';
import HeaderVideo from './HeaderVideo';
import Footer from './Footer';
import Jumbo from './Jumbo';
import '../../../styles/Home.css'

function Home() {
    return (
      <div className='home-class'>
        <HeaderVideo/>
        <Jumbo/>
        <HomeCarousel/>
        <Footer/>
      </div>
    )
}

export default Home