const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin( {
        template: './index.html',
        title: 'Webpack Plugin'
      }),
      // TODO: Add and configure workbox plugins for a service worker and manifest file.
      new WebpackPwaManifest({
        name: 'Webpack Plugin',
        short_name: 'Webpack',
        description: 'Webpack Plugin',
        background_color: '#01579b',
        theme_color: '#01579b',
        start_url: '/',
        icons: [
          {
            src: path.resolve('src/assets/icons/icon-512x512.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'sw.js',
      }),
      new workboxPlugin.GenerateSW({
        swDest: 'sw.js',
        clientsClaim: true,
        skipWaiting: true,
      }),
        

      
  
    ],

    module: {
      rules: [
        {

        test: /\.css$/i,
        use: [" style-loader", "css-loader"],
      },
    
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  };
}
