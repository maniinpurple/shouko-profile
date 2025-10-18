import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [tailwind()],

  site: 'https://shouko.site', // 🔧 set your real domain here

  vite: {
    server: {
      host: '0.0.0.0',
      port: 4321,
      cors: true,
      strictPort: false,

      // ✅ this is crucial for public access (replaces allowedHosts in Vite 6)
      hmr: {
        host: 'shouko.site',
        protocol: 'wss',
        clientPort: 443,
      },
    },
  },
})
