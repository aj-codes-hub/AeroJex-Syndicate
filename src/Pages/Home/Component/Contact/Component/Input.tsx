import React, { useState } from 'react'

interface InputProps {
    Type?: string
    PlaceHolder?: string
    Name?: string
    className?: string
}

const Input: React.FC<InputProps> = ({ Type, PlaceHolder, className, Name }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHasValue(e.target.value.length > 0);
    }

    const shouldFloat = isFocused || hasValue;

    return (
        <div className="relative w-full">
            <input
                type={Type}
                name={Name}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                className={`w-full h-[40px] sm:h-[45px] px-2 sm:px-3 focus:outline-none focus:ring-none 
                          bg-transparent text-white text-sm sm:text-base ${className}`}
            />

            {PlaceHolder && (
                <span className={`absolute left-2 sm:left-3 pointer-events-none transition-all duration-300
                    ${shouldFloat
                        ? "-top-2 sm:-top-2.5 text-[11px] sm:text-[12px] text-[#3AC3F9]"
                        : "top-2 sm:top-3 text-[13px] sm:text-[14px] text-gray-400"
                    }`}>
                    {PlaceHolder}
                </span>
            )}

            <div className='h-[2px]'>
                <div className={`h-[2px] transform transition-all duration-500
                    ${isFocused
                        ? "opacity-0 bg-[radial-gradient(circle_at_center,#3AC3F9,transparent)]"
                        : "bg-[radial-gradient(circle_at_center,#3AC3F9,transparent)] opacity-100"
                    }`}>
                </div>

                <div className={`h-[2px] transform transition-all duration-500 
                    ${isFocused
                        ? "bg-gradient-to-r from-[#3AC3F9] to-transparent opacity-100"
                        : "bg-gradient-to-r from-[#3AF9EF] to-transparent opacity-0"
                    }`}>
                </div>
            </div>
        </div>
    )
}

export default Input