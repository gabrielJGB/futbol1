import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server:{
    allowedHosts:["ec4b-2803-2c0-f340-d000-e6f8-9cff-fee3-25e7.ngrok-free.app","cfb0-2803-2c0-f340-d000-e6f8-9cff-fee3-25e7.ngrok-free.app"]
  }
})
