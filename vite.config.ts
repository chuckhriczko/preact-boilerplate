import * as vite from 'vite';
import preact from '@preact/preset-vite';
import eslint from 'vite-plugin-eslint';
import viteCompression from 'vite-plugin-compression';
import svgLoader from 'vite-svg-loader';
/// <reference types="vite-svg-loader" />

// https://vitejs.dev/config/
export default vite.defineConfig({
  plugins: [
    preact(),
    eslint(),
    svgLoader(),
    viteCompression({
      verbose: true,
      disable: false,
      algorithm: 'brotliCompress',
    })
  ],
  "resolve": { 
    "alias": { 
      "react": "preact/compat",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime"
    },
  },
})
