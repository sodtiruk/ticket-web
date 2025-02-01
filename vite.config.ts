import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig( ({ mode }) => {

  // Load environment variables
  const ENV = loadEnv(mode, process.cwd(), '')

  // console.log(ENV);

  const ACTIVE_MODE = ENV.MODE || mode;

  // console.log(ACTIVE_MODE);

  const ACTIVE_ENV = loadEnv(ACTIVE_MODE, process.cwd(), '');

  // console.log(activeEnv);

  return {
    define: {
      'process.env': ACTIVE_ENV,
    },
    plugins: [
      react(),
      tailwindcss(),
    ],
    base: '/app/',
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
      },
      port: 5173,
    },
  }
})
