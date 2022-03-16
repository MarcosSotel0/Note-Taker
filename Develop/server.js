const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const htmlRoutes = require('./routes/homeRout');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// link to the main page
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});



// create note BTN
// remover note BTN

