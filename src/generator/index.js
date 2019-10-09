require('svelte/register');

const webpack = require('webpack');
const configs = require('./webpack.config');

const app = require('../server/app');

app.listen(3000);

const clientCompiler = webpack({
    ...configs[0],
}).watch({}, (err, stats) => {
    // console.log(stats.toString({ colors: true, modules: false, entrypoints: false, hash: false, builtAt: false }));
    if (err) {
        console.log(stats.toString({ colors: true, modules: false, entrypoints: false, hash: false, builtAt: false }));
        return;
    }

    console.log('Client generated');

    // fs.copy('static', 'dist');
    // const proc = spawn('node', ['dist/server.js']);
    // proc.stdout.pipe(process.stdout);
});

// console.log('Generated...');
