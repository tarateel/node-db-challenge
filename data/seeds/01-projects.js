exports.seed = async (knex) => {
  await knex('projects').insert([
    { project_name: 'Build a Web API' },
    { project_name: 'Adding Data Persistence' },
    { project_name: 'Authentication and Testing' },
    { project_name: 'WEB Unit 4 Node Build' }
  ])
};
