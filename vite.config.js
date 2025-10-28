import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const rawApi = env.VITE_API_URL || 'http://localhost:3000';
  const proxyTarget = rawApi.replace(/\/api\/?$/, '');

  return defineConfig({
    base: './',
    plugins: [react()],
    build: {
      outDir: 'dist',
    },
    server: {
      proxy: {
        '/api': proxyTarget,
      },
    },
  });
};
