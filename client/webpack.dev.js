const { merge } = require("webpack-merge");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config({ path: `.env.development` });
dotenv.config({ path: `.env.development.local`, override: true });

const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        client: {
            logging: "info",
            overlay: true,
            reconnect: 2,
        },

        historyApiFallback: true,

        compress: true,
        port: 5050,
        hot: true,
    }
});