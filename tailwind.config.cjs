module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  safelist: [
    '-translate-x-[54%]',
    '-translate-x-[52%]',
    '-translate-x-[58%]',
    '-translate-x-1/2',
  ],
  darkMode: 'class',
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
        '1080p': '1920px',
        '2k': '2560px',
        '4k': '3840px',
      },
      colors: {
        shoukoPurpleDark: '#eab308',
        shoukoPurple: '#d97706',
        shoukoBg: '#fdfbf6',
        
        shoukoDarkBg: '#1e1e2e',
        shoukoDarkCard: '#24283B',
        shoukoDarkCardHover: '#1e1e2e',
        shoukoDarkBorder: '#3B4261', 
        
        shoukoDarkText: '#C0CAF5',
        shoukoDarkTextSecondary: '#787C99',
        shoukoDarkTextMuted: '#8B94B6',
        
        shoukoDarkAccent: '#BB9AF7',
        shoukoDarkBlue: '#7AA2F7',    
        shoukoDarkGreen: '#9ECE6A',     
        shoukoDarkYellow: '#FFC777',   
        shoukoDarkCyan: '#7DCFFF',     
        shoukoDarkOrange: '#FF9E64',   
        shoukoDarkRed: '#F7768E',  
        
        shoukoDarkPurple: '#9D7CD8',    
        shoukoDarkTeal: '#73DACA', 
      },
      backgroundImage: {
        'header-art': "url('/header.jpg')"
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};