exports.seed = async (knex) => {
  await knex('tasks').insert([
    { task_name: 'Introduction to Node.js and Express', task_description: 'introduce node.js and Express' },
    { task_name: 'Server-Side Routing with Express', task_description: 'take a deeper look at routing' },
    { task_name: 'Express Middleware', task_description: 'the what, why and how of Middleware' },
    { task_name: 'Web Deployment and Best Practices', task_description: 'deploy an API to Heroku' },
    { task_name: 'Introduction to Relational Databases', task_description: 'Introduction to Relational Databases' },
    { task_name: 'Database Schema Design', task_description: 'Database Management Systems (DBMS)' },
    { task_name: 'Multi-Table Queries', task_description: 'Database access functions' },
    { task_name: 'Data Modeling', task_description: 'Creating multi table schemas in knex' },
    { task_name: 'Introduction to Authentication', task_description: 'explain what is authentication and provide guidelines for password security.' },
    { task_name: 'Using Sessions and Cookies', task_description: 'implement logout using a sessions based API' },
    { task_name: 'Using JSON Web Tokens (JWT)', task_description: 'produce and send a JSON Web Token (JWT)' },
    { task_name: 'Testing the Back End', task_description: 'test Web API Endpoints' },
    { task_name: 'Delivering a Backend Web Server', task_description: 'Back-end Architect' },
  ])
};