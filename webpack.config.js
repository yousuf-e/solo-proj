const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
        rules: [
            {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {targets: "defaults"}],
                        ['@babel/preset-react', {targets: "defaults"}]
                    ]
                }
              }
          },
          {
            test: /\.s[ac]ss$/i,
            use: 
              [
              "style-loader",
              "css-loader",
              "sass-loader"
              ]
            
          }
        ]
    },
  plugins: [new HtmlWebpackPlugin(
    {
      template:'./index.html'
    }
  )],
  devServer: {
    host: 'localhost',
    // set the front end to port 8080 ( in build module unit it was automatically done by dev server? not sure why we have to eb explicit now but wev )
    port: 8080,
    // enable HMR on the devServer
    hot: true,
    // fallback to root for other urls
    historyApiFallback: true,
    // loads any static files. not needed but best practice. used for any images or things that you need to render to a page
    // static: {
    //   directory: path.resolve(__dirname, 'build'),
    //   publicPath: '/',
    // },
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}