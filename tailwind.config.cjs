module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
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
        // Custom breakpoints for common resolutions
        '1080p': '1920px',
        '2k': '2560px',
        '4k': '3840px',
      },
      colors: {
        // Light theme colors
        shoukoPurpleDark: '#eab308',
        shoukoPurple: '#d97706',
        shoukoBg: '#fdfbf6',
        
        // Custom Dark theme colors inspired by code editor aesthetic
        // Background colors (dark blue-purple palette)
        shoukoDarkBg: '#1A1B26',           // Main background
        shoukoDarkCard: '#24283B',          // Card/panel background
        shoukoDarkCardHover: '#2D2E3A',     // Card hover state
        shoukoDarkBorder: '#3B4261',        // Borders and dividers
        
        // Text colors (desaturated whites and grays)
        shoukoDarkText: '#C0CAF5',          // Main headings/titles
        shoukoDarkTextSecondary: '#787C99', // Secondary text/labels
        shoukoDarkTextMuted: '#8B94B6',     // Muted text
        
        // Syntax highlighting colors
        shoukoDarkAccent: '#BB9AF7',        // Purple accent (links, highlights)
        shoukoDarkBlue: '#7AA2F7',          // Light blue (keys, properties)
        shoukoDarkGreen: '#9ECE6A',         // Light green (strings, values)
        shoukoDarkYellow: '#FFC777',        // Yellow (numbers, booleans)
        shoukoDarkCyan: '#7DCFFF',          // Cyan (types, functions)
        shoukoDarkOrange: '#FF9E64',        // Orange (warnings, special)
        shoukoDarkRed: '#F7768E',           // Red (errors, important)
        
        // Special accent colors
        shoukoDarkPurple: '#9D7CD8',        // Deep purple
        shoukoDarkTeal: '#73DACA',          // Teal accent
      },
      backgroundImage: {
        'header-art': "url('/header.jpg')"
      }
    }
  },
      plugins: [require('@tailwindcss/typography')]
};
