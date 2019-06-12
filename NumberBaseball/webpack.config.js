const path = require('path');

module.exports = {
    name: 'NumberBaseball-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: { // 입력
        app: ['./client'],
    },        

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader', 
            options: {
                presets: [
                    ['@babel/preset-env', {
                      targets: {
                          browsers: ['> 1% in KR'], // browswerslist
                      },
                      debug: true,
                    }],
                    '@babel/preset-react',
                ],
                plugins: ['@babel/plugin-proposal-class-properties', 'react-hot-loader/babel'],
            },
        }],
    },

    plugins: [],

    output: {  // 출력
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/', // 상대경로지정
    },
};