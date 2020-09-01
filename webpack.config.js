var path = require("path");
var rules = [
    {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
        },
    },
];

module.exports = {
    target: "web",
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: { rules: rules },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    devServer: {
        contentBase: "./",
        port: 4000,
    },
};
