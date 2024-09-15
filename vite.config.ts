import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Adjust to match the GitHub Pages URL path
  build: {
    outDir: 'dist'
  }
});
