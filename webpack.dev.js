const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
/*const toml = require("toml"); //needed to load toml data
const yaml = require("yamljs"); //needed to load yamljs data
const json5 = require("json5"); //needed to load json5 data*/

module.exports = merge(common, {
  mode: "development", //Development mode
  devtool: "inline-source-map", //Helps know where bugs come from SRC
  devServer: {
    static: "./dist",
    watchFiles: {
      paths: ["src/*.html"], //Watch for files that change in this case html files
      options: {
        usePolling: false,
      },
    },
  },
  optimization: {
    runtimeChunk: "single",
  },
});

//npx webpack --config webpack.config.js
//Or
//in package.json
//add "build": "webpack" under "scripts"

//npm install webpack webpack-cli --save-dev
//npm install --save lodash

//npm install --save-dev style-loader css-loader
//npm install --save-dev csv-loader xml-loader
//npm install toml yamljs json5 --save-dev

//npm install --save-dev html-webpack-plugin   -------HTML template

//npm install --save-dev webpack-dev-server -----live reload

//npm install --save-dev webpack-merge -- to merge dev build to prod build
