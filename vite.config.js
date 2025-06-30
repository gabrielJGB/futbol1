import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), tailwindcss(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
    manifest: {
      name: 'Fútbol 11',
      short_name: 'Fútbol 11',
      description: 'Fútbol 1 tiene los resultados en vivo de todas las ligas del mundo, formaciones, noticias, fixtures, estadísticas, videos y mucho más.',
      display: 'standalone',
      background_color: '#1e293b',
      theme_color: '#1e293b',
      start_url: '/',
      icons: [
        {
          src: 'ball_64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'ball_128x128.png',
          sizes: '128x128',
          type: 'image/png'
        },
        {
          src: 'ball_256x256.png',
          sizes: '256x256',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    }
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    allowedHosts: ["ec4b-2803-2c0-f340-d000-e6f8-9cff-fee3-25e7.ngrok-free.app", "cfb0-2803-2c0-f340-d000-e6f8-9cff-fee3-25e7.ngrok-free.app"]
  }
})
