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
    proxy: {
      '/api':'http://localhost:3000'
    }
}

}