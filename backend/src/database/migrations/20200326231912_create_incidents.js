
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments() // primary key com autoincrement

        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()

        table.string('ong_id').notNullable() // relacionamento

        table.foreign('ong_id').references('id').inTable('ongs') // criando o relacionamento
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
};
