// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from "@tailwindcss/vite";
// export default defineConfig({
//   plugins: [react(),  tailwindcss()],
//   base: '/BreadShop-F/',
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path'; // 👈 Add this

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/BreadShop-F/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 Define @ as src/
    },
  },
});


