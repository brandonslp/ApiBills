var JSONAPISerializer = require('jsonapi-serializer').Serializer;

exports.messageSerializer = new JSONAPISerializer('message',{
	attributes: [
		'message'
	],
});