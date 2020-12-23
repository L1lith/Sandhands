import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { join } from 'path'
import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import deepmerge from 'deepmerge'

const baseConfig = {
  input: join(__dirname, 'index.js'),
  output: {
    name: 'Sandhands'
  },
  name: 'Sandhands',
  plugins: [
    resolve({ jsnext: true }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env'],
      sourceMaps: 'inline'
    })
  ]
}

const branchConfigs = [
  {
    output: {
      format: 'iife',
      file: join(__dirname, 'dist', 'Sandhands-browser.js')
    }
  },
  {
    output: {
      format: 'cjs',
      file: join(__dirname, 'dist', 'Sandhands-commonjs.js')
    }
  },
  {
    output: {
      format: 'umd',
      file: join(__dirname, 'dist', 'Sandhands-universal.js')
    }
  }
]

const configs = branchConfigs.map(config => deepmerge(baseConfig, config))

configs[1].plugins.splice(0, 1) // Don't include dependencies in node bundle
export default configs
