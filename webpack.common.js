const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //Needed to use html templates or edit html config

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack template",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i, //load css
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, //load images
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, //load fonts
        type: "asset/resource",
      },
      /* {
        test: /\.(csv|tsv)$/i, //load csv data
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i, //load xml data
        use: ["xml-loader"],
      },
      {
        test: /\.toml$/i, //load toml files
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i, //load yaml files
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i, //load json5 files
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },*/
    ],
  },
};
