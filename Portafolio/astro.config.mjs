import { defineConfig } from 'astro/config';

// Configuración principal de Astro
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  srcDir: 'src',
  publicDir: 'public',
  outDir: 'dist',
  server: {
    port: 4321 // puedes cambiar el puerto si quieres
  },
  build: {
    format: 'directory'
  },
  integrations: [tailwind()] // aquí podrías agregar integraciones extra si tu profe pide
  // ejemplo: sitemap(), mdx(), etc.
});