import React, { useRef, useEffect, useState } from 'react'

const Marquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // MOBILE: Different strategy - use percentage of page
      if (isMobile) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = scrollY / totalHeight
        
        // Move marquee based on page scroll percentage (more movement)
        const maxMarqueeMovement = 2000 // Fixed max movement for mobile
        const newPosition = scrollPercent * maxMarqueeMovement
        
        cancelAnimationFrame(animationRef.current)
        animationRef.current = requestAnimationFrame(() => {
          if (marqueeRef.current) {
            marqueeRef.current.style.transform = `translateX(-${newPosition}px)`
          }
        })
      } 
      // DESKTOP: Original logic
      else {
        const scrollSpeed = 0.8
        const newPosition = scrollY * scrollSpeed
        
        cancelAnimationFrame(animationRef.current)
        animationRef.current = requestAnimationFrame(() => {
          if (marqueeRef.current) {
            marqueeRef.current.style.transform = `translateX(-${newPosition}px)`
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationRef.current)
    }
  }, [isMobile])

  return (
    <div className='h-16 sm:h-20 w-full backdrop-blur bg-white/4 relative z-20 overflow-hidden'>
      <div 
        ref={marqueeRef}
        className='
          absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap
          font-extrabold text-[#01011D] text-stroke-outside uppercase
          text-2xl sm:text-4xl md:text-[45px]
          [word-spacing:8px] sm:[word-spacing:12px] md:[word-spacing:16px]
          [letter-spacing:2px] sm:[letter-spacing:4px] md:[letter-spacing:6px]
        '
      >
        {/* Mobile: More text repeats */}
        {isMobile ? (
          // Mobile version: 8 repeats
          <>
            {[...Array(8)].map((_, i) => (
              <span 
                key={i} 
                className={`ml-4 ${i === 0 ? 'opacity-100' : `opacity-${100 - (i * 15)}`}`}
              >
                What Are You Waiting For
              </span>
            ))}
          </>
        ) : (
          // Desktop version: 4 repeats
          <>
            {[...Array(4)].map((_, i) => (
              <span 
                key={i} 
                className={`ml-8 md:ml-16 ${i === 0 ? 'opacity-100' : `opacity-${100 - (i * 25)}`}`}
              >
                What Are You Waiting For
              </span>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Marquee