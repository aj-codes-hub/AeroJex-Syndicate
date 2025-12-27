// import React from 'react'

// interface ServiceProps {
//      Icon?: string,
//      Title?:string,
//      Details?:string,
// }

// const ServiceCard:React.FC<ServiceProps> = ({Icon,Title,Details}) => {
//   return (
//      <div  className='rounded-[10px] border-b-5 border-[1px] bg-gradient-to-tr to-[#035e6a] from-transparent
//                      flex flex-col items-center justify-center gap-2 text-center px-[10%] 
//                      hover:bg-gradient-to-tr hover:from-[#035e6a] hover:to-[#15f2be00]
//                      transition transform duration-300 hover:scale-[1.03] py-2 hover:border-[#10b6e8]
//                      hover:shadow-[0_3px_6px_rgb(0,0,0,0.1),0_1px_6px_rgb(0,0,0,0.08)]'>
      
//       <img src={Icon} className='h-14 w-14 text' />

//       <h1 className='text-[16px] font-bold text-[#3AC3F9]'>
//         {Title}
//       </h1>

//       <p className='text-[13px] text-[#3AF9EF] leading-tight font-thin'>
//        {Details}
//       </p>
       
//      </div>
//   )
// }
// export default ServiceCard

import React from 'react'

interface ServiceProps {
    Icon?: string,
    Title?: string,
    Details?: string,
}

const ServiceCard: React.FC<ServiceProps> = ({ Icon, Title, Details }) => {
  return (
    <div className='
        rounded-[10px] border-b-5 border-[1px] bg-gradient-to-tr to-[#035e6a] from-transparent
        flex flex-col items-center justify-center gap-2 text-center px-4 sm:px-6 md:px-8 lg:px-[10%]
        hover:bg-gradient-to-tr hover:from-[#035e6a] hover:to-[#15f2be00]
        transition transform duration-300 hover:scale-[1.03] 
        py-4 sm:py-5 md:py-6 lg:py-2 hover:border-[#10b6e8]
        hover:shadow-[0_3px_6px_rgb(0,0,0,0.1),0_1px_6px_rgb(0,0,0,0.08)]
        h-full min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px]
    '>
      
      {/* Icon with responsive sizing */}
      <img 
        src={Icon} 
        className='h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14'
        alt={Title}
      />

      {/* Title with responsive text size */}
      <h1 className='text-sm sm:text-base md:text-lg lg:text-[16px] font-bold text-[#3AC3F9] px-2'>
        {Title}
      </h1>

      {/* Details with responsive text size */}
      <p className='text-xs sm:text-sm md:text-base lg:text-[13px] text-[#3AF9EF] leading-relaxed font-thin px-1 sm:px-2'>
        {Details}
      </p>
       
    </div>
  )
}

export default ServiceCard