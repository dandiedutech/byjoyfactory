import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react'],
          'swiper-vendor': ['swiper']
        },
      },
    },
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true
      },
      mangle: {
        safari10: true,
        toplevel: true,
        properties: false
      },
      format: {
        comments: false
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    target: 'esnext',
    assetsInlineLimit: 4096,
    modulePreload: {
      polyfill: false
    }
  },
  server: {
    open: true,
    host: true
  }
});