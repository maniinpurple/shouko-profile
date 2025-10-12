module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        shoukoPurpleDark: '#eab308',
        shoukoPurple: '#d97706',
        shoukoBg: '#fdfbf6'
      },
      backgroundImage: {
        'header-art': "url('/header.jpg')"
      }
    }
  },
      plugins: [require('@tailwindcss/typography')]
};
