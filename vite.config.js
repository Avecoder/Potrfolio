import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
        output:{
            manualChunks(id) {
              if (id.includes('node_modules')) {

                  return id.toString().split('node_modules/')[1].split('/')[0].toString();
              }
          }
        }
    }
  },
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['robots.txt'],
      manifest: {
        name: 'Avecoder portfolio',
        short_name: 'Portfolio',
        theme_color: '#090909',
        background_color: '#090909',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '.',
        icons: [
          {
            src: '/icons/logo96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: '/icons/logo128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: '/icons/logo256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: '/icons/logo512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      strategies: 'injectManifest',
    })
  ]
})
