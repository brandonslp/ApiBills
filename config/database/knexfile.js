// Update with your config settings.
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const config = require('../config');
console.log("db -> "+config.db);
const env = process.env.NODE_ENV || 'development';
var knex = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'xpectrum',
      database: 'API_SERVICIOS_DEV',//process.env.MYSQLDBDEV_URI,
      charset: 'utf8'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations/'
    },
    seeds: {
      directory: 'seeds/'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'xpectrum',
      database: config.db,
      charset: 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations/'
    },
    seeds: {
      directory: 'seeds/'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'xpectrum',
      database: config.db,
      charset: 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations/'
    },
    seeds: {
      directory: 'seeds/'
    }
  }

};
module.exports = knex[env];
