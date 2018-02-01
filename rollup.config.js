import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import sass from 'rollup-plugin-sass';
import { writeFileSync } from 'fs';
import path from 'path';
import svg from 'rollup-plugin-react-svg';

const external = ['react', 'prop-types'];
const outputTypes = [
  { file: './dist/cjs/index.js', format: 'cjs' }, // CommonJS
  { file: './dist/es/index.mjs', format: 'es' }, // ES Modules
];

const tasks = outputTypes.map(output => ({
  input: './src/index.js',
  external,
  output,
  name: 'construct-kit',
  plugins: [
    resolve(),
    filesize(),
    sass({
      output: styles => writeFileSync(path.resolve('./dist', 'index.css'), styles),
      options: {
        importer(url) {
          return url.startsWith('~') && ({
            file: `${process.cwd()}/node_modules/${url.slice(1)}`
          })
        }
      }
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    svg()
  ],
}));

export default tasks;
