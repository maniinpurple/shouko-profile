module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // shoukoPurple: '#cdb6f2',
        // shoukoPurpleDark: '#7f5fb8',
        shoukoPurpleDark: '#eab308',
        shoukoPurple: '#d97706',
        shoukoBg: '#fdfbf6'

      },
      backgroundImage: {
        'header-art': "url('/header.jpg')"
      }
    }
  },
  plugins: []
};
