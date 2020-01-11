exports.seed = async (knex) => {
  await knex('resources').insert([
    { resource_name: 'Introduction to Node.js And Express for WEBPT8 w/Jason Maurer', resource_description: 'https://youtu.be/a02M39KXyXM' },
    { resource_name: 'Server-Side Routing for WEBPT8 w/Jason Maurer', resource_description: 'https://youtu.be/anSvSE0Lhy4' },
    { resource_name: 'Express Middleware for WEBPT8 w/Jason Maurer', resource_description: 'https://youtu.be/yArMoNoBZNs' },
    { resource_name: 'Web Deployment and Best Practices for WEBPT8 w/Jason Maurer', resource_description: 'https://youtu.be/7z8pNK2QgkY' },
    { resource_name: 'Introduction to Relational Databases for WEBPT8 w/Jason Maurer', resource_description: 'https://youtu.be/y-v9zYM2tTE' },
    { resource_name: 'Database Schema Design for WEBPT8 w/Jason Maurer', resource_description: 'https://youtu.be/R1r9ewit-Ng' },
    { resource_name: 'Multi-Table Queries for WEBPT8 w/Jason Maurer', resource_description: 'Multi-Table Queries for WEBPT8 w/Jason Maurer' },
    { resource_name: 'Data Modeling for WEBPT8 w/Jason Maurer', resource_description: 'https://youtu.be/sSqQDLM_ZnQ' },
    { resource_name: 'Introduction to Authentication for WEB24 w/Luis Hernandez' },
    { resource_name: 'Using Sessions and Cookies for WEB24 w/Luis Hernandez' },
    { resource_name: 'Using JSON Web Tokens (JWT) for WEB24 w/Luis Hernandez' },
    { resource_name: 'Testing the Back End for WEB24 w/Luis Hernandez' },
    { resource_name: 'Deployment to Heroku for FSW13 w/ Luis Hernandez' }
  ])
};