// filepath: /Users/jibinvarghese/Desktop/LifeBotica_Dev/life-botica-website/tailwind.config.js
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Added this line to specifically include files within your 'app' directory
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
