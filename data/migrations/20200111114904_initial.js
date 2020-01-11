exports.up = async function(knex) {
  await knex.schema.createTable('projects', (table) => {
    table.increments('id')
    table.string('project_name').notNullable()
    table.string('project_description')
    table.boolean('completed').notNullable().defaultTo(false)
  })

  await knex.schema.createTable('tasks', (table) => {
    table.increments('id')
    table.string('task_name').notNullable()
    table.string('task_description').notNullable()
    table.string('task_notes')
    table.boolean('completed').notNullable().defaultTo(false)
  })

  await knex.schema.createTable('resources', (table) => {
    table.increments('id')
    table.string('resource_name').notNullable().unique()
    table.string('resource_description')
  })

  await knex.schema.createTable('projects_tasks', (table) => {
    table.integer('project_id')
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.integer('task_id')
      .notNullable()
      .references('id')
      .inTable('tasks')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.primary(['project_id', 'task_id'])
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
  await knex.schema.dropTableIfExists('projects_tasks')
  await knex.schema.dropTableIfExists('resources')
  await knex.schema.dropTableIfExists('tasks')
  await knex.schema.dropTableIfExists('projects')
};
