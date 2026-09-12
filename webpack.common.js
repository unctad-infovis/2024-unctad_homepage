const path = require('path');
const name = require('./package.json').name;
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  name:name,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            // This project genuinely customizes Bootstrap's build (colors.scss,
            // per-section container partials, nested selectors under
            // #app-root-2024-unctad_homepage), so - unlike 2023-intranet -
            // switching to Bootstrap's precompiled CSS isn't an option here.
            // The ~270 Dart Sass deprecation warnings all originate inside
            // node_modules/bootstrap/scss/* itself (legacy `@import`, global
            // color functions), not this project's own .scss files. `quietDeps`
            // silences deprecation warnings from files Sass considers
            // dependencies (i.e. anything under node_modules) while still
            // surfacing any real deprecation warning from this project's own
            // stylesheets.
            loader: 'sass-loader',
            options: {
              // Use Dart Sass's modern (promise-based) compiler API instead of
              // sass-loader's default legacy-API shim, which is itself
              // deprecated and logs a warning on every compile.
              api: 'modern',
              sassOptions: {
                // quietDeps only recognizes a stylesheet as a "dependency" (and
                // so silences its deprecation warnings) when it's resolved
                // through a load path, not through a literal relative
                // `../../node_modules/...` import - hence loadPaths here, paired
                // with the package-style `@import 'bootstrap/scss/bootstrap'` in
                // styles.scss below.
                loadPaths: [path.resolve(__dirname, 'node_modules')],
                quietDeps: true
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules\//,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: false,
              name:'[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'js/' + name + '.min.js',
    path: path.resolve(__dirname, './public'),
    clean: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/' + name + '.min.css'
    }),
    new HtmlWebPackPlugin({
      title: name,
      template: "./src/html/index.html",
      filename: "./index.html"
    }),
    new CopyPlugin({
      patterns: [
        { from: 'assets/img/', to: '../public/assets/img/', noErrorOnMissing: true, globOptions: { dot: true, gitignore: true, ignore: ['**/.DS_Store'] }},
        { from: 'assets/fonts/', to: '../public/assets/fonts/', noErrorOnMissing: true, globOptions: { dot: true, gitignore: true, ignore: ['**/.DS_Store'] }},
        { from: 'assets/data/data.json', to: '../public/assets/data/data.json', noErrorOnMissing: true, globOptions: { dot: true, gitignore: true, ignore: ['**/.DS_Store'] }},
        { from: 'src/font/', to: '../public/font/', noErrorOnMissing: true, globOptions: { dot: true, gitignore: true, ignore: ['**/.DS_Store'] }},
        { from: './favicon.png', to: '../public', noErrorOnMissing: true, globOptions: { dot: true, gitignore: true, ignore: ['**/.DS_Store'] }}
      ]
    })
  ]
};