exports.seed = async (knex) => {
  await knex('resources').insert([
    { resource_name: 'Introduction to Relational Databases for WEBPT8 w/Jason Maurer', resource_description: 'https://youtu.be/y-v9zYM2tTE' },
    { resource_name: 'Database Schema Design for WEBPT8 w/Jason Maurer', resource_description: 'https://youtu.be/R1r9ewit-Ng' },
    { resource_name: 'Multi-Table Queries for WEBPT8 w/Jason Maurer', resource_description: 'Multi-Table Queries for WEBPT8 w/Jason Maurer' },
    { resource_name: 'Data Modeling for WEBPT8 w/Jason Maurer', resource_description: 'https://youtu.be/sSqQDLM_ZnQ' }
  ])
};