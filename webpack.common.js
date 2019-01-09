require('@babel/polyfill');

const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

const staticJs = path.join(__dirname + '/../server/public/js/');
const relativeStaticImagePath = '../images';

module.exports = {
  entry: ['@babel/polyfill', './src/App.ts'],
  output: {
    path: staticJs,
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },

  module: {
    rules: [
      // All files with a '.png', '.jpg' or '.gif' extensions will be handled by 'file-loader'.
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: relativeStaticImagePath,
            },
          },
        ],
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
          useBabel: true,
          babelCore: '@babel/core',
          babelOptions: {
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                },
              ],
            ],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  corejs: false,
                  helpers: true,
                  regenerator: true,
                  useESModules: false,
                },
              ],
            ],
          },
        },
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
};
