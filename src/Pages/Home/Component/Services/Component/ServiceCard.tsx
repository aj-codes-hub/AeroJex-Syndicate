import React from 'react'

interface ServiceProps {
    Icon?: string,
    Title?: string,
    Details?: string,
}

const ServiceCard: React.FC<ServiceProps> = ({ Icon, Title, Details }) => {
  return (
    <div className='
        relative rounded-3xl overflow-hidden 
        flex flex-col items-center justify-center text-center p-4 sm:p-5 md:p-6
        transition-all duration-1000 ease-out group
        h-full min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[200px]
        
        bg-[#050c1583]
        
        border
        border-t border-[#3AF9EF]/10
        border-r border-[#3AC3F9]/5
        border-b border-[#3AF9EF]/15
        border-l border-[#3AC3F9]/5
        
        /* Outer Glow */
        shadow-[0_0_30px_rgba(58,195,249,0.15)]
        hover:shadow-[0_0_60px_rgba(58,249,239,0.3),0_0_100px_rgba(58,195,249,0.2)]
        
        /* Metallic Shine Effect */
        before:absolute before:inset-0 before:rounded-3xl
        before:bg-gradient-to-br before:from-transparent before:via-[#3AF9EF]/5 before:to-transparent
        before:opacity-0 before:group-hover:opacity-100
        before:transition-opacity before:duration-1000
    '>
      
      {/* Floating Holographic Ring */}
      <div className='absolute inset-3 rounded-full border border-[#3AF9EF]/20 
                     group-hover:border-[#3AF9EF]/40 group-hover:scale-110
                     transition-all duration-1000 ease-out'></div>
      
      {/* Animated Grid Pattern */}
      <div className='absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08]
                     transition-opacity duration-1000'>
        <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3AF9EF] to-transparent'></div>
        <div className='absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3AC3F9] to-transparent'></div>
        <div className='absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3AF9EF] to-transparent'></div>
        <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3AC3F9] to-transparent'></div>
        <div className='absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-[#3AF9EF] to-transparent'></div>
        <div className='absolute top-0 left-1/3 h-full w-px bg-gradient-to-b from-transparent via-[#3AC3F9] to-transparent'></div>
        <div className='absolute top-0 left-2/3 h-full w-px bg-gradient-to-b from-transparent via-[#3AF9EF] to-transparent'></div>
        <div className='absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-[#3AC3F9] to-transparent'></div>
      </div>
      
      {/* Neon Icon Container */}
      <div className='relative mb-4 z-20'>
        {/* Outer Pulse Ring */}
        <div className='absolute -inset-3 border-2 border-[#3AF9EF]/30 rounded-full 
                       animate-pulse group-hover:animate-none
                       group-hover:border-[#3AF9EF]/60 group-hover:scale-110
                       transition-all duration-1000'></div>
        
        {/* Inner Glow Ring */}
        <div className='absolute -inset-1.5 bg-gradient-to-r from-[#3AC3F9]/20 to-[#3AF9EF]/20 
                       rounded-full blur-lg
                       group-hover:blur-xl group-hover:from-[#3AC3F9]/30 group-hover:to-[#3AF9EF]/30
                       transition-all duration-1000'></div>
        
        {/* Icon with Hover Spin */}
        <img 
          src={Icon} 
          className='h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 relative z-10
                     group-hover:rotate-[360deg] group-hover:scale-110
                     transition-all duration-1000 ease-out
                     drop-shadow-[0_0_15px_rgba(58,249,239,0.5)]'
          alt={Title}
        />
        
        {/* Floating Dots */}
        <div className='absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#3AF9EF] rounded-full 
                       group-hover:animate-bounce'></div>
        <div className='absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#3AC3F9] rounded-full 
                       group-hover:animate-bounce group-hover:animation-delay-150'></div>
        <div className='absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#3AF9EF] rounded-full 
                       group-hover:animate-bounce group-hover:animation-delay-300'></div>
        <div className='absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#3AC3F9] rounded-full 
                       group-hover:animate-bounce group-hover:animation-delay-450'></div>
      </div>

      {/* Title with Neon Text Effect */}
      <h1 className='text-sm sm:text-base md:text-lg lg:text-[16px] font-bold tracking-wide
                     bg-gradient-to-r from-[#3AC3F9] via-white to-[#3AF9EF] bg-clip-text text-transparent
                     mb-3 px-2 z-20
                     group-hover:drop-shadow-[0_0_10px_rgba(58,195,249,0.8)]
                     transition-all duration-1000'>
        {Title}
      </h1>

      {/* Details with Matrix-like Effect */}
      <div className='relative overflow-hidden rounded-lg px-2 py-1.5
                      bg-gradient-to-r from-[#0a1a2a]/50 to-[#0c2a40]/50
                      border border-[#3AF9EF]/10
                      group-hover:border-[#3AF9EF]/30
                      transition-all duration-1000'>
        <p className='text-xs sm:text-sm md:text-base lg:text-[13px]
                     text-[#a0f5ff] leading-relaxed font-light
                     group-hover:text-white
                     transition-colors duration-1000
                     relative z-10'>
          {Details}
        </p>
        
        {/* Scanning Line Effect */}
        <div className='absolute top-0 left-0 w-full h-0.5
                       bg-gradient-to-r from-transparent via-[#3AF9EF] to-transparent
                       opacity-0 group-hover:opacity-100
                       animate-scan'></div>
      </div>
       
      {/* Corner Cyber Accents - Smaller */}
      <div className='absolute top-3 left-3 w-6 h-6'>
        <div className='absolute top-0 left-0 w-3 h-0.5 bg-gradient-to-r from-[#3AC3F9] to-transparent'></div>
        <div className='absolute top-0 left-0 w-0.5 h-3 bg-gradient-to-b from-[#3AC3F9] to-transparent'></div>
      </div>
      <div className='absolute top-3 right-3 w-6 h-6'>
        <div className='absolute top-0 right-0 w-3 h-0.5 bg-gradient-to-l from-[#3AF9EF] to-transparent'></div>
        <div className='absolute top-0 right-0 w-0.5 h-3 bg-gradient-to-b from-[#3AF9EF] to-transparent'></div>
      </div>
      <div className='absolute bottom-3 left-3 w-6 h-6'>
        <div className='absolute bottom-0 left-0 w-3 h-0.5 bg-gradient-to-r from-[#3AF9EF] to-transparent'></div>
        <div className='absolute bottom-0 left-0 w-0.5 h-3 bg-gradient-to-t from-[#3AF9EF] to-transparent'></div>
      </div>
      <div className='absolute bottom-3 right-3 w-6 h-6'>
        <div className='absolute bottom-0 right-0 w-3 h-0.5 bg-gradient-to-l from-[#3AC3F9] to-transparent'></div>
        <div className='absolute bottom-0 right-0 w-0.5 h-3 bg-gradient-to-t from-[#3AC3F9] to-transparent'></div>
      </div>
      
      {/* Energy Particles - Smaller */}
      <div className='absolute top-1/4 left-1/4 w-0.5 h-0.5 bg-[#3AF9EF] rounded-full 
                     opacity-0 group-hover:opacity-100
                     animate-ping'></div>
      <div className='absolute top-1/3 right-1/3 w-1 h-1 bg-[#3AC3F9] rounded-full 
                     opacity-0 group-hover:opacity-100
                     animate-ping animation-delay-300'></div>
      <div className='absolute bottom-1/4 left-1/3 w-0.5 h-0.5 bg-[#3AF9EF] rounded-full 
                     opacity-0 group-hover:opacity-100
                     animate-ping animation-delay-600'></div>
    </div>
  )
}

export default ServiceCard