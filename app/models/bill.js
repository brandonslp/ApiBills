var BookShelf  = require('../../config/database/bookshelf');
BookShelf.plugin('registry');

var bill = BookShelf.Model.extend({
	tableName: 'bills',
	hasTimestamps: true
});


module.exports = BookShelf.model('bills', bill);