module.exports = {
    target: 'webworker',
    entry: './index.js',
    mode: 'production',
    devtool: 'cheap-module-source-map',
    context: __dirname,
    plugins: [
        new webpack.ProvidePlugin({URL: 'url-polyfill'}),
    ],
}