module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        shoukoPurple: '#cdb6f2',
        shoukoPurpleDark: '#7f5fb8',
        shoukoBg: '#fbf7fb'
      },
      backgroundImage: {
        'header-art': "url('/header.jpg')"
      }
    }
  },
  plugins: []
};
