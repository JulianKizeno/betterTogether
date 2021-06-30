const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  //entrada pricipal
  entry: './src/index.js',
  //guardar los archivos resultantes cuando hagamos la compilacion
  output: {
    //decirle donde se va a guardar
    path: path.resolve(__dirname, 'dist'), // dirname = directorio en el que nos encontramos. dist = donde vamos a guardar los archivos
    //ponerle nombre a nuestro archivo pricnipal
    filename: 'bundle.js',
  },
  //extensiones que vamos a utilizar para nuestro proyecto
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  //creamos un modulo con las reglas necesarias para nuestro proyecto
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        //usamos el loader que se instaló previamente (babel)
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        //usamos el loader que se instaló previamente (HTML)
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[hash].[ext]' },
          },
        ],
      },
    ],
  },
  //añadir plugin que necesitamos
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],
};
