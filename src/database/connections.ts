import knex from 'knex';
import path from 'path';

const connections = knex({
  client: 'pg',
  connection: {
    database: 'sistemasconvergentes',
    user: 'postgres',
    password: 'password'
  },
  useNullAsDefault: true,
});

export default connections;
