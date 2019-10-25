const path = require('path');

module.exports = {
    mode: "development",
    entry: './ts/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true
};
