import path from 'path';

module.exports = {
  client: 'pg',
  connection: {
    host: 'ec2-23-23-242-234.compute-1.amazonaws.com',
    database: 'dcd8ggi4do0uhp',
    user: 'kghtsrmubezfgq',
    password: '1db916bd5ef346ad5543edf81cd0c2414733729edf8c8ef05261839a89881c68'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
  },
  useNullAsDefault: true,
}