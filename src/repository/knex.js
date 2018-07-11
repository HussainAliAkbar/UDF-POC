import knex from 'knex';

import conf from '../conf';

export default knex({
  client: conf.get('database.client'),
  version: conf.get('database.version'),
  connection: {
    host: conf.get('database.host'),
    user: conf.get('database.user'),
    password: conf.get('database.password'),
    database: conf.get('database.dbName'),
  },
});
