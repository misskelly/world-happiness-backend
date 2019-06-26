
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('jobs'),
    
    knex.schema.createTable('job_postings', (table) => {
      table.increments('id').primary();
      table.string('title');
      table.string('company');
      table.string('url');
      table.string('location');
      table.integer('country_id').unsigned()
      table.foreign('country_id')
      .references('countries.id')
      
      table.timestamps(true, true)
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('job_postings'),
  ]);
};
