module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        // Custom breakpoints for common resolutions
        '1080p': '1920px',
        '2k': '2560px',
        '4k': '3840px',
      },
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
      plugins: [require('@tailwindcss/typography')]
};
