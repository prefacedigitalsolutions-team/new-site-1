import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Best for Hostinger, Vercel, and GitHub Pages
  base: './',
})
=======
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/new-site-1/' : '/',
}))
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
