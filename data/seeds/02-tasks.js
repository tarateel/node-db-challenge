exports.seed = async (knex) => {
  await knex('tasks').insert([
    { task_name: 'Introduction to relational Databases' },
    { task_name: 'Database Schema Design' },
    { task_name: 'Multi-Table Queries' },
    { task_name: 'Data Modeling' }
  ])
};