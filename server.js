const path = require('path');
const logger = require('morgan');
const sass = require('node-sass-middleware');
const _ = require('lodash');
const express = require('express');
const app = express();


app.use(sass({
  src: path.join(__dirname, 'client'),
  dest: path.join(__dirname, 'client'),
}));
app.use(express.static(path.join(__dirname, './')));
app.use(logger('dev'));

app.get('*', (req, res) => res.sendfile('./index.html'));

const port = process.env.PORT || 7777;
app.listen(port, () => console.log(`App listening on port ${port}!`));
