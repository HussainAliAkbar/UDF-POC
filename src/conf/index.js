import convict from 'convict';
import fs from 'fs';
import debug from 'debug';

const conf = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  ip: {
    doc: 'The ip address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 4000,
    env: 'PORT',
  },
  database: {
    client: {
      doc: 'The dialet to use for knex.',
      format: '*',
      default: 'pg',
      env: 'DATABASE_CLIENT',
    },
    version: {
      doc: 'the version of the database',
      format: '*',
      default: '10.4',
      env: 'DATABASE_VERSION',
    },
    host: {
      doc: 'the database host',
      format: '*',
      default: '127.0.0.1',
      env: 'DATABASE_HOST',
    },
    user: {
      doc: 'the database username',
      format: '*',
      default: 'user',
      env: 'DATABASE_USERNAME',
    },
    password: {
      doc: 'the database password',
      format: '*',
      default: 'pass',
      env: 'DATABASE_PASSWORD',
    },
    dbName: {
      doc: 'the database name',
      format: '*',
      default: 'database',
      env: 'DATABASE_NAME',
    },
  },
});
const d = debug('kickstarter:conf');
const env = conf.get('env');
try {
  const path = `${__dirname}/${env}.json`;

  d('trying to access %s', path);
  fs.accessSync(path, fs.F_OK);

  conf.loadFile(path);
} catch (error) {
  d('file doesn\'t exist, loading defaults');
}

conf.validate({ strict: true });

export default conf;
