import react from '@vitejs/plugin-react-swc'
import { defineConfig, UserConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config: UserConfig = {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  }

  if (mode === 'development') {
    config.build = {
      minify: false,
    }

    config.esbuild = {
      jsxDev: true,
    }

    config.define = {
      'process.env.NODE_ENV': '"development"',
      __DEV__: 'true',
    }
  } else {
    // explicitly set production define
    config.define = {
      'process.env.NODE_ENV': '"production"',
      __DEV__: 'false',
    }
  }

  return config
})
