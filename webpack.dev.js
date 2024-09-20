import path from 'path'
import { fileURLToPath } from 'url';
import nodeExternals from 'webpack-node-externals'

// TODO: Way around for __dirname in ES6
const __filename = fileURLToPath(import.meta.url); //* get the resolved path to the file
const __dirname = path.dirname(__filename); //* get the name of the directory

export default {
    entry: {
        main: './app.js'
    },
    output: {
        path: path.join(__dirname, 'dev-build'),
        publicPath: '/',
        filename: '[name].cjs',
        clean: true,
    },
    mode: 'development',
    target: 'node',
    externals: [nodeExternals()],
    // devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",

            }
        ]
    }
}