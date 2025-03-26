import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 🔹 Yeh line add karein
    port: 5173, // 🔹 Apna desired port likhein
  },
});
