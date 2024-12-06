const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//This code will run without any error, but if you try to access any other route, it will return a 404 error.
//To solve this issue, you can use a wildcard route to handle all other requests:
app.use((req, res) => {
  res.status(404).send('Not Found');
});