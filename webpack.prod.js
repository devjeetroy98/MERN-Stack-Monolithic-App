import path from 'path'
import { fileURLToPath } from 'url';
import TerserPlugin from 'terser-webpack-plugin';
import nodeExternals from 'webpack-node-externals'


// TODO: Way around for __dirname in ES6
const __filename = fileURLToPath(import.meta.url); //* get the resolved path to the file
const __dirname = path.dirname(__filename);

export default {
    entry: {
        main: './app.js'
    },
    output: {
        path: path.join(__dirname, 'prod-build'),
        publicPath: '/',
        filename: 'index.cjs',
        clean: true
    },
    mode: 'production',
    target: 'node',
    // externalPresets : {node: true},
    externals: [nodeExternals()], // Need this to avoid error when working with Express,
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_classnames: true,
                    keep_fnames: true,
                    mangle: false
                }
            })
        ]
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [new UglifyJsPlugin({
    //         include: /\.min\.js$/
    //     })]
    // },
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