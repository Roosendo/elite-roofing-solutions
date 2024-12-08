import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50:   '#FFF9E5',
          100:  '#FFF3CC',
          200:  '#FFE999',
          300:  '#FFE06B',
          400:  '#FFD740',
          500:  '#FFD000',
          600:  '#FFBF00',
          700:  '#FFA500',
          800:  '#FF9100',
          900:  '#FF7B00',
          950:  '#FF6300'
        },
        'gold-metalic': {
          50:   '#F5F0E4',
          100:  '#E6D8C3',
          200:  '#D7C1A3',
          300:  '#C8AA82',
          400:  '#B99362',
          500:  '#AA7C42',
          600:  '#916538',
          700:  '#794E2E',
          800:  '#603824',
          900:  '#47211A'
        }
      },
      backgroundColor: theme => ({
        ...theme('colors.gold'),
        ...theme('colors.gold-metalic')
      }),
      textColor: theme => ({
        ...theme('colors.gold'),
        ...theme('colors.gold-metallic')
      }),
      borderColor: theme => ({
        ...theme('colors.gold'),
        ...theme('colors.gold-metallic')
      }),
      backgroundImage: {
        'gradient-gold': 'linear-gradient(to right, #FFD700, #FFA500)',
        'gradient-metallic': 'linear-gradient(to right, #AA7C42, #916538)'
      },
      boxShadow: {
        'gold-soft': '0 4px 6px -1px rgba(255, 215, 0, 0.1), 0 2px 4px -1px rgba(255, 215, 0, 0.06)',
        'gold-medium': '0 10px 15px -3px rgba(255, 215, 0, 0.2), 0 4px 6px -2px rgba(255, 215, 0, 0.1)',
        'gold-strong': '0 20px 25px -5px rgba(255, 215, 0, 0.3), 0 10px 10px -5px rgba(255, 215, 0, 0.2)'
      },
      opacity: {
        'gold-10': '0.1',
        'gold-25': '0.25',
        'gold-50': '0.5',
        'gold-75': '0.75',
        'gold-90': '0.9'
      }
    }
  },
  plugins: [
    animations
  ]
}

export default config
