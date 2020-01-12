exports.seed = async (knex) => {
  await knex('resources').insert([
    { resource_name: 'Resource-1', resource_description: 'resource-1' },
    { resource_name: 'Resource-2', resource_description: 'resource-2' },
    { resource_name: 'Resource-3', resource_description: 'resource-3' }
  ])
};