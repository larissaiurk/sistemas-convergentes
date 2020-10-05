import path from 'path';

module.exports = {
  client: 'pg',
  connection: {
    database: 'sistemasconvergentes',
    user: 'postgres',
    password: 'password'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
  },
  useNullAsDefault: true,
}