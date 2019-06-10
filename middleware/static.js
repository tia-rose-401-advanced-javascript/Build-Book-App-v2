'use strict';

const express = require('express');
const path = require('path');
const stacticFile = path.join(__dirname, '../public');

module.exports = express.static(stacticFile);
