import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fed24d-case-af-jobtech-group-5-1/',
  build: { outDir: 'dist' }, 
})

