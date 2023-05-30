const path = require('path')
import minify from 'vite-plugin-minify'

import { defineConfig } from 'vite'

export default defineConfig({
  base: '/'
})

module.exports = {
  root: 'src',

  plugins: [
    minify({
      removeComments: true,
    }),
  ],

  build: {
    outDir: '../dist',
  },

  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
}
