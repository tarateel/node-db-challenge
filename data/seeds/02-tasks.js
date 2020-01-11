exports.seed = async (knex) => {
  await knex('tasks').insert([
    { task_name: 'Introduction to Node.js and Express' },
    { task_name: 'Server-Side Routing with Express' },
    { task_name: 'Express Middleware' },
    { task_name: 'Web Deployment and Best Practices' },
    { task_name: 'Introduction to Relational Databases' },
    { task_name: 'Database Schema Design' },
    { task_name: 'Multi-Table Queries' },
    { task_name: 'Data Modeling' }
  ])
};