import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import CurvedGallery from './CurvedGallery'
import Divider from '../components/Divider'
import ImageGallery from '../components/ImageGallery'
import ExperiencePage from '../components/ExperiencePage'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <CurvedGallery />
     <div className='pt-10' >
       {/* <Divider /> */}
      <ImageGallery />
     </div>
      <ExperiencePage />
      <Footer />
    </div>
  )
}

export default Home
