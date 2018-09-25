import pkg from './package.json'
import rpi_jsy from 'rollup-plugin-jsy-lite'

const sourcemap = 'inline'
const plugins = [rpi_jsy()]
const external = []

export default [
  { input: 'code/index.jsy',
    output: [
      { file: pkg.main, format: 'cjs', exports:'named', sourcemap },
      { file: pkg.browser, format: 'umd', name: 'fnvxor32', exports:'named', sourcemap },
      { file: pkg.module, format: 'es', sourcemap }],
    plugins, external },

  { input: 'test/all.jsy',
    output: { file: 'cjs/test-all.js', format: 'cjs', sourcemap },
    plugins, external },

  { input: 'test/explore.jsy',
    output: { file: 'cjs/test-explore.js', format: 'cjs', sourcemap },
    plugins, external },

].filter(e=>e)

