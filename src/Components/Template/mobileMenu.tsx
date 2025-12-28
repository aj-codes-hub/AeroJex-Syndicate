import React from 'react'
import Navbar from './Navbar';

interface MobileMenuProps {
    className?: string
}



const MobileMenu:React.FC<MobileMenuProps> = ({className}) =>{
  
  return (
     <div className={`backdrop-blur-2xl bg-black/10 h-screen overflow-hidden fixed top-0 left-0 pt-10 transform duration-300
                    ${className}`}>
   
     <img src="Logo/FooterLogo.png" 
          alt="logo"
          className='w-[80%] sm:w-[80%] sm:h-[80px] h-[60px]' />

     <Navbar className="text-[24px] sm:text-[34px] pl-2 mt-10 flex flex-col gap-5 sm:gap-8"/>

     </div>
)
};

export default MobileMenu;