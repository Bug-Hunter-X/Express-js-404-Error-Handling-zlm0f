const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
//This is the solution to handle all other requests
app.use((req, res) => {
  res.status(404).send('Not Found');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});