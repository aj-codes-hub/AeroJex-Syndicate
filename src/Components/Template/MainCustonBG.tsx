import React, { useEffect, useState } from 'react'

const MainCustonBG: React.FC = () => {
  const [opacities, setOpacities] = useState<number[]>([1, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      const sectionHeight = viewportHeight;
      
      const currentSection = Math.floor(scrolled / sectionHeight);
      
      const progress = (scrolled % sectionHeight) / sectionHeight;
      
      const newOpacities = [0, 0, 0, 0, 0, 0, 0];
      
      for (let i = 0; i < 7; i++) {
        if (i === currentSection) {
          newOpacities[i] = 1 - progress;
        } else if (i === currentSection + 1) {
          newOpacities[i] = progress;
        }
      }
      setOpacities(newOpacities);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='h-[500vh] w-full fixed top-0 left-0 -z-[10]'>
       <img src="/Images/BG1.png" className='absolute h-[100vh] w-full object-cover -z-[40]'
         style={{ opacity: opacities[0] }}
       /> 
       
       <img src="/Images/BG2.png" className='absolute h-[100vh] w-full object-cover -z-[50]'
         style={{ opacity: opacities[1] }}
       /> 
       
       <img src="/Images/BG1.png" className='absolute h-[100vh] w-full object-cover -z-[60]'
         style={{ opacity: opacities[2] }}
       /> 
       
       <img src="/Images/BG3.png" className='absolute h-[100vh] w-full object-cover -z-[70]'
         style={{ opacity: opacities[3] }}
       /> 
       
       <img src="/Images/BG1.png" className='absolute h-[100vh] w-full object-cover -z-[80]'
         style={{ opacity: opacities[4] }}
       /> 

         <img src="/Images/BG2.png" className='absolute h-[100vh] w-full object-cover -z-[90]'
         style={{ opacity: opacities[5] }}
       /> 
        
       <img src="/Images/BG2.png" className='absolute h-[100vh] w-full object-cover -z-[100]'
         style={{ opacity: opacities[6] }}
       /> 

    </div>
  );
}

export default MainCustonBG;