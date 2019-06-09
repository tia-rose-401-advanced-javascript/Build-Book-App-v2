'use strict';


// Application Dependencies
const express = require('express');

// Application Setup
const app = express();


// Application Middleware
app.use(require('./middleware/urlencoded'));
app.use(require('./middleware/static'));

app.use(require('./middleware/methodOverride'));

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

// API Routes
const router = require('./routes/routes');

app.use(router);

console.log('Hello');
module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  },
};
