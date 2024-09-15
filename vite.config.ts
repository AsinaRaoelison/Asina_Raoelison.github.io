import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // Assurez-vous que cela correspond au répertoire utilisé dans le script deploy
  }
});
