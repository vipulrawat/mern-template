const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Response');
});

app.listen(9000, () => console.log('Running in 9000')); //eslint-disable-line
