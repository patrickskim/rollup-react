import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';

import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';
import json from 'rollup-plugin-json';

const cssExportMap = {};

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    postcss({
      plugins: [],
      extract: 'dist/bundle.css',
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    json(),
  ],
};
