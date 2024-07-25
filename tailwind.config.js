/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      width: {
        '128': '31.5rem', // Custom width 128 (32rem)
        '62': '15.5rem', // Custom width 62 (15.5rem)
        '120': '31rem',
        '116': '29.75rem',
        '150': '37rem',
      },
      backgroundImage: {
        'custom-image': "url('/src/assets/bg2.png')",
        'custom-image2': "url('/src/assets/bgg1.png')",
        'custom-image3': "url('/src/assets/bg3.png')",
        'bginsideout': "url('../assets/insideout.jpg')",
        'p1': "url('../assets/p1.jpeg')",
        'p2': "url('../assets/p2.jpeg')",
        'p3': "url('../assets/p3.jpeg')",
        'p4': "url('../assets/p4.jpeg')",
        
      },
      colors: {
        lightblue: '#81ABB9',
        darkblue: '#5E798E',
        grayy: '#BFD2D6',
        darkestblue: '#506079'
      },
    },
  },
  plugins: [],
}
