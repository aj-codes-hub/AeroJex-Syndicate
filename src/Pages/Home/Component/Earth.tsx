import React, { useEffect, useState, useCallback } from 'react'

const Earth: React.FC = () => {
    const [OnScroll, setOnScroll] = useState(100);
    const [OnScroll2, setOnScroll2] = useState(0);
    const [OnScroll3, setOnScroll3] = useState(0);
    const [OnScroll4, setOnScroll4] = useState(1);
    const [OnScroll5, setOnScroll5] = useState(0);
    const [windowWidth, setWindowWidth] = useState(1920);
    const [EarthShow, setEarthShow] = useState(true);


useEffect(() => {
    const handleEarthVisibility = () => {     
        const earthLocation = window.scrollY;
        
        if(earthLocation > 850) {
            setEarthShow(false);
        } else {
            setEarthShow(true);
        }
    };

      window.addEventListener('scroll',handleEarthVisibility);
       
      return () =>{
       window.removeEventListener('scroll',handleEarthVisibility);
      }

    },[]);

    
    // Calculate initial right position based on window width
    const getInitialRightPosition = useCallback(() => {
        const width = window.innerWidth;
        
        // Different base positions for different screen sizes
        if (width > 1300) {
            const extraWidth = width - 1300;
            const extraRight = (extraWidth / 100) * 50;
            return 100 + extraRight;
        }
        
        return 100;
    }, []);
    
    // Get MAX_POSITION_INCREASE based on screen size
    const getMaxPositionIncrease = useCallback(() => {
        const width = window.innerWidth;
        
        // Tailwind breakpoints based conditions
        if (width < 768) { // Mobile
            return 300;
        } else if (width < 1024) { // Tablet
            return 400;
        } else if (width < 1280) { // Laptop (lg)
            return 550;
        } else if (width < 1536) { // Desktop (xl)
            return 600;
        } else if (width < 1920) { // Large desktop (2xl)
            return 700;
        } else { // 1920px and above
            return 850;
        }
    }, []); 
    
    // Get MAX_ROTATION_INCREASE based on screen size
    const getMaxRotationIncrease = useCallback(() => {
        const width = window.innerWidth;
        
        // Different rotation limits for different screen sizes
        if (width < 768) { // Mobile
            return 30;
        } else if (width < 1024) { // Tablet
            return 40;
        } else if (width < 1280) { // Laptop (lg)
            return 50;
        } else if (width < 1536) { // Desktop (xl)
            return 55;
        } else if (width < 1920) { // Large desktop (2xl)
            return 58;
        } else { // 1920px and above
            return 60;
        }
    }, []);
    
    // Update window width on resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        handleResize();
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    useEffect(() => {
        const handleOnScroll = () => {
            const scrolled = window.scrollY;
            const maxScroll = 530;
            
            // Get limits based on screen size
            const MAX_POSITION_INCREASE = getMaxPositionIncrease();
            const MAX_ROTATION_INCREASE = getMaxRotationIncrease();
            
            // EARTH POSITION MOVEMENT (OnScroll)
            let newScrollVal = (scrolled / maxScroll) * 500;
            newScrollVal = Math.min(newScrollVal, MAX_POSITION_INCREASE);
            
            // Calculate responsive right position
            let baseRightPosition = getInitialRightPosition();
            setOnScroll(Math.max(baseRightPosition, baseRightPosition + newScrollVal));
            
            // EARTH ROTATION (OnScroll2) - Also make it responsive
            const maxScroll2 = 900;
            let newScrollVal2 = (scrolled / maxScroll2) * 500;
            // You can also limit OnScroll2 if needed
            // const MAX_ROTATION2 = 400; // Example limit
            // newScrollVal2 = Math.min(newScrollVal2, MAX_ROTATION2);
            setOnScroll2(newScrollVal2)

            // RING ROTATION (OnScroll3) - Responsive limit
            const maxScroll3 = 5600;
            let newScrollVal3 = (scrolled / maxScroll3) * 500;
            newScrollVal3 = Math.min(newScrollVal3, MAX_ROTATION_INCREASE);
            setOnScroll3(newScrollVal3)

            // OPACITY (OnScroll4)
            const maxScroll4 = 600;
            const newScrollVal4 = Math.max(0, 1 - (scrolled / maxScroll4));
            setOnScroll4(newScrollVal4) 

            // CUBE OPACITY (OnScroll5)
            const maxScroll5 = 600;
            const newScrollVal5 = (scrolled / maxScroll5) * 1;
            setOnScroll5(newScrollVal5) 
        }
        
        window.addEventListener('scroll', handleOnScroll);
        handleOnScroll();

        return () => {
            window.removeEventListener('scroll', handleOnScroll);
        };
    }, [windowWidth, getInitialRightPosition, getMaxPositionIncrease, getMaxRotationIncrease]);

    return (
        <div className={`transition-all duration-1000'> ${EarthShow ? "opacity-100" : "opacity-0 scale-0"}`}>
            <div 
                className='fixed top-28 lg:block hidden overflow-hidden
                    md:h-[400px] md:w-[550px]
                    lg:h-[400px] lg:w-[550px]
                    xl:h-[400px] xl:w-[550px]
                    '
                style={{
                    right: `${OnScroll}px`,
                    rotate: `${OnScroll3}deg`,
                }}
            >
                <img 
                    src="/Images/FullStoneRing.png" 
                    className='absolute z-[10] h-[90%] w-[100%] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 Blink-Animation'
                    style={{ opacity: OnScroll4 }} 
                />
                <img 
                    src="/Images/FullBlueRing2.png" 
                    className='absolute z-[10] h-[90%] w-[100%] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                />
                <img 
                    src="/Images/Earth2.png" 
                    className='absolute z-[20] h-[100%] w-[90%] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rotate-Animation'
                    style={{
                        rotate: `${-OnScroll2}deg`,
                        opacity: OnScroll4,
                    }}       
                />
                <img 
                    src="/Images/Cube2.png" 
                    className='absolute z-[20] h-[120%] w-[120%] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rotate-Animation2'
                    style={{
                        rotate: `${-OnScroll2}deg`,
                        opacity: OnScroll5,
                    }}       
                />
                <img 
                    src="/Images/HalfStoneRing.png" 
                    className='absolute z-[30] h-[100%] w-[94%] left-[2.4%] top-[2.5%] rotate-[7.2deg] Blink-Animation'
                    style={{ opacity: OnScroll4 }}
                />
                <img 
                    src="/Images/HalfBlueRing2.png" 
                    className='absolute z-[30] h-[100%] w-[94%] left-[2.4%] top-[2.5%] rotate-[7.2deg]'
                />
            </div>
        </div>
    )
}

export default Earth
