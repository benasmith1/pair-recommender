import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/submit': {
        target: 'http://159.223.168.125:8080', //'http://localhost:5001', 
        changeOrigin: true,
        secure: false,
      },
      host: '0.0.0.0', // Ensure Vite binds to all network interfaces
      port: 8080, // Ensure the correct port
    }
  },
})