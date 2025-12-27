import React, { useState , useEffect } from 'react'

const Marquee:React.FC = () => {
const [isScrolled , setIsScrolled] = useState(50)

  useEffect(() => {
   const handleScroll2 = () => {
      const scrollSpeed = 0.05;
      setIsScrolled(135 - window.scrollY * scrollSpeed);
    }
    window.addEventListener('scroll', handleScroll2);
    
    return()=>{
      window.removeEventListener('scroll', handleScroll2);
    }

  },[]);


  return (
    <div className='h-20 w-full backdrop-blur bg-white/4 relative z-20 overflow-auto'>
        <div className='text-[45px] font-extrabold [word-spacing:16px] text-[#01011D] [letter-spacing:6px] absolute top-1/2
                       -translate-y-1/2 -translate-x-1/2 text-stroke-outside uppercase'
                       style={{
                         right: `${-isScrolled}% `,
                       }}>
              
                What Are You Waiting For
        </div>
    </div>
  )
}

export default Marquee