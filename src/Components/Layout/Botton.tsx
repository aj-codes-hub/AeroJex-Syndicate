import React from 'react'

interface ButtonProps {
    Title: string
    className?: string 
}

const Botton:React.FC<ButtonProps> = ({Title,className}) => {
  return (
      <button className={`font-semibold py-2 px-10 border rounded-full text-[#95F9FE] transition duration-300 cursor-pointer
                        border-[#95F9FE] mt-5 backdrop-blur-sm bg-white/10 hover:bg-transparent hover:scale-[1.02]
                         ${className} `}>
        {Title}
      </button>
  )
}

export default Botton