/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        xl:'16rem',
        lg:'16rem',
        md:'2rem',
        sm:'2rem'
      },
    },
    screens: {
      sm: '360px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      boxShadow: {
        'shadow': '0 0 5px 0 rgba(102, 102, 102, 0.4)'
      },
      borderColor: {
        'de':'#dedede'
      },
      colors: {
        'bar':'rgba(0, 0, 0, 0.8);',
        'red':'rgba(254, 44, 85, 1)',
        'text': "#333333",
      },
      fontFamily: {
        "roboto":['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
