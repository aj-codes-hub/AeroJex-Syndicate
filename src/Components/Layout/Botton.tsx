// import React from 'react'

// interface ButtonProps {
//     Title: string
//     className?: string 
// }

// const Botton:React.FC<ButtonProps> = ({Title,className}) => {
//   return (
//       <button
//               className={`font-semibold py-2 px-10 border rounded-full text-[#95F9FE] transition duration-300 cursor-pointer
//                         border-[#95F9FE] mt-5 backdrop-blur-sm bg-white/10 hover:bg-transparent hover:scale-[1.02]
//                          ${className} `}>
//         {Title}
//       </button>
//   )
// }

// export default Botton

import React from 'react'

interface ButtonProps {
    Title: string
    className?: string 
    href?: string // Optional: External link
    targetId?: string // Optional: ID for scroll to section
    onClick?: () => void // Optional: Custom click handler
}

const Button: React.FC<ButtonProps> = ({ 
    Title, 
    className, 
    href, 
    targetId, 
    onClick 
}) => {
    
    const handleClick = (e: React.MouseEvent) => {
        // Agar custom onClick hai to pehle wo call karo
        if (onClick) {
            onClick();
        }
        
        // Agar targetId hai to us section tak scroll karo
        if (targetId) {
            e.preventDefault();
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        
        // Agar href hai aur targetId nahi hai, to browser default handle karega
        // (link open ho jayega)
    }

    // Common button classes
    const buttonClasses = `font-semibold py-2 px-10 border rounded-full text-[#95F9FE] 
                          transition duration-300 cursor-pointer border-[#95F9FE] mt-5 
                          backdrop-blur bg-white/10 hover:bg-transparent hover:scale-[1.02]
                          ${className || ''}`

    // Agar href hai to <a> tag use karo, warna <button>
    if (href && !targetId) {
        return (
            <a 
                href={href}
                target="_blank" // External links ke liye
                rel="noopener noreferrer"
                className={buttonClasses}
                onClick={handleClick}
            >
                {Title}
            </a>
        )
    }

    return (
        <button
            className={buttonClasses}
            onClick={handleClick}
            type="button"
        >
            {Title}
        </button>
    )
}

export default Button