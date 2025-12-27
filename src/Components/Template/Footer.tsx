import React from 'react'
import Navbar from './Navbar'
import { TfiLinkedin } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div id='Footer' className='min-h-[340px] bg-black/10 backdrop-blur relative flex flex-col justify-center items-center gap-6 sm:gap-8 py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-12'>
      
      {/* Top Gradient Line */}
      <div className='h-[1.5px] w-full bg-[radial-gradient(circle_at_center,#3AC3F9,transparent)] absolute top-0'></div>
        
      {/* Main Footer Content - Responsive Grid */}
      <div className='w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-8'>
        
        {/* Column 1: Logo & Description */}
        <div className='flex flex-col gap-3 sm:gap-4 justify-center'>
          <img 
            src="/Logo/FooterLogo.png"
            alt="Logo"
            className='h-auto w-[160px] sm:w-[180px] md:w-[200px] lg:w-[70%] max-w-[200px] mx-auto sm:mx-0'
          />
          
          <p className='text-[#c2c2c2] font-thin text-sm sm:text-[14px] text-center sm:text-left leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ad ut, possimus sit consectetur
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className='text-white flex flex-col justify-center items-center sm:items-start'>
          <div className='flex flex-col gap-3 sm:gap-4 w-full max-w-[250px]'>  
            <h1 className='text-lg sm:text-xl font-semibold text-center sm:text-left'> 
              Quick link's
            </h1>  
            <Navbar 
              className="flex flex-col gap-2 text-sm sm:text-[14px] text-white text-center sm:text-left"
            />
          </div>
        </div>

        {/* Column 3: Newsletter */}
        <div className='text-white flex flex-col justify-center items-center sm:items-start'>
          <div className='flex flex-col gap-3 sm:gap-4 w-full max-w-[300px]'>  
            <h1 className='text-lg sm:text-xl font-semibold text-center sm:text-left'> 
              Newsletter
            </h1>  
            <p className='text-[#c2c2c2] font-thin text-sm sm:text-[14px] text-center sm:text-left leading-relaxed'>
              Subscribe for the latest update.<br />
              And also have multiple discounts on any services
            </p>
            
            <div className='w-full relative overflow-hidden rounded-[6px] mt-2'>
              <input 
                type="email" 
                placeholder='@gmail.com'
                className='border rounded-[6px] h-[36px] sm:h-[30px] w-full p-2 sm:p-3 
                          focus:outline-[#3AE9F9] bg-transparent text-white text-sm'
              />
              <button className='absolute top-[2px] right-[2px] bg-black/30 hover:text-[#7DF4FF] text-[#3AE9F9]
                                 backdrop-blur py-1 sm:py-[3.7px] px-3 sm:px-4 rounded-[4px] hover:scale-[1.05] 
                                 transform duration-300 text-xs sm:text-[13px] font-medium'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Column 4: Social Media */}
        <div className='text-white flex flex-col justify-center items-center sm:items-start'>
          <div className='flex flex-col gap-3 sm:gap-4 w-full max-w-[250px]'>  
            <h1 className='text-lg sm:text-xl font-semibold text-center sm:text-left'> 
              Follow on
            </h1>  
            <div className='flex justify-center sm:justify-start gap-3 sm:gap-4 flex-wrap'>
              <a href="#" className='rounded-full h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] 
                                    bg-white/20 backdrop-blur flex justify-center items-center border
                                    hover:bg-white/30 hover:border-[#3AF9EF] transition-all duration-300'>
                <TfiLinkedin size={20} className='sm:w-5 sm:h-5'/>
              </a>
              <a href="#" className='rounded-full h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] 
                                    bg-white/20 backdrop-blur flex justify-center items-center border
                                    hover:bg-white/30 hover:border-[#3AF9EF] transition-all duration-300'>
                <FaFacebookF size={20} className='sm:w-6 sm:h-6'/>
              </a>
              <a href="#" className='rounded-full h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] 
                                    bg-white/20 backdrop-blur flex justify-center items-center border
                                    hover:bg-white/30 hover:border-[#3AF9EF] transition-all duration-300'>
                <IoLogoInstagram size={20} className='sm:w-6 sm:h-6'/>
              </a>
              <a href="#" className='rounded-full h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] 
                                    bg-white/20 backdrop-blur flex justify-center items-center border
                                    hover:bg-white/30 hover:border-[#3AF9EF] transition-all duration-300'>
                <FaGithub size={20} className='sm:w-6 sm:h-6'/>
              </a>
            </div>
          </div>
        </div>
        
      </div>

      {/* Bottom Copyright Section */}
      <div className='w-full max-w-7xl flex flex-col sm:flex-row justify-between items-center 
                     gap-4 sm:gap-0 pt-4 sm:pt-6 border-t border-white/10'>
        <p className='text-xs sm:text-sm text-[#c2c2c2] font-thin text-center sm:text-left'>
          ©2025 Alijan. All Rights Reserved.
        </p>

        <div className='flex flex-col sm:flex-row gap-3 sm:gap-6 items-center'>
          <a href="#" className='text-xs sm:text-sm text-[#c2c2c2] hover:text-[#3AF9EF] transition-colors'>
            Privacy Policy
          </a>
          <a href="#" className='text-xs sm:text-sm text-[#c2c2c2] hover:text-[#3AF9EF] transition-colors'>
            Terms of Service
          </a>
        </div>
      </div>

    </div>
  )
}

export default Footer