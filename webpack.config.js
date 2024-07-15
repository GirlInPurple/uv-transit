const path = require('path');

module.exports = {
    entry: './src/main.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    {
                      loader: "file-loader",
                      options: { name: "style-bundle.css" },
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.json5$/,
                type: 'javascript/auto',
                use: [
                    {
                        loader: 'json5-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'script-bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
