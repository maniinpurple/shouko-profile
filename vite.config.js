// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4321,

    // ✅ this disables the new host check in Vite 6
    strictPort: false,
    cors: true,
    hmr: {
      clientPort: 443,
      host: 'shouko.site',
      protocol: 'wss',
    },
  },
})
