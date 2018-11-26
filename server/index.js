require('dotenv').load();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Response');
});

app.listen(process.env.PORT, () => console.log('Running in '+ process.env.PORT)); //eslint-disable-line
