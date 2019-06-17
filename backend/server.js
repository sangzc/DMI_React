const express = require('express');
const cors = require('cors');
const FRONTEND_BASE_URL = require('./urls');
const app = express();
const port = 5000;
const whiteList = [FRONTEND_BASE_URL]

// Set up cors options
const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};

// Set up cors
app.use(cors());

// Set up body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const colors = ['red', 'blue', 'yellow', 'green'];

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
}
