'use strict';


// Application Dependencies
const express = require('express');
const methodOverride = require('method-override');

// Application Setup
const app = express();


// Application Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(methodOverride((request, response) => {
  if (request.body && typeof request.body === 'object' && '_method' in request.body) {
    // look in urlencoded POST bodies and delete it
    let method = request.body._method;
    delete request.body._method;
    return method;
  }
}))

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


//PostGres Module
// require('./routes/pg');