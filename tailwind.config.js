/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        background: '#0C0C12',
        secondaryBackground: '#131318',
        tertiary: '#1F1F25',
        textColor: '#FFFFFF',
        darkText: '#A2A2A2',
        lightblue: '#38BDF8',
        darkblue: '#3B82F6',
        lightpurple: '#A855F7',
        darkpurple: '#8B5CF6',
        lightgreen: '#4ADE80',
        darkgreen: '#2DD4BF', 
        red: '#E11D48'
      },
    },
  },
  plugins: [],
}