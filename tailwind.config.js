// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'scan': 'scan 2s linear infinite',
        'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        scan: {
          '0%': { top: '0%', opacity: '1' },
          '50%': { top: '100%', opacity: '0.5' },
          '100%': { top: '0%', opacity: '1' },
        },
      },
      animationDelay: {
        '150': '150ms',
        '300': '300ms',
        '450': '450ms',
        '600': '600ms',
        '900': '900ms',
      },
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-150': {
          'animation-delay': '150ms',
        },
        '.animation-delay-300': {
          'animation-delay': '300ms',
        },
        '.animation-delay-450': {
          'animation-delay': '450ms',
        },
        '.animation-delay-600': {
          'animation-delay': '600ms',
        },
        '.animation-delay-900': {
          'animation-delay': '900ms',
        },
      }
      addUtilities(newUtilities)
    }
  ]
}