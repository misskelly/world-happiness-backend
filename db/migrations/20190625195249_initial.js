
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('countries', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.integer('ladder');
      table.integer('corruption');
      table.integer('generosity');
      
      table.timestamps(true, true)
    }),
    
    knex.schema.createTable('jobs', (table) => {
      table.increments('id').primary();
      table.string('title');
      table.string('company');
      table.integer('country_id').unsigned()
      table.foreign('country_id')
      .references('countries.id')

      table.timestamps(true, true)
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('countries'),
    knex.schema.dropTable('jobs')
  ])
};


