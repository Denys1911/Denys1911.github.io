const path = require('path');

module.exports = {
    entry: './app/js/app.js',
    output: {
        filename: 'main.min.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
};
