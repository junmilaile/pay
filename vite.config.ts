import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginAutoRouter from './src/Plugins/index';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginAutoRouter()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
  server: { open: true },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {},
    sourcemap: true,
  },
});
