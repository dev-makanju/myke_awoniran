/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '450px',
      md: '658px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'text-pry': '#AD7D00',
      'text-sec': '#282828',
      'text-base': '#eee',
      'main-text': '#AEAEAE',
    },
    backgroundColor:{
      'bg-pry': '#AEAEAE',
      'bg-dark': '#282828',
      'bg-orange': '#AD7D00',
    },
    fontFamily: {
      SpaceGrotesk: ['SpaceGrotesk', 'sans-serif'],
      SpaceGroteskLight:['SpaceGrotesk-Light' , 'sans-serif'],
      SpaceGroteskBold: ['SpaceGrotesk-Bold' , 'sans-serif'],
    },
    extend: {
      spacing: {
        'sm': '3px',
        'md': '6px',
        'lg': '9px',
        'xl': '12px',
      },
      borderRadius: {
        'sm': '32px',
        '3xl': '42px',
        'round': '50%'
      },'br-nav': '32px 0px 0px 32px'
    },
  },
  plugins: [],
}
