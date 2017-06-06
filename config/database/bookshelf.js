process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var configDb = require('./knexfile');
var knex = require('knex')(configDb);

var BookShelf = require('bookshelf')(knex);

module.exports = BookShelf;