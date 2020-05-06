const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  console.log(env);
  return {
    mode: env === "production" ? "production" : "development",
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js",
    },
    plugins: [
      // new TerserPlugin({
      //   terserOptions: {
      //     compress: argv['optimize-minimize'] // only if -p or --optimize-minimize were passed
      //   }
      // }),
      new MiniCssExtractPlugin({
        filename: "styles.css",
      }),
    ],
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    devtool: env === "production" ? "source-map" : "inline-source-map",
    performance: {
      hints: "warning",
      maxEntrypointSize: 5000000,
      maxAssetSize: 3000000,
    },
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: "/dist/",
    },
  };
};
