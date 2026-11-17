import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages tidak mengenali route React, jadi refresh /tentang menghasilkan 404.
// Saat build, index.html disalin menjadi 404.html agar tetap masuk ke aplikasi.
function githubPagesSpaFallback() {
  // Folder bawaan sebelum konfigurasi Vite selesai dibaca.
  let outDir = resolve('dist')
  return {
    name: 'github-pages-spa-fallback',
    // Plugin hanya berjalan saat build, bukan saat dev server.
    apply: 'build',
    // Mencatat folder hasil build, biasanya dist.
    configResolved(config) {
      outDir = config.build.outDir
    },
    // Menyalin index.html menjadi 404.html setelah bundle selesai.
    closeBundle() {
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  // Plugin React plus fallback 404 untuk GitHub Pages.
  plugins: [react(), githubPagesSpaFallback()],
  // Path dasar situs di GitHub Pages.
  base: '/warungwongdeso/',
})
