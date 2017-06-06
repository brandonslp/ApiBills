const dotenv = require('dotenv');
const path = require('path');
const env = process.env.NODE_ENV || 'development';

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 * change .env.example from .env local
 */
dotenv.load({ path: '.env' });


const config = {
	development:{
		app: {
			name: 'Unal'
		},
		port: process.env.PORT || 8080,
		db: process.env.MYSQLDBDEV_URI
	}
}

module.exports = config[env];