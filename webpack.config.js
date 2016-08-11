﻿module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    output: {
        path: "./dist",
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
          {
              test: /\.ts$/,
              loader: 'ts',
              exclude: /node_modules/
          },
          {
              test: /\.html$/,
              loader: 'html'
          },
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web,js', '.ts', '.js']
    }
}