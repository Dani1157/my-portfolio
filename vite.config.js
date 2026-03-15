import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/my-portfolio/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  }
})