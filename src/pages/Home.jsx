import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import CurvedGallery from './CurvedGallery'
import Divider from '../components/Divider'
import ImageGallery from '../components/ImageGallery'
import ExperiencePage from '../components/ExperiencePage'

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <CurvedGallery />
     <div >
       <Divider />
      <ImageGallery />
     </div>
      <ExperiencePage />
    </div>
  )
}

export default Home
