import React from 'react'

interface SectionHeadingProps {
className?:string
UnderLineWidth?:string    
headingStart?:string
headingMid?:string
headingend?:string
SubHeading?:string
}


const SectionHeading:React.FC<SectionHeadingProps> = ({headingStart,headingMid,headingend,SubHeading,UnderLineWidth,className}) => {
  return (
    <div className={`text-[#3AC3F9] font-bold ${className}`}>
          <h1 className='text-[26px] sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[35px] 2xl:text-[45px] md:leading-8 leading-6'>
            {headingStart}<span className='text-[#3AF9EF]'>{headingMid}</span>{headingend}
          </h1>
          <p className='text-[10px] sm:text-sm md:text-base lg:text-sm 2xl:text-base text-[#3AF9EF] font-medium'>
            {SubHeading}
          </p>
          <div className={`h-[2px] bg-gradient-to-l from-[#3AF9EF] to-[#3af9ef20] ${UnderLineWidth}`}/>
          <div className={`h-[2px] bg-gradient-to-l from-[#3af9ef1d] to-[#3AF9EF] mt-[2px] ${UnderLineWidth}`}/>
     </div>
  )
}

export default SectionHeading