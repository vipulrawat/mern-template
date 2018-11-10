const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Server Running');
})

app.listen(3001, () => console.log('Server is running'));
