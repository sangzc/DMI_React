const express = require('express');

const app = express();

const colors = ['red', 'blue', 'yellow', 'green'];

// Route for getting all the colors
app.get('/colors/', (req, res) => {
  res.json(colors);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));