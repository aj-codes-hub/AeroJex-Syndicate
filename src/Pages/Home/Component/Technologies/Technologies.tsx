import React, { useRef, useEffect, useState } from 'react'
import Container from '../../../../Components/Layout/Container'
import AutoSlider3D from './AutoSlider3D'

const Technologies: React.FC = () => {
  const headingRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const workflowRef = useRef<HTMLHeadingElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  
  const [isVisible, setIsVisible] = useState({
    heading: false,
    text: false,
    workflow: false,
    slider: false
  })

  useEffect(() => {
    const elements = [
      { ref: headingRef, key: 'heading', delay: 0 },
      { ref: textRef, key: 'text', delay: 10 },
      { ref: workflowRef, key: 'workflow', delay: 20 },
      { ref: sliderRef, key: 'slider', delay: 30 }
    ]

    const observers = elements.map(element => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setIsVisible(prev => ({ ...prev, [element.key]: true }))
              }, element.delay)
            } else {
              setTimeout(() => {
                setIsVisible(prev => ({ ...prev, [element.key]: false }))
              }, 300)
            }
          })
        },
        { 
          threshold: 0.3,
          rootMargin: '0px 0px -50px 0px'
        }
      )

      if (element.ref.current) {
        observer.observe(element.ref.current)
      }

      return observer
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  // Floating animation style
  const floatingStyle = {
    transform: isVisible.heading 
      ? 'translateY(0px)' 
      : 'translateY(30px)',
    opacity: isVisible.heading ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
  }

  const textStyle = {
    transform: isVisible.text 
      ? 'translateY(0px)' 
      : 'translateY(20px)',
    opacity: isVisible.text ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
  }

  const workflowStyle = {
    transform: isVisible.workflow 
      ? 'translateY(0px)' 
      : 'translateY(15px)',
    opacity: isVisible.workflow ? 1 : 0,
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
  }

  const sliderStyle = {
    transform: isVisible.slider 
      ? 'translateY(0px) scale(1)' 
      : 'translateY(10px) scale(0.95)',
    opacity: isVisible.slider ? 1 : 0,
    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
  }

  return (
    <Container>
      <div id='info' className='flex justify-between items-center min-h-[650px]'>
        <div className='lg:w-[48%] w-[0%]'></div>

        <div className='lg:w-[52%] sm:w-[80%] w-[95%] text-center mx-auto flex flex-col'>
          {/* Main Heading with Floating Animation */}
          <div 
            ref={headingRef}
            className='transform-gpu'
            style={floatingStyle}
          >
            <h1 className='font-bold text-[#95F9FE] text-shadow-[#95F9FE] mt-8
                          text-[40px]
                          sm:text-[50px] leading-12
                          md:text-[60px] md:leading-22
                          lg:text-[52px] lg:leading-16
                          xl:text-[46px] xl:leading-14
                          2xl:text-[75px] 2xl:leading-20'>
              Technology is at the pinnacle of its development
            </h1>
          </div>

          {/* Description Text */}
          <div 
            ref={textRef}
            className='w-full text-[#A0A0A0] mx-auto transform-gpu'
            style={textStyle}
          >
            <p className='text-[14px]
                         md:text-[20px]
                         lg:text-[14px]
                         xl:text-[16px]
                         2xl:text-[20px]'>
              revolutionizing how we communicate, work, learn, and innovate while
              creating unprecedented opportunities for global progress and human
              advancement.
            </p>
          </div>
          
          {/* Work Flow Heading */}
          <h1 
            ref={workflowRef}
            className='text-[24px] text-[#3AF9EF] font-bold mt-5 tracking-wide [word-spacing:6px] transform-gpu'
            style={workflowStyle}
          >
            Work Flow
          </h1>
          
          {/* AutoSlider3D Container */}
          <div 
            ref={sliderRef}
            className='py-5 overflow-hidden md:w-[65%] w-[100%] mx-auto relative h-40 transform-gpu'
            style={sliderStyle}
          >
            <AutoSlider3D />  
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Technologies