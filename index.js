'use strict';

require('dotenv').config();
// const mongoose = require('mongoose');
// const pg = require('pg');

// let client = null;

// if(process.env.DATABASE === 'pg'){
//   client = new pg.Client(process.env.DATABASE_URL);
//   client.connect();
//   client.on('error', err => console.error(error));
//   module.exports = client;
// }else if(process.env.DATABASE === 'mongoose'){
//   const mongooseOptions = {
//     useNewURLParser:true,
//     useCreateIndex: true,
//   };

//   mongoose.connect(process.env.MONGODB_URI, mongooseOptions);
// }

require('./server').start(process.env.PORT);