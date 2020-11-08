import resolve from '@rollup/plugin-node-resolve';
// import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import minifyHTML from 'rollup-plugin-minify-html-literals';

export default [
  {
    input: 'src/components/techfeed-button.ts',
    output: {
      dir: 'dist/components/',
      format: 'es',
    },
    plugins: [
      minifyHTML(),
      typescript({
        tsconfig: './tsconfig.esm.json'
      }),
      resolve(),
    ],
  },
  {
    input: 'src/widget.ts',
    output: {
      dir: 'dist/web/',
      format: 'es',
    },
    plugins: [
      minifyHTML(),
      typescript({
        tsconfig: './tsconfig.cdn.json'
      }),
      resolve(),
    ],
  },
];
