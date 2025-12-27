import React from 'react'
import Container from '../../../../Components/Layout/Container'
import AutoSlider3D from './AutoSlider3D'


const Technologies:React.FC = () => {
   return (
    <Container >
        <div id='info' className='flex justify-between items-center h-[650px]'>

          <div className='lg:w-[48%] w-[0%]'>

          </div>

          <div className='lg:w-[52%] sm:w-[80%] w-[95%] text-center mx-auto mx flex flex-col
    
          '>
           
            <div>
              <h1 className='font-bold text-[#95F9FE] text-shadow-[#95F9FE]  mt-8
                                text-[40px]
                             sm:text-[50px]  leading-12
                             md:text-[60px]  md:leading-22
                             lg:text-[52px]  lg:leading-16
                             xl:text-[46px]  xl:leading-14
                             2xl:text-[75px] 2xl:leading-20
                             '>
                 Technology is at the pinnacle of its development
              </h1>

            </div>

            <div className='w-full text-[#A0A0A0] mx-auto'>
              <p className='text-[14px]
                           md:text-[20px]
                           lg:text-[14px]
                           xl:text-[16px]
                           2xl:text-[20px]
                           '>
                revolutionizing how we communicate, work, learn, and innovate while
                creating unprecedented opportunities for global progress and human
                advancement.
              </p>
            </div>
            
             <h1 className='text-[24px] text-[#3AF9EF] font-bold mt-5 tracking-wide [word-spacing:6px]'>
               Work Flow
            </h1>
          
         <div className='py-5 overflow-hidden md:w-[65%] w-[100%] mx-auto relative h-40'>
           <AutoSlider3D />  
         </div>
       
         </div>
        </div>
       </Container>
  )
}

export default Technologies