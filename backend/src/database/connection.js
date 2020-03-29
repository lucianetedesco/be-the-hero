const knex = require('knex');
const configuration = require('../../knexfile.js');

const conection = knex(configuration.development);

module.exports = conection;
