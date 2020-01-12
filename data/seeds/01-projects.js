exports.seed = async (knex) => {
  await knex('projects').insert([
    { project_name: 'Project-A' },
    { project_name: 'Project-B' },
    { project_name: 'Project-C' },
    { project_name: 'Project-D' }
  ])
};
