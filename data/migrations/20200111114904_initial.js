exports.up = async function(knex) {
  await knex.schema.createTable('projects', (table) => {
    table.increments()
    table.string('project_name').notNullable().unique()
    table.string('project_description')
    table.boolean('completed').notNullable().defaultTo(false)
  })

  await knex.schema.createTable('resources', (table) => {
    table.increments()
    table.string('resource_name').notNullable().unique()
    table.string('resource_description')
  })

  await knex.schema.createTable('tasks', (table) => {
    table.increments()
    table.string('task_description').notNullable()
    table.string('task_notes')
    table.boolean('completed').notNullable().defaultTo(false)
    table.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })

  await knex.schema.createTable('projects_resources', (table) => {
    table.integer('project_id')
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.integer('resource_id')
      .notNullable()
      .references('id')
      .inTable('resources')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.primary(['project_id', 'resource_id'])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('projects_resources')
  await knex.schema.dropTableIfExists('tasks')
  await knex.schema.dropTableIfExists('resources')
  await knex.schema.dropTableIfExists('projects')
};
