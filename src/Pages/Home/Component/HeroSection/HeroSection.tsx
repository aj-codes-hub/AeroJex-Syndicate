import React from 'react'
import Container from '../../../../Components/Layout/Container'
import AutoTextChange from './AutoTextChange'
import Button from '../../../../Components/Layout/Botton'




const HeroSection:React.FC = () => {

  return (
    <div id='home'>
       <Container>
        <div className='flex justify-between items-center h-[650px] w-full max-w-[1300px] mx-auto'>
          <div className='lg:w-[48%] w-[88%] sm:h-[75%] h-[85%] mx-auto lg:mx-0 text-center lg:text-left'>
            <div>
              <h1 className='font-bold text-[#95F9FE] text-shadow-[#95F9FE] leading-16 
                                text-[44px]
                             md:text-[60px]  md:leading-22
                             lg:text-[42px]  lg:leading-16
                             xl:text-[50px]  xl:leading-16
                             2xl:text-[65px] 2xl:leading-20
                             '>
                  Empowering Your <br /> 
                  Brand with Limitless
              </h1>

              <div className='h-20'>
              <AutoTextChange words={["Technology", "Innovation", "Creativity"]}/>
              </div>
            </div>

            <div className='w-[100%] sm:w-[80%] lg:w-[350px] xl:w-[410px] 2xl:w-[560px] text-[#A0A0A0] mx-auto lg:mx-0'>
              <p className=' text-[18px] lg:text-[13px] xl:text-[16px] 2xl:text-[21px]'>
                empowering businesses with innovative solutions that
                redefine possibilities and drive digital transformation
              </p>
            </div>

          <Button Title="Get in Touch"/>

          </div>

          <div className='lg:w-[52%] w-[0%]'>
           
          </div>
        </div>
       </Container>
    </div>
  )
}

export default HeroSection