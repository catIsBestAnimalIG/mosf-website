import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

// Plugin to copy index.html to 404.html after build
// This enables GitHub Pages SPA routing
const copyIndexTo404 = () => {
  return {
    name: 'copy-index-to-404',
    closeBundle() {
      const distPath = join(process.cwd(), 'dist')
      const indexPath = join(distPath, 'index.html')
      const file404Path = join(distPath, '404.html')
      
      try {
        const indexContent = readFileSync(indexPath, 'utf-8')
        writeFileSync(file404Path, indexContent)
        console.log('✓ Copied index.html to 404.html')
      } catch (error) {
        console.warn('Could not copy index.html to 404.html:', error.message)
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic', // Use React 17+ automatic JSX runtime (no React import needed)
    }),
    copyIndexTo404()
  ],
  base: '/',
  build: {
    outDir: 'dist',
  }
})

