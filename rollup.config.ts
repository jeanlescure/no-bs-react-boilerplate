import { RollupOptions } from 'rollup';
import replace from '@rollup/plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from "rollup-plugin-terser";

const isProduction = (process.env.NODE_ENV === 'production');

const input = 'src/index.tsx';

const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(
      isProduction ? 'production' : (process.env.NODE_ENV || 'development')
    ),
  }),
  typescript({
    check: !isProduction,
    typescript: require('typescript'),
    tsconfig: (isProduction) ? 'tsconfig.prod.json' : 'tsconfig.json', // Only output sourcemaps on development
  }),
  nodeResolve(),
  commonjs({
    include: /node_modules/,
    sourceMap: !isProduction, // Only output sourcemaps on development
  }),
  json(),
];

if (isProduction) {
  // terser is slow, only run when building
  plugins.push(terser());
}

const config: RollupOptions = {
  input,
  output: {
    file: 'public/bundle.js',
    format: 'cjs',
    sourcemap: !isProduction, // Only output sourcemaps on development
  },
  plugins,
  // If one of your dependencies generates warnings that you wish to hide from showing up in
  // in console, simple uncomment the following and adjust to your needs:
  // onwarn: (message) => {
  //   if ((/Circular dependencies.*ejson/g).test(message) ) {
  //     return;
  //   }
  //
  //   return message;
  // },
};

if (!isProduction) {
  config.watch = {
    chokidar: {
      useFsEvents: false,
    },
    include: 'src/**',
    clearScreen: false,
  };
}

export default config;
