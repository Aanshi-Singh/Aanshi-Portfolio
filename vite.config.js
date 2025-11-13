import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for deployment (use '/' for custom domains)
  base: '/',
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
