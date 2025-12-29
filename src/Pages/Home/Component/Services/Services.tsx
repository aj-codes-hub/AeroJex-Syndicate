import React from 'react'
import ServiceCard from './Component/ServiceCard'

const Services: React.FC = () => {
   return (
    <div id='services' className='w-full md:h-[720px] flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-0'>
      
      <div className='w-full max-w-7xl flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12'>
        
        {/* Header Section */}
        <div className='text-[#3AC3F9] font-bold'>
          <h1 className='text-[26px] sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[35px] 2xl:text-[45px] md:leading-10 leading-6'>
            AUR <span className='text-[#3AF9EF]'>SER</span>VICES
          </h1>
          <p className='text-[10px] sm:text-sm md:text-base lg:text-sm 2xl:text-base text-[#3AF9EF] font-medium'>
            We Providing Web services..
          </p>
          <div className='h-[2px] w-[55%] sm:w-[25%] lg:w-[28%] bg-gradient-to-l from-[#3AF9EF] to-[#3af9ef20]'/>
          <div className='h-[2px] w-[55%] sm:w-[25%] lg:w-[28%] bg-gradient-to-l from-[#3af9ef1d] to-[#3AF9EF] mt-[2px]'/>
        </div>
         
        {/* Cards Grid - Responsive Layout */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6'>
          
          {/* Card 1 */}
          <ServiceCard 
            Icon='/Icons/Frontend.png'
            Title='Front-End Development' 
            Details='We create responsive, interactive user interfaces using modern frameworks like React, ensuring engaging experiences across all devices and browsers'
          />

          {/* Card 2 */}
          <ServiceCard 
            Icon='/Icons/Backend.png'
            Title='Back-End Development'
            Details='We build secure, scalable server-side systems with Node.js and databases, managing APIs, logic, and data flow for robust application performance and reliability'
          />

          {/* Card 3 */}
          <ServiceCard 
            Icon='/Icons/FullStack.png'
            Title='Full-Stack Development' 
            Details='We provide complete web solutions—from React frontends and Node.js backends to database management—delivering fully functional, scalable applications end-to-end'
          />

          {/* Card 4 */}
          <ServiceCard 
            Icon='/Icons/customization.png'
            Title='Website Customization' 
            Details='We tailor websites to your unique needs—modifying design, adding features, and integrating tools that align perfectly with your brand and business goals'
          />

          {/* Card 5 */}
          <ServiceCard 
            Icon='/Icons/BugRemove.png'
            Title='Debugging & Error Resolution' 
            Details='We identify, diagnose, and fix code errors and bugs to ensure your website runs smoothly, efficiently, and without interruptions'
          />

          {/* Card 6 */}
          <ServiceCard 
            Icon='/Icons/UxUi.png'
            Title='UI/UX Design'
            Details='We craft intuitive, user-centered designs that enhance engagement through seamless navigation, appealing visuals, and optimized user experiences'
          />             

        </div>

      </div>

    </div>
  )
}

export default Services