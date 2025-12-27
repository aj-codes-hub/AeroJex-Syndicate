import React from 'react'

const Loading:React.FC = () => {
  return (
    <div className='w-screen fixed z-[9999] bg-white/14 backdrop-blur
                    top-0 flex loader-page overflow-hidden'>
        
        <div className='h-[300px] w-[650px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overflow-hidden'>
        
        <img src="/Logo/A.png" 
             alt="logo" 
             className='absolute h-[92.38px] w-[91.86px] left-[38%] top-[18%] aaa'/>

         <img src="/Logo/J.png" 
             alt="logo" 
             className='absolute h-[53.31px] w-[110.24px] left-[43.2%] top-[31%] jjj'/>

         <img src="/Logo/S.png" 
             alt="logo" 
             className='absolute h-[53.54px] w-[85.83px] left-[44%] top-[12.2%] sss'/>       
        
         <img src="/Logo/Aero.png" 
             alt="logo" 
             className='absolute h-[42.26px] w-[111.31px] left-[32%] top-[50%] aero'/>

         <img src="/Logo/Jex.png" 
             alt="logo" 
             className='absolute h-[34px] w-[65px] left-[49.8%] top-[50%] jex'/>

         <img src="/Logo/Syndicate.png" 
             alt="logo" 
             className='absolute h-[10px] w-[100px] left-[44%] top-[62.2%] Syndicate'/>       
        </div> 

    </div>
  )
}

export default Loading