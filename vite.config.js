import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages projeyi /FreshlyTooWebApp/ altından servis ediyor.
// Router artık gerçek yollar kullandığı için (/isletmeler gibi) base'in mutlak
// olması ve derleme sonrası bir 404.html yedeği bırakılması gerekiyor: Pages
// bilinmeyen yollarda 404.html'i döndürür, o da index.html'in kopyası olduğu
// için SPA açılıp yolu kendisi çözer.
const spaFallback = {
  name: 'gh-pages-spa-fallback',
  apply: 'build',
  closeBundle() {
    const dist = resolve(import.meta.dirname, 'dist')
    copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback],
  base: '/FreshlyTooWebApp/',
})
