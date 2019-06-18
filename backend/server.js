/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Set up cors
app.use(cors());

// Set up body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const colors = ['red', 'blue', 'orange', 'green'];

// Route for getting all the colors
app.get('/colors/', (req, res) => {
  res.json(colors);
});

// Add a new color to the list
app.post('/colors/', (req, res) => {
  colors.unshift(req.body.color);
  res.json(colors);
});

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = {
  port,
};
