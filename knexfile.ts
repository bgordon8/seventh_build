import path from 'path';
import { argsToArgsConfig } from 'graphql/type/definition';

const defaultOptions = {
  client: 'postgresql',
  connection: {
    database: 'seventh_build',
    host: 'localhost',
    port: 5432,
    user: '',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: path.join(__dirname, 'src', 'db', 'migrations'),
  },
  seeds: {
    directory: path.join(__dirname, 'src', 'db', 'seeds'),
  },
};

export default {
  development: config({
    connection: {
      database: 'seventh_build',
    },
  }),
  test: config({
    connection: {
      database: 'seventh_build_test',
    },
  }),
  production: {
    connection: {
      database: '',
    },
  },
} as {
  [key: string]: object;
};

function config(overides: any) {
  return Object.assign({}, defaultOptions, overides);
}
