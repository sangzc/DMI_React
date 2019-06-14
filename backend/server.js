const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Set up body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Set up cors
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
// };
// app.use(cors(corsOptions));

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
