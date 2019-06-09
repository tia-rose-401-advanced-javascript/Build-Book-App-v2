'use strict';

module.exports = (req, res, next) => {
  console.log('No resource found')
res.status(404).send('No resource found');
res.end();
}