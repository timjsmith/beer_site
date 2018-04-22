const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require('path');

// routes
const indexRoutes = require('./routes/index');
const beerRoutes = require('./routes/beer');

// connect to database
const db = process.env.DATABASE;
mongoose.connect(db);

// app configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride('_method'));

// express router
app.use('/', indexRoutes);
app.use('/beer', beerRoutes);

// Start server
app.listen(process.env.PORT || 3000, process.env.IP, () => {
  console.log('Beer Review has started');
});
