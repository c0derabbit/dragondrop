import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import svg from 'rollup-plugin-svg'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'
const { generateSW } = require('rollup-plugin-workbox')

const dev = process.env.NODE_ENV === 'dev'

export default {
  input: 'src/main.js',
  output: {
    sourcemap: false,
    format: 'iife',
    name: 'main',
    file: 'dist/main.bundle.js'
  },
  plugins: [
    replace({
      DEV_MODE: dev
    }),
    svg(),
    postcss({
      extract: true,
      minimize: !dev
    }),
    resolve({
      browser: true
    }),
    generateSW({
      globDirectory: 'dist/',
      swDest: 'dist/sw.js',
    }),
    commonjs(),
    !dev && terser(),
  ],
  watch: {
    clearScreen: false
  }
}
