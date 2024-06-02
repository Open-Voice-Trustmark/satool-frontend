import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: {
        '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      },
    },
    define: {
      'process.env.REACT_APP_API_ENDPOINT': JSON.stringify(
        env.REACT_APP_API_ENDPOINT
      ),
    },
  }
})
