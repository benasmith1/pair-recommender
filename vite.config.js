import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/submit': {
        target: 'http://159.223.168.125:5001', //'http://localhost:5001', 
        changeOrigin: true,
        secure: false,
      },

    }
  },
})