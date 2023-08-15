/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'JBM': ['JetBrains Mono', 'monospace'],
        'Poppins': ['Poppins', 'sans-serif'],
        
      },
      colors: {
        'background': '#0A1930',
        'C1': '#00FFFF',
        'C2': '#FFFFFF',
        'C3': '#8792AE',
        'C4': '#435269'
      },
  },
  plugins: [],
}
}
