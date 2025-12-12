import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // A propriedade 'base' define como os caminhos dos arquivos (js, css, imagens) são gerados.
  // Usando './', os caminhos ficam relativos, permitindo que o site funcione 
  // ao abrir o index.html localmente ou em subpastas no servidor.
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});