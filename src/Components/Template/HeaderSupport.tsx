import React, {useState , useEffect } from 'react'





const HeaderSupport:React.FC = () => {

const [Scrolledval , setScrolledVal] = useState(false);

useEffect(()=>{
  const HandleScrolled = () =>{
    setScrolledVal(window.scrollY > 15);
  }
  window.addEventListener('scroll', HandleScrolled);
  return() => {
     window.removeEventListener('scroll', HandleScrolled);
  }
},[])

  return (
    <div className={`fixed top-0 left-0 h-17 w-full transform duration-300 z-[100] ${Scrolledval ? "bg-black/10 backdrop-blur-2xl" : "bg-transparent"}`}>
        
    </div>
  )
}

export default HeaderSupport