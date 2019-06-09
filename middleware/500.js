'use strict';

module.exports = (req, res, next) => {
  console.log('Server Error');
  res.status(500).send('Server Error Encountered');
  res.end();
}