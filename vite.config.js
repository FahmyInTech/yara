import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    cssTarget: ['safari14', 'chrome87', 'edge88', 'firefox78'],
  },
  server: {
    port: 5173,
    open: true,
    allowedHosts: ['carry-archives-divide-patterns.trycloudflare.com']
  }
})
