import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import { terser } from "rollup-plugin-terser";

const isDevelopment = (
  process.env.ROLLUP_WATCH === 'true'
  || process.env.NODE_ENV === 'development'
);

const input = 'src/index.tsx';

const plugins = [
  typescript({
    check: isDevelopment,
    typescript: require('typescript'),
    tsconfig: (isDevelopment) ? 'tsconfig.json' : 'tsconfig.prod.json', // Only output sourcemaps on development
  }),
  nodeResolve(),
  commonjs({
    include: /node_modules/,
    sourceMap: isDevelopment, // Only output sourcemaps on development
  }),
  json(),
  replace({
    'process.env.NODE_ENV': JSON.stringify(
      isDevelopment ? 'development' : 'production'
    ),
  }),
];

if (!isDevelopment) {
  // terser is slow, only run when building
  plugins.push(terser());
}

const config = {
  input,
  output: {
    file: 'public/bundle.js',
    format: 'cjs',
    sourcemap: isDevelopment, // Only output sourcemaps on development
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

if (isDevelopment) {
  config.watch = {
    chokidar: {
      paths: 'src/**',
      useFsEvents: false,
    }
  };
}

export default config;
