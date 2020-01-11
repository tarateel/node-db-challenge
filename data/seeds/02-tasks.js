exports.seed = async (knex) => {
  await knex('tasks').insert([
    { task_name: 'Introduction to Relational Databases' },
    { task_name: 'Database Schema Design' },
    { task_name: 'Multi-Table Queries' },
    { task_name: 'Data Modeling' }
  ])
};