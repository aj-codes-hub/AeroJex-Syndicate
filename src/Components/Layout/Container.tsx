import React, { type ReactNode } from 'react'

interface ContainerProps{
   children: ReactNode
   className?: string
}


const Container:React.FC<ContainerProps> = ({children , className=''}) => {
  return (
    <div className={`w-full lg:px-[75px] md:px-[45px] px-[30px] ${className}`}> 
        {children}
    </div>
  )
}

export default Container