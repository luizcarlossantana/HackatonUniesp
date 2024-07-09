import { defineConfig } from 'vite';
import { createProxy } from 'vite-plugin-proxy';

export default defineConfig({
  plugins: [
    createProxy({
      '/hackathon': {
        target: 'https://hackathon.marjosports.com.br',
        changeOrigin: true,
        secure: false,
        headers: {
          'api-key': 'HACKATON_UNIESP_MARJO_2024'
        },
        rewrite: (path) => path.replace(/^\/hackathon/, '')
      }
    })
  ]
});
