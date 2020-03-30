const knex = require('knex')
const configuration = require('../../knexfile')

const connection = knex(configuration.development) // fazendo a conexao com o banco

module.exports = connection //exportando essa funcao para outros arquivos