'use strict';

const express = require('express');
const router = express.Router();

const db = require('./pg');

// API Routes
router.get('/', db.getBooks);
router.post('/searches', db.createSearch);
router.get('/searches/new', db.newSearch);
router.get('/books/:id', db.getBook);
router.post('/books', db.createBook);
router.put('/books/:id', db.updateBook);
router.delete('/books/:id', db.deleteBook);

router.get('*', (request, response) => response.status(404).send('No resource found'));

module.exports = router;