import React, { useState } from 'react'

interface SimpleSelectProps {
  options: { value: string; label: string }[]
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
  name?: string
}

const SelectInput: React.FC<SimpleSelectProps> = ({
  options,
  placeholder = "Select",
  value = "",
  onChange,
  className = "",
  name
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <div className="relative w-full">
      <select
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`w-full h-[40px] sm:h-[45px] px-2 sm:px-3 bg-transparent 
                   focus:outline-none appearance-none text-sm sm:text-base
                   text-white cursor-pointer ${className}
                   ${value ? '' : 'text-gray-400'}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%233AF9EF' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: 'right 0.5rem center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1.2em 1.2em',
          paddingRight: '2rem'
        }}
      >
        <option value="" disabled className="bg-gray-900 text-gray-400">
          {placeholder}
        </option>
        {options.map((option) => (
          <option 
            key={option.value} 
            value={option.value}
            className="bg-gray-900 text-white"
          >
            {option.label}
          </option>
        ))}
      </select>

      {/* Floating Label Effect */}
      {placeholder && value && (
        <label className="absolute left-2 sm:left-3 -top-2 text-[11px] text-[#3AF9EF] pointer-events-none">
          {placeholder}
        </label>
      )}

      {/* Bottom Line */}
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

export default SelectInput