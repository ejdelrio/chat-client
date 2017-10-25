'use strict';

const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static(`${__dirname}/build`));

app.listen(PORT, function() {
  console.log('listening on ', PORT);
});

