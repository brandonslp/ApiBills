var JSONAPISerializer = require('jsonapi-serializer').Serializer;

exports.billSerializer = new JSONAPISerializer('bill',{
	attributes: [
		'name',
		'month',
		'cost',
		'company',
		'type',
		'limit_date',
		'status',
		'created_at',
		'updated_at',
		'deleted_at'
	],
});