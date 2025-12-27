import React from 'react'
import HeroSection from './Component/HeroSection/HeroSection'
import Technologies from './Component/Technologies/Technologies'
import AboutSection from './Component/About/About'
import Services from './Component/Services/Services'
import Contact from './Component/Contact/Contact'
import MainCustonBG from '../../Components/Template/MainCustonBG'
import Earth from './Component/Earth'
import Header from '../../Components/Template/Header'
import SideNav from '../../Components/Template/SideNav'
import SectionLocation from '../../Components/Layout/SectionLocation'
import Marquee from './Component/Marquee'
import Loading from '../../Components/Template/Loading'
import Footer from '../../Components/Template/Footer'

const Home:React.FC = () => {
  return (
    <div>
       <MainCustonBG />
       <Loading />
       <SectionLocation />
       <Header />
       <SideNav />

       <div className='relative w-full max-w-[1920px] mx-auto'> 
        <HeroSection />
          <Earth />
        <Technologies />
       </div>
       
       <AboutSection />
       <Services /> 
       <Marquee />
       <Contact />
       <Footer />
    </div>
  )
}

export default Home