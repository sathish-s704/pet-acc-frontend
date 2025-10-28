import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  // Load env so VITE_API_URL is available in vite config for dev proxy
  const env = loadEnv(mode, process.cwd(), '');
  // VITE_API_URL may include a trailing /api; remove it for proxy target
  const rawApi = env.VITE_API_URL || 'http://localhost:3000';
  const proxyTarget = rawApi.replace(/\/api\/?$/, '');

  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        '/api': proxyTarget,
      }
    }
  });
};
