import React, { useEffect } from 'react'
import ServiceCard from './Component/ServiceCard'
import SectionHeading from '../../../../Components/Layout/SectionHeading'

const Services: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show-card')
          } else {
            entry.target.classList.remove('show-card')
          }
        })
      },
      { threshold: 0.2 }
    )

    // Sabhi cards ko select karo
    const cards = document.querySelectorAll('.animated-card')
    
    cards.forEach(card => {
      observer.observe(card)
    })

    return () => {
      cards.forEach(card => {
        observer.unobserve(card)
      })
    }
  }, [])

  return (
    <div id='services' className='w-full md:h-[720px] flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-0 overflow-hidden'>
      <div className='w-full max-w-7xl flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 md:px-4'>
        
        <SectionHeading 
          headingStart='AUR '
          headingMid='SER'
          headingend='VICES'
          SubHeading='We Providing Web services..'
          UnderLineWidth='w-[55%] sm:w-[25%] lg:w-[28%]'
        />
         
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6'>
          
          {/* Card 1 - Left Slide */}
          <div className="animated-card left-slide-animation">
            <ServiceCard 
              Icon='/Icons/Frontend.png'
              Title='Front-End Development' 
              Details='We create responsive, interactive user interfaces using modern frameworks like React, ensuring engaging experiences across all devices and browsers'
            />
          </div>

          {/* Card 2 - Top Slide */}
          <div className="animated-card top-slide-animation">
            <ServiceCard 
              Icon='/Icons/Backend.png'
              Title='Back-End Development'
              Details='We build secure, scalable server-side systems with Node.js and databases, managing APIs, logic, and data flow for robust application performance and reliability'
            />
          </div>

          {/* Card 3 - Right Slide */}
          <div className="animated-card right-slide-animation">
            <ServiceCard 
              Icon='/Icons/FullStack.png'
              Title='Full-Stack Development' 
              Details='We provide complete web solutions—from React frontends and Node.js backends to database management—delivering fully functional, scalable applications end-to-end'
            />
          </div>

          {/* Card 4 - Left Slide */}
          <div className="animated-card left-slide-animation">
            <ServiceCard 
              Icon='/Icons/customization.png'
              Title='Website Customization' 
              Details='We tailor websites to your unique needs—modifying design, adding features, and integrating tools that align perfectly with your brand and business goals'
            />
          </div>

          {/* Card 5 - Bottom Slide */}
          <div className="animated-card bottom-slide-animation">
            <ServiceCard 
              Icon='/Icons/BugRemove.png'
              Title='Debugging & Error Resolution' 
              Details='We identify, diagnose, and fix code errors and bugs to ensure your website runs smoothly, efficiently, and without interruptions'
            />
          </div>

          {/* Card 6 - Right Slide */}
          <div className="animated-card right-slide-animation">
            <ServiceCard 
              Icon='/Icons/UxUi.png'
              Title='UI/UX Design'
              Details='We craft intuitive, user-centered designs that enhance engagement through seamless navigation, appealing visuals, and optimized user experiences'
            />
          </div>

        </div>

      </div>

      <style>
        {`
          /* Base animation class */
          .animated-card {
            opacity: 0;
            transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          /* Animation delays for staggered effect */
          .animated-card:nth-child(1) {
            transition-delay: 0.2s;
          }
          .animated-card:nth-child(2) {
            transition-delay: 0.2s;
          }
          .animated-card:nth-child(3) {
            transition-delay: 0.2s;
          }
          .animated-card:nth-child(4) {
            transition-delay: 0.2s;
          }
          .animated-card:nth-child(5) {
            transition-delay: 0.2s;
          }
          .animated-card:nth-child(6) {
            transition-delay: 0.2s;
          }

          /* Left Slide Animation - Card 1 & 4 */
          .left-slide-animation.show-card {
            opacity: 1;
            transform: translateX(0);
          }
          .left-slide-animation {
            transform: translateX(-50px);
          }

          /* Top Slide Animation - Card 2 */
          .top-slide-animation.show-card {
            opacity: 1;
            transform: translateY(0);
          }
          .top-slide-animation {
            transform: translateY(-50px);
          }

          /* Right Slide Animation - Card 3 & 6 */
          .right-slide-animation.show-card {
            opacity: 1;
            transform: translateX(0);
          }
          .right-slide-animation {
            transform: translateX(50px);
          }

          /* Bottom Slide Animation - Card 5 */
          .bottom-slide-animation.show-card {
            opacity: 1;
            transform: translateY(0);
          }
          .bottom-slide-animation {
            transform: translateY(50px);
          }

          /* Smooth hover effect for all cards */
          .animated-card.show-card:hover {
            transform: translateY(-5px);
            transition: transform 0.3s ease;
          }
        `}
      </style>

    </div>
  )
}

export default Services