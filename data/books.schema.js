'use strict';

const mongoose = require('mongoose');

const books = mongoose.Schema({
  name: {type:String, required: true},
  author: {type:String, required: true},
  isbn: {type:Number, required: true},
  image_url: {type:String, required: true},
  description: {type: String, required: true},
});

books.pre('save', function(){
  this.name = this.name.toLowerCase();
  this.author = this.author.toLowerCase();
  this.description = this.description.toLowerCase();
});

books.post('save', function(){
  console.log('Saving Complete')
});

module.exports = mongoose.model('books', books);
