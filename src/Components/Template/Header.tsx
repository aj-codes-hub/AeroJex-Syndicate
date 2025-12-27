import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import MobileMenu from './mobileMenu';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Header:React.FC = () => {
const [Scrolledval , setScrolledVal] = useState(false);
const [IsShow , setIsShow] = useState(false);

useEffect(()=>{
  const HandleScrolled = () =>{
    setScrolledVal(window.scrollY > 10);
  }
  window.addEventListener('scroll', HandleScrolled);
  return() => {
     window.removeEventListener('scroll', HandleScrolled);
  }
},[])

const handleIsShow = () =>{
  setIsShow(!IsShow);
}


  return (
    <div className='w-full max-w-[1920px] mx-auto mt-5 xl:px-15 lg:px-15 md:px-3 px-2 py-1 sticky top-0 z-[200]'>
    <div className={`flex justify-between px-5 ${Scrolledval? "backdrop-blur-sm bg-black/10" : ""}`}>
     <img src="/Logo/Logo.png" 
          alt="logo"
          height={60}
          width={60} />
       
       <div className='lg:w-[45%] w-[55%] mr-10 md:block hidden'>
       <Navbar className=" justify-between py-4 flex "/>
       </div>
       
       <button onClick={handleIsShow}
               className='text-[white] md:hidden block'>
               {IsShow ? <RxCross2 size={40}/> : <IoMenu size={40}/>} 
       </button>

       <div className='w-[45%] md:hidden block absolute'>
       <MobileMenu className={` ${IsShow ? "w-[70%] px-5 sm:px-8" : "w-[0%]" } `}/>
       </div>
       
     </div>
    </div>
  )
}

export default Header