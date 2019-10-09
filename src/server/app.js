const path = require('path');

const fs = require('fs-extra');
const express = require('express');

const app = express();

app.use('/assets', express.static('dist/assets'));

app.get('*', (req, res) => {
    delete require.cache[require.resolve('../client/App.svelte')];

    const App = require('../client/App.svelte').default;
    const template = fs.readFileSync(path.resolve(process.cwd(), 'dist/assets/template.html'), 'utf-8');

    const x = App.render({ url: req.url });

    res.send(template.replace('##__BODY__##', x.html).replace('##__HEAD__##', x.head));
});

module.exports = app;
