import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // Vite will bind to all network interfaces
    port: 8080, // Specify the port you want Vite to run on
    proxy: {
      '/submit': {
        target: 'https://pair-recommender-client-6rb88.ondigitalocean.app', 
        changeOrigin: true,
        secure: false,
      },
    
    },
  },
  preview: {
    allowedHosts: ['https://pair-recommender-client-6rb88.ondigitalocean.app'],
  },
});
