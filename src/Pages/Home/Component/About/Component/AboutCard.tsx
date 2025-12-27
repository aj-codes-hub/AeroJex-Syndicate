// AboutCard.tsx
import React, { type ReactNode } from 'react'

interface AboutCardProps {
    className?: string
    Icon: ReactNode
    Tittle: string
    peragraph: string 
    isActive?: boolean
    onClick?: () => void
}

const AboutCard: React.FC<AboutCardProps> = ({ 
    className, 
    Icon, 
    Tittle, 
    peragraph, 
    isActive = false,
    onClick 
}) => {
  
  const HandleReadMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      className={`
        relative rounded-[10px] border-2 overflow-hidden z-[70] 
        transform duration-300 cursor-pointer
        after:top-0 after:w-[40%] after:bg-[radial-gradient(circle_at_center,#ffffff1e,transparent)] 
        after:h-[150%] after:absolute after:right-[140%] after:transform 
        after:duration-500 after:rotate-140 after:-z-[10]
        
        /* Base Styles */
        bg-white/10 backdrop-blur 
        hover:border-[#3AF9EF] hover:scale-[1.03]
        hover:after:right-[-80%] hover:after:-top-30 
        p-2 sm:p-3
        
        /* Height */
        h-[180px] sm:h-[200px] md:h-[220px]  lg:h-[240px] 2xl:h-[260px]
        
        /* Width */
        w-full
        md:w-[160px] 
        lg:w-[180px] 
        xl:w-[200px]
        
        /* Active State - Mobile par zor se highlight */
        ${isActive
          ? "border-[#3AF9EF] scale-[1.03] shadow-lg shadow-[#3AF9EF]/20"
          : "border-[#ffffff42]" 
        }
        
        ${className}
      `}
      onClick={onClick}
    >
  
    <div className='flex flex-col gap-1 h-full'>
     <div className='transform duration-300 text-xl sm:text-2xl md:text-3xl'>
       {Icon}
     </div>
      
     <h1 className='text-white font-extrabold text-[16px] sm:text-[17px] md:text-[18px]'>
       {Tittle}
     </h1>

     <p className='text-[#d4d4d45e] text-[10px] sm:text-[11px] md:text-[12px] leading-relaxed flex-grow'>
       {peragraph}
     </p>

     </div>
         
     <button  
       onClick={HandleReadMore}
       className={`
         absolute bottom-2 right-2
         text-[10px] sm:text-[11px] md:text-[12px] font-semibold text-[#3AF9EF] 
         bg-black/10 backdrop-blur rounded-[6px] py-1 px-2 sm:px-3 
         border transform duration-300 transition-all
         ${isActive 
           ? "border-[#3AF9EF] bg-[#3AF9EF]/20" 
           : "border-transparent hover:border-[#3AF9EF]"
         }
       `}
     >
       {isActive ? "✓ Active" : "Read more"}
     </button>

    </div>
  )
}

export default AboutCard