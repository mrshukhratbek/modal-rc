import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import { uglify } from "rollup-plugin-uglify";
import packageJSON from "./package.json";

const input = "./src/index.js";
const minifyExtension = (pathToFile) => pathToFile.replace(/\.js$/, ".min.js");

export default [
  // CommonJS ...
  // UMD ...
  {
    input,
    output: {
      file: packageJSON.browser,
      format: "umd",
      name: "modal-react",
      globals: {
        react: "React",
      },
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs(),
    ],
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.browser),
      format: "umd",
      name: "modal-react",
      globals: {
        react: "React",
      },
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
  // ES ...
  {
    input,
    output: {
      file: packageJSON.module,
      format: "es",
      exports: "named",
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs(),
    ],
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.module),
      format: "es",
      exports: "named",
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
];
