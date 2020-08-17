import knex from 'knex';
const configuration = require('../../knexfile');

const db = knex(configuration.development);

export default db;