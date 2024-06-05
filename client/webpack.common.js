const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SettingsGeneratorPlugin = require("./settings_generator.js");
const webpack = require('webpack'); // Add this line

module.exports = {
    devtool: "source-map",
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "build"),
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.(c|sa|sc)ss$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: { url: false },
                    },
                    { loader: "sass-loader" },
                ],
            },
            {
                test: /\.(png|jp(e*)g|gif|ttf|woff(2)?|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: ["file-loader"],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-url-loader",
                        options: {
                            limit: 50000,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
            favicon: path.join(
                __dirname,
                "/src/assets/images",
                "logos",
                "logo.png"
            ),
        }),
        new SettingsGeneratorPlugin({
            API_BASE_URL: process.env.API_BASE_URL,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                REACT_APP_API_URL: JSON.stringify(process.env.REACT_APP_API_URL),
            },
        }),
    ],
};
